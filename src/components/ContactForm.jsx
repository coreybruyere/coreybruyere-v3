import React, { useReducer, useState, useRef } from 'react'
import { Box } from 'rebass'

import Input from './Input'
import TextArea from './TextArea'
import Button from './Button'
import Label from './Label'
import Modal, { useModalState } from './Modal'
import Test from './Test'

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
  const [isModalVisible, setIsModalVisible] = useState(true)
  const modal = useModalState({ visible: isModalVisible })

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

      <Modal.Trigger as={Button} {...modal}>
        Open modal
      </Modal.Trigger>

      <Modal {...modal} ariaLabel="example" onClose={handleModalClose}>
        Praesent sit amet quam ac velit faucibus dapibus. Quisque sapien ligula,
        rutrum quis aliquam nec, convallis sit amet erat. Mauris auctor blandit
        porta. In imperdiet rutrum nunc. Integer suscipit sodales ex, ut
        lobortis orci rutrum id. Vestibulum scelerisque, felis ut sollicitudin
        elementum, dolor nibh faucibus orci, eu aliquet felis diam sed eros.
        Donec eget sapien lacinia, viverra felis in, placerat urna. Vestibulum
        sed viverra orci. Donec id tellus eget dui porta lobortis ac eu metus.
        Praesent id ultricies odio. In hac habitasse platea dictumst. Sed lorem
        lacus, hendrerit non sodales id, consectetur quis magna. Nullam non
        lacinia risus, ut varius est. Nam nec pulvinar tellus, eu ultrices elit.
        Cras tincidunt et purus eu condimentum. Nunc vitae consequat nibh.
      </Modal>
    </form>
  )
}

export default ContactForm
