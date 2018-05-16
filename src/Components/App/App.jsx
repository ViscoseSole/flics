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
        <Route path="/login" component={this.state.user ? Browse : Signin} />
        <Route path="/register" component={this.state.user ? Browse : Register} />
        <Route path='/browse' component={this.state.user ? Browse : NotAuthorized} />
        <Route component={this.state.user ? Browse : NotFound} />
      </Switch>
    );
  }
}

const NotFound = () => <h1 style={{color: 'white'}}>404.. This page is not found!</h1>;
const NotAuthorized = () => <h1 style={{color: 'white'}}>You're not authorized to see this page!</h1>;
