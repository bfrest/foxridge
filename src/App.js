import React, { Component } from "react";
import "./App.css";
import routes from "./routes.js";

// import Nav from "./components/Nav/Nav.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        {routes}
        {/* <h3>Copywrite {new Date().getFullYear()}</h3> */}
      </div>
    );
  }
}

export default App;
