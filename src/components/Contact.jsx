import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');

  const handleChange = (e) => {
    // Update form data when input values change
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear previous errors when user types
    setEmailError('');
    setMessageError('');
  };

  const validateEmail = (email) => {
    // Basic email validation pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email
    if (!validateEmail(formData.email)) {
      setEmailError('Invalid email address');
      return;
    }

    // Validate message
    if (!formData.message.trim()) {
      setMessageError('Message cannot be empty');
      return;
    }

    // Implement form submission logic if needed

    // For testing purposes, log the form data to the console
    console.log('Form submitted:', formData);

    // Notify the user
    alert('Form submitted successfully!');

    // Reset the form data
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <section>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        {/* Name field */}
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        {/* Email field */}
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
        {/* Message field */}
        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </label>
        {messageError && <p style={{ color: 'red' }}>{messageError}</p>}
        {/* Submit button */}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;
