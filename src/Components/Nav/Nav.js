import React, { Component } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <div className="nav-component-wrapper">
        <nav className="nav-bar">
          <Link to="/">
            <a>Home</a>
          </Link>
          <Link to="/gallery">
            <a>Gallery</a>
          </Link>
        </nav>
      </div>
    );
  }
}

export default Nav;
