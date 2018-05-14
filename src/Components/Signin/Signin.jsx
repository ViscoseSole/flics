import React, { Component } from "react";
import { Link } from "react-router-dom";
import fire from '../../config/Fire';
import Logo from "../Logo/Logo";
import "./Signin.scss";

export default class Signin extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.state = {
      email: '',
      password: ''
    }
  }

  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .then((success) => {console.log(success)})
    .catch(err => console.log(err.message))
  }

  render() {
    return (
      <div className="Signin">
        <div className="Signin-header">
          <Link to="/" style={{ textDecoration: "none" }}>
            <Logo />
          </Link>
        </div>

        <div className="Signin-form-container">
          <h1>Login</h1>
          <br />

          <span>Email</span><br />
          <input onChange={(e) => {this.setState({email: e.target.value})}} />
          <br />


          <span>Password</span><br />
          <input type="password" onChange={(e) => {this.setState({password: e.target.value})}} /><br />

          <Link to="/retrieve-password" style={{ textDecoration: "none" }}>
            <span>Forgot your password?</span><br />
          </Link>
          <br />

          <button onClick={(e) => this.login(e)}>Login</button>
          <hr />

          <span>New to Netflix? </span>
          <Link to="/register" style={{ textDecoration: "none" }}>
            <span> Click here to register</span><br />
          </Link>

        </div>
      </div>
    );
  }
}
