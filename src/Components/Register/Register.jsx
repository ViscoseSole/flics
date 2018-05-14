import React, { Component } from "react";
import { Link } from "react-router-dom";
import fire from '../../config/Fire';
import Logo from "../Logo/Logo";
import "./Register.scss";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.registerUser = this.registerUser.bind(this);
    this.state = {
      email: '',
      password: '',
      passwordConfirmation: '',
      age: '',
      agreedToTerms: false
    }
  }

  registerUser(e) {
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then((u) => console.log("done", u))
    .catch(e => console.log(e))
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

          <span>Re-type Password</span><br />
          <input type="password" onChange={(e) => {this.setState({passwordConfirmation: e.target.value})}} /><br />
          <br />

          <button onClick={(e) => this.registerUser(e)}>Register</button>
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
