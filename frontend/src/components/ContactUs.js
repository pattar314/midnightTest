import React, { useState } from 'react'
import './styles/contactStyles.css'
import axios from 'axios'

const ContactUs = () => {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const submitContact = async (e) => {
    e.preventDefault()

    const newContact = {
      from: email,
      firstName,
      lastName,
      message
    }

    setFirstName('')
    setLastName('')
    setEmail('')
    setMessage('')

    const contactSubmission = await axios.post('/contact', newContact)
    console.log('contactSubmission: ', contactSubmission.data)
  }

  return (
    <section className='contact-wrapper'>
      <section className='contact-banner'></section>
      <section className='contact-form-wrapper'>
        <form className='contact-form' onSubmit={submitContact}>
          <section className='contact-form-name'>
            <section className='contact-form-name-inputs'>
              <label>First name
                <input className='contact-form-inputs' value={firstName} onChange={(e) => setFirstName(e.target.value)} name='firstName' />
              </label>
              <label>
                Last name
                <input className='contact-form-inputs' value={lastName} onChange={(e) => setLastName(e.target.value)} name='lastName' />
              </label>
            </section>
          </section>
          <label >
            Email
            <input type='email' className='contact-form-email' value={email} onChange={(e) => setEmail(e.target.value)} name='email' />
          </label>
          <label>
            Message or comment
            <textarea rows='5' cols='140' className='contact-form-message' value={message} onChange={(e) => setMessage(e.target.value)} name='message' />
          </label>
          <button type='submit'>Submit</button>
        </form>
      </section>
    </section>
  )
}

export default ContactUs