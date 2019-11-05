import React, { Component } from "react";
import {
  Route,
} from "react-router-dom";

import Tours from './containers/Tours'

class App extends Component {
  render() {
    return (
      <>
        <Route exact path="/" component={() => <h1>Heloo</h1>} />
        <Route exact path="/tours" component={Tours} />
      </>
    );
  }
}

export default App;
