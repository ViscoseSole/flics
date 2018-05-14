import React, { Component } from "react";
import { Link } from "react-router-dom";
import fire from '../../config/Fire';

import "./Browse.scss";
import Logo from "../Logo/Logo";

export default class Browse extends Component {

  signOut(e) {
    e.preventDefault();
    fire.auth().signOut().then(function() {
      console.log('Signed Out');
    }, function(error) {
      console.error('Sign Out Error', error);
    });
  }

  render() {
    return (
      <div className="Browse">
        <div className="Browse-header">
          <Link to="/" style={{ textDecoration: "none" }}>
            <Logo />
          </Link>

          <input placeholder="Search" />

          <Link to="/"> {/* Obviously a temporary solution */}
            <button onClick={(e) => this.signOut(e)}>Sign Out</button>
          </Link>
        </div>

        <div className="Browse-content-selected">

        </div>

        <div className="Browse-content">
          <div className="Browse-content-popular">
            <span>Popular right now: </span><br />

          </div>
        </div>
      </div>
    );
  }
}
