import React from 'react'
import './contact.css'
const Contact = () => {
  return (
    <>
    <div className='contactAll'>
        <div className="line">
          <div className="inps">
          <div className="upper">
          <input type="text" placeholder="Full name" className="InputStyle"/>
          <input type="text" placeholder="Email Address" className="InputStyle"/>
          </div>
          <input type="text" placeholder="Subject" className="InputStylelower"/>
          {/* <input type="text" placeholder="Message" className="InputStylelowermessage"/> */}
          <textarea name="textarea" className='InputStylelowermessage' placeholder='Message'></textarea>
          <div>
          </div>
          </div>
        <div className="bt">
        <button className='btn'>Send Message</button>
        </div>
        </div>
        </div>
    </>
  )
}

export default Contact