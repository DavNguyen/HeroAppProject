// LIBRARY
/*eslint-disable no-unused-vars*/
import React from "react";
/*eslint-enable no-unused-vars*/
import { Route, IndexRoute } from "react-router-dom";

// COMPONENT
import Homepage from "./components/Homepage";
import Heroes from "./components/Heroes";

export default (
  <Router>
    <Route path="/heroes" component={Heroes} />
  </Router>
);
