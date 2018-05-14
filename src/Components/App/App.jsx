import React, { Component } from "react";
import ReactDOM from "react-dom";
import fire from '../../config/Fire';
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.scss";

import LandingPage from "../LandingPage/LandingPage.jsx";
import Signin from "../Signin/Signin.jsx";
import Register from "../Register/Register.jsx";
import Browse from "../Browse/Browse.jsx";

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
        <Route exact path="/" component={this.state.user ? Browse : LandingPage} />

        <Route path="/login" component={this.state.user ? NotFound : Signin} />
        <Route path="/register" component={this.state.user ? NotFound : Register} />

        {/*
          -Wanted to simulate the /browse URL but honestly it doesn't matter. It's a start.

          I can do this by redirecting all urls to /browse if user is logged in.

          <Route path="/browse" component={Browse} />
        */}

        <Route component={NotFound} />
      </Switch>
    );
  }
}

const NotFound = () => <h1 style={{color: 'white'}}>404.. This page is not found!</h1>;
