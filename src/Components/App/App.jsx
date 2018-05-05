import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import "./App.scss";

import LandingPageHeader from "../Header/LandingPageHeader.jsx";
import Signin from "../Signin/Signin.jsx";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={LandingPageHeader} />
          <Route exact path="/Signin" component={Signin} />
          <Route render={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

const NotFound = () => <h1>404.. This page is not found!</h1>;
