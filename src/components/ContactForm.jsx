import React, { useReducer, useState, useRef } from 'react'
import { Box, Text } from 'rebass'

import Input from './Input'
import TextArea from './TextArea'
import Button from './Button'
import Label from './Label'
import Modal from './Modal'

/*
  ⚠️ This is an example of a contact form powered with Netlify form handling.
  Be sure to review the Netlify documentation for more information:
  https://www.netlify.com/docs/form-handling/
*/

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

  const handleInputChange = event => {
    const { name, value } = event.target
    dispatch({ type: name, value })
  }

  const handleSuccess = () => {
    dispatch({ type: 'reset' })
    setIsModalVisible(true)
  }

  const handleModalClose = () => {
    setIsModalVisible(false)
    dispatch({ type: 'reset' })
  }

  const handleSubmit = event => {
    const form = event.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': form.getAttribute('name'), ...state }),
    })
      .then(handleSuccess)
      .catch(error => alert(error))
    event.preventDefault()
  }

  return (
    <>
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
          <Label htmlFor="contact-email">Email</Label>
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
      </form>

      <Modal
        open={isModalVisible}
        onClose={handleModalClose}
        label="Contact success"
      >
        <Text as="h1" fontSize={4} mb={2}>
          Success!
        </Text>
        <Text as="p" mb={4}>
          Thanks for connecting! Your message was sent my way and I'll be in
          touch <abbr title="as soon as possible">ASAP</abbr>.
        </Text>
        <Button onClick={handleModalClose}>Dismiss</Button>
      </Modal>
    </>
  )
}

export default ContactForm
