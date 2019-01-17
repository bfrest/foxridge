import React from "react";
import styled from "styled-components";

const ContactWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  padding-top: 10%;
  padding-bottom: 5%;
`;

const ContactForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  input {
    font-size: 1.5em;
    text-align: center;
    border: none;
    align-self: center;
    width: 100%;
    margin-bottom: 3%;
    border: 2px solid black;
    border-radius: 5px;
    :focus {
      border: 2px solid yellow;
    }
  }

  textarea {
    font-size: 1.5em;
    height: 20vh;
    width: 100%;
    margin-top: 2%;
    margin-bottom: 3%;
    border: 3px solid black;
    border-radius: 5px;
    align-self: center;

    :focus {
      border: 3px solid yellow;
    }
  }

  button {
    background: none;
    color: white;
    border: 2px solid white;
    font-size: 1.5em;
    width: 40%;
    align-self: center;
    padding: 5px;
    cursor: pointer;
    :hover {
      border: 2px solid yellow;
      color: yellow;
    }
  }

  @media (max-width: 450px) {
    width: 90%;
    font-size: 0.8em;
    margin-bottom: 50px;
    input {
      width: 95%;
    }
  }
`;

const Contact = () => {
  return (
    <ContactWrapper>
      <h2>Let's Talk</h2>
      <ContactForm action="https://formspree.io/freston75@gmail.com" method="POST">
        <input type="text" placeholder="Name" name="Name" encType="text/plain" />
        <input type="text" placeholder="Email" name="_replyto" />
        <textarea placeholder="Message or Question" name="message" size="100" />
        <button type="submit">Submit</button>
      </ContactForm>
    </ContactWrapper>
  );
};

export default Contact;
