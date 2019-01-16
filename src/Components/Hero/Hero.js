import React, { Component } from "react";
import "./Hero.css";

import Services from "../Services/Services.js";
import Contact from "../Contact/Contact.js";
class Hero extends Component {
  render() {
    return (
      <div>
        <div className="hero">
          <h1 className="company-name">Foxridge Development</h1>
        </div>
        <Services />
        <Contact />
      </div>
    );
  }
}

export default Hero;
