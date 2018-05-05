import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./LandingPageHeader.scss";
import Logo from "../Logo/Logo";

export default class LandingPageHeader extends Component {
  render() {
    return (
      <div>
        <div className="landing-page-header">
          <Link to="/" style={{ textDecoration: "none" }}>
            <Logo />
          </Link>

          <Link to="/Signin">
            <button>Sign In</button>
          </Link>
        </div>

        <div className="landing-page-header-content">
          <span>See what's next.</span>
          <span>WATCH ANYWHERE. CANCEL AT ANY TIME.</span>
          <button>JOIN FREE FOR A MONTH</button>
        </div>
      </div>
    );
  }
}
