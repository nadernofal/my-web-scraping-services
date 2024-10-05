import React from 'react';
import './Contact.css'
const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <p>Get in touch with me</p>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message" />
        <button>Send</button>
      </form>
    </section>
  );
};

export default Contact;