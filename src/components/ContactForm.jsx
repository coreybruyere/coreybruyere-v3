import React, { useReducer, useState } from 'react'
import { useDialogState, Dialog } from 'reakit/Dialog'
import { Box } from 'rebass'

import Input from './Input'
import TextArea from './TextArea'
import Button from './Button'
import Label from './Label'

/*
  ⚠️ This is an example of a contact form powered with Netlify form handling.
  Be sure to review the Netlify documentation for more information:
  https://www.netlify.com/docs/form-handling/
*/

// @todo: CONVERT TO FUNCTIONAL COMPONENT AND ADD MODAL

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const initialContactState = {
  name: '',
  email: '',
  message: '',
}

const contactReducer = (state, action) => {
  if (action.type === 'reset') {
    return initialContactState
  }

  const result = { ...state }
  result[action.type] = action.value
  return result
}

const ContactForm = () => {
  const [state, dispatch] = useReducer(contactReducer, initialContactState)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const dialog = useDialogState({ modal: isModalVisible })

  const handleInputChange = event => {
    const { name, value } = event.target
    dispatch({ type: name, value })
  }

  const handleSubmit = event => {
    const form = event.target
    console.log({ ...state })
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': form.getAttribute('name'), ...state }),
    })
      .then(handleSuccess)
      .catch(error => alert(error))
    event.preventDefault()
  }

  const handleSuccess = () => {
    dispatch({ type: 'reset' })
    console.log('handle success is running')
    setIsModalVisible(true)
  }

  const handleModalClose = () => {
    setIsModalVisible(false)
  }

  return (
    <form
      name="contact-me"
      method="post"
      action="/contact-success/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <Input type="hidden" name="form-name" value="contact-me" />
      <p hidden>
        <label>
          Don’t fill this out:{' '}
          <Input name="bot-field" onChange={handleInputChange} />
        </label>
      </p>

      <Box>
        <Label htmlFor="contact-name">Name</Label>
        <Input
          name="name"
          id="contact-name"
          type="text"
          placeholder="Your name"
          value={state.name}
          onChange={handleInputChange}
          required
        />
      </Box>

      <Box>
        <Label htmlFor="contact-name">Email</Label>
        <Input
          name="email"
          id="contact-email"
          type="email"
          placeholder="Your email address"
          value={state.email}
          onChange={handleInputChange}
          required
        />
      </Box>

      <Box>
        <Label htmlFor="contact-message">Message</Label>
        <TextArea
          name="message"
          id="contact-message"
          type="text"
          placeholder="Your message"
          value={state.message}
          onChange={handleInputChange}
          required
        />
      </Box>
      <Button name="submit" type="submit">
        Send
      </Button>

      {/* <Modal visible={this.state.showModal}>
          <p>
            Thank you for reaching out. I will get back to you as soon as
            possible.
          </p>
          <Button onClick={this.closeModal}>Okay</Button>
        </Modal> */}

      <Dialog
        {...dialog}
        aria-label="Welcome"
        style={{ position: 'static', transform: 'none' }}
      >
        Focus is not trapped within me.
        <button onClick={handleModalClose}>Close</button>
      </Dialog>
    </form>
  )
}

export default ContactForm
