import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from "@apollo/react-hooks";
import { BrowserRouter, Switch } from "react-router-dom";

import App from './App';
import SiteLayout from "./components/SiteLayout";
import * as serviceWorker from './serviceWorker';

import "./assets/css/normalize.css";
import "./assets/css/skeleton.css";
import './index.css'

const client = new ApolloClient({
  uri: "http://localhost:4001"
});

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <ApolloProvider client={client}>
        <SiteLayout>
          <App />
        </SiteLayout>
      </ApolloProvider>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
