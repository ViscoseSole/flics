import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Switch, Route } from "react-router-dom";
import "./App.scss";

import LandingPage from "../LandingPage/LandingPage.jsx";
import Signin from "../Signin/Signin.jsx";
import Register from "../Register/Register.jsx";

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/login" component={Signin} />
        <Route path="/register" component={Register} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

const NotFound = () => <h1>404.. This page is not found!</h1>;
