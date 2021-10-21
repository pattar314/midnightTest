import { get } from 'lodash';
import React, {useEffect, useState} from 'react'

const ContactPage = () => {

    const [formData, updateData] =  useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    })

    //look up curried functions to understand this
    const handleChange = name => event => {
        console.log(`updated value: ${name}: ${event.target.value}`)
      updateData( { ...formData, [name]: event.target.value })
    }


    let fields = {}

    
        const formCollector = async (e) => {
            try{
                e.preventDefault()
                console.log('form collector is running')
                let toSend = {
                        firstName: formData["firstName"],
                        lastName: formData["lastName"],
                        email: formData["email"],
                        message: formData["message"],
                    }
                    console.log('tosend: ', toSend)
                try{
                    let sender = fetch('/sendcontact', {
                        method: "POST",
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(toSend)
                })
                updateData({firstName: '', lastName: '', email: '', message: ''})
                return await sender;
            } catch(err){
                console.log('error: ' + err)
            }
            
    } catch (err) {
        console.log('there was an error: ', err)
    }
}
        
        



    return (
        <div className='contact-wrapper'>
            <form className='contact-form' onSubmit={formCollector}>
                <b><div className='contact-banner'>Send us a message</div><br/></b>
                <b><div className='contact-info-section'></div></b><br/>
                <b><h3 className='form-label'>Name</h3></b><br/>
                <div className='name-input-group'>
                    <div className='another-name-class'>
                        <input type='text' id='first-name-text' name='firstName' className='inputs' onChange={handleChange('firstName')} value={formData['firstName']} />
                        <label htmlFor='first-name' className='sub-label'>First</label>
                        </div>                
                    <div className='another-name-class'>
                        <input type='text' id='last-name-text' name='lastName' className='inputs' onChange={handleChange("lastName")} value={formData['lastName']} />
                        <label htmlFor='last-name' className='sub-label'>Last</label><br/>  
                </div></div>

                <label htmlFor='email' className='form-label'><b><h3>Email</h3></b></label><br/>
                <input type='email' name='email' id='email-text' className='inputs' onChange={handleChange("email")} value={formData['email']} /><br/>
                <label htmlFor='message' className='form-label'><b><h3>Comment or Message</h3></b></label><br/>
                <textarea name='message' id='message-text' className='inputs' rows='10' cols='30' onChange={handleChange("message")} value={formData['message']} />
                <button type='submit' >Submit</button>
            </form>
        </div>
    )
}

export default ContactPage
