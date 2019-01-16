import React, { Component } from "react";
import "./Contact.css";

class Contact extends Component {
  render() {
    return (
      <div className="contact-component-wrapper">
        <h2>Let's Talk</h2>
        <form className="contact-form" action="https://formspree.io/freston75@gmail.com" method="POST">
          <input type="text" placeholder="Name" name="Name" encType="text/plain" />
          <input type="text" placeholder="Email" name="_replyto" />
          <textarea placeholder="Message or Question" name="message" size="100" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Contact;
