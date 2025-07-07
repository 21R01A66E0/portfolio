import React, { useState } from 'react';

const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alert('Please fill all fields.');
      return;
    }
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-form-container">
      <form  onSubmit={handleSubmit} action={"mailto:prashanthreddyburra1@gmail.com"} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
        />

        <button type="submit">Send Message</button>

        {submitted && <p className="success">Thank you! Your message has been sent.</p>}
      </form>

      <style>{`
        @media (max-width:768px){
          .container-form-contaier{
            width:90%;
          }
        }
        .contact-form-container {
          width:100%;
          max-width: 500px;
          margin: auto;
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .contact-form input,
        .contact-form textarea {
          padding: 12px;
          border: 1px solid #ccc;
          border-radius: 8px;
          font-size: 16px;
        }
        .contact-form button {
          background-color: #007bff;
          color: white;
          border: none;
          padding: 12px;
          border-radius: 8px;
          cursor: pointer;
        }
        .contact-form button:hover {
          background-color: #0056b3;
        }
        .success {
          color: green;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default ContactForm;