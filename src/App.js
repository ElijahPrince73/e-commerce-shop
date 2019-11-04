import React, { Component } from "react";
import {
  Route,
} from "react-router-dom";

import Tours from './containers/Tours'

class App extends Component {
  render() {
    return (
      <>
        <Route to="/" />
        <Route to="/tours" component={Tours} />
      </>
    );
  }
}

export default App;
