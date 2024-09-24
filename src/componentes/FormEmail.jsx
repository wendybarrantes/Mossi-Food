import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send('YOUR_SERVICE_ID', 'ASDhIcEQZlmut0ofY', formData, 'oVHV55asr8U5CcOzXRbv5')

      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
      }, (err) => {
        console.error('Failed to send email:', err);
      });

    // Reset form after sending
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <form onSubmit={sendEmail}>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        required
      />
      <button type="submit" style={{ marginBottom: '30px' }}>Send</button>
    </form>
  );
};

export default ContactForm;
