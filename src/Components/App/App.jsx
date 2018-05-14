import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Switch, Route } from "react-router-dom";
import "./App.scss";

import LandingPage from "../LandingPage/LandingPage.jsx";
import Signin from "../Signin/Signin.jsx";
import Register from "../Register/Register.jsx";
import Browse from "../Browse/Browse.jsx";

import fire from '../../config/Fire';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
  }
  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/login" component={Signin} />
        <Route path="/register" component={Register} />

        <Route path="/browse" component={Browse} />
        {/* this.state.user ? <Route path="/browse" component={Browse} /> : <Route path="/browse" component={Signin} /> */}
        <Route component={NotFound} />
      </Switch>
    );
  }
}

const NotFound = () => <h1>404.. This page is not found!</h1>;
