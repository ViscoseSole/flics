import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./Register.scss";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      age: '',
      agreedToTerms: false
    }
  }
  render() {
    return (
      <div className="Register">
        <div className="Register-header">
          <Link to="/" style={{ textDecoration: "none" }}>
            <Logo />
          </Link>
        </div>

        <div className="Register-form-container">
          <h1>Register</h1>
          <br />

          <span>Email</span><br />
          <input onChange={(e) => {this.setState({email: e.target.value})}} />
          <br />


          <span>Password</span><br />
          <input type="password" onChange={(e) => {this.setState({password: e.target.value})}} /><br />
          <br />

          <button onClick={() => console.log(this.state.email, this.state.password)}>Login</button>
          <hr />

          <span>Already a user? </span>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <span> Click here to login</span><br />
          </Link>

        </div>
      </div>
    );
  }
}
