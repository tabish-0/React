import React, { useState } from 'react';

const ContactForm = () => {

  return (

    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>
      <div className="contact-wrapper container">
        <form>
          <input
            type="text"
            className="form-control"
            placeholder="enter your name"
            name="name"
            required
            autoComplete="off"
            
          />

          <input
            type="email"
            className="form-control"
            placeholder="Enter you email"
            name="email"
            required
            autoComplete="off"
            
          />

          <textarea
            className="form-control"
            rows="8"
            placeholder="Enter your message"
            name="message"
            required
            autoComplete="off"
            
          ></textarea>

          <button type="submit" value="send">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
