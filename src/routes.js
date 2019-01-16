import React from "react";
import { Switch, Route } from "react-router-dom";

import Hero from "./Components/Hero/Hero.js";
// import Gallery from "./components/Gallery/Gallery.js";

export default (
  <Switch>
    <Route exact path="/" component={Hero} />
    {/* <Route path="/gallery" component={Gallery} /> */}
  </Switch>
);
