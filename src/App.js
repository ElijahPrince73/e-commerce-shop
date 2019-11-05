import React, { Component } from "react";
import {
  Route,
} from "react-router-dom";

import Home from './containers/Home/'
import Tours from './containers/Tours'

class App extends Component {
  render() {
    return (
      <>
        <Route exact path="/" component={Home} />
        <Route exact path="/tours" component={Tours} />
      </>
    );
  }
}

export default App;
