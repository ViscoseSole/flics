import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./LandingPage.scss";
import Logo from "../Logo/Logo";

export default class LandingPage extends Component {
  render() {
    return (
      <div className="LandingPage">
        <div className="LandingPage-header">
          <Link to="/" style={{ textDecoration: "none" }}>
            <Logo />
          </Link>

          <Link to="/login">
            <button>Sign In</button>
          </Link>
        </div>

        <div className="LandingPage-header-content">
          <span>See what's next.</span>
          <span>WATCH ANYWHERE. CANCEL AT ANY TIME.</span>
          <Link to="/register">
            <button>JOIN FREE FOR A MONTH</button>
          </Link>
        </div>
      </div>
    );
  }
}
