import React, { useState } from 'react';
import './contact.css';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    content: ''
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className='contactAll'>
      <Toaster className="tops"/>
      <div className="line">
        <div className="inps">
          <div className="upper">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full name"
              className="InputStyle"
            />
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="InputStyle"
            />
          </div>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="InputStylelower"
          />
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            className='InputStylelowermessage'
            placeholder='Message'
          />
        </div>
        <div className="bt">
          <button
            className='btn'
            onClick={async () => {
              try {
                console.log("Submitting formData:", formData);
                const res = await axios.post('http://localhost:6969/api/notes', formData);
                console.log('Note saved:', res.data);
                toast.success("Message sent successfully!");
                setFormData({ name: '', email: '', subject: '', content: '' });
              } catch (error) {
                console.error('Error sending message:', error);
                toast.error("Failed to send message.");
              }
            }}
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
