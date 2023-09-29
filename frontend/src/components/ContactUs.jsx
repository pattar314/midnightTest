import React, { useState } from 'react'

const ContactUs = () => {

  const [firstName, setFirstName] = useState(null)
  const [lastName, setLastName] = useState(null)
  const [email, setEmail] = useState(null)
  const [message, setMessage] = useState(null)

  const submitContact = null

  return (
    <section className='contact-wrapper'>
      <section className='contact-banner'></section>
      <section className='contact-form-wrapper'>
        <form className='contact-form' onSubmit={submitContact}>
          <section className='contact-form-name'>
            <h2>Name</h2>
            <section className='contact-form-name-inputs'>
              <input className='contact-form-inputs' value={firstName} onChange={(e) => setFirstName(e.target.value)} name='firstName' />
              <label for='firstName'>First</label>
              <input className='contact-form-inputs' value={lastName} onChange={(e) => setLastName(e.target.value)} name='lastName' />
              <label for='lastName'>Last</label>
            </section>
          </section>
          <label for='email'>Email</label>
          <input type='email' className='contact-form-email' value={email} onChange={(e) => setEmail(e.target.value)} name='email' />
          <label for='message'>Message or comment</label>
          <textarea rows='5' cols='140' className='contact-form-message' value={message} onChange={(e) => setMessage(e.target.value)} name='message' />
          <button type='submit'>Submit</button>
        </form>
      </section>
    </section>
  )
}

export default ContactUs