import React from 'react'

export default function Contact() {
  return (
    <div className='contact'>
        <form>
            <input type="text" placeholder='Name.' required />
            <input type="email" placeholder='Email.' required/>
            <textarea cols="30" placeholder='Type your message here.' rows="10" required></textarea>
            <button type='Submit'>Send Message</button>
        </form>
    </div>
  )
}
