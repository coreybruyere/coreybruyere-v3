import React, { useReducer, useState } from 'react'
import { useDialogState, Dialog, DialogDisclosure } from 'reakit/Dialog'
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
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact-me" />
      <p hidden>
        <label>
          Don’t fill this out:{' '}
          <input name="bot-field" onChange={handleInputChange} />
        </label>
      </p>

      <input
        name="name"
        type="text"
        placeholder="Full Name"
        value={state.name}
        onChange={handleInputChange}
        required
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        value={state.email}
        onChange={handleInputChange}
        required
      />
      <textarea
        name="message"
        type="text"
        placeholder="Message"
        value={state.message}
        onChange={handleInputChange}
        required
      />
      <button name="submit" type="submit">
        Send
      </button>

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
