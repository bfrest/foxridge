import React, { Component } from "react";
import "./App.css";
import Services from "./Components/Services.js";
import Contact from "./Components/Contact.js";
import Hero from "./Components/Hero";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero />
        <Services />
        <Contact />
      </div>
    );
  }
}

export default App;
