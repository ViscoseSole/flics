import React, { Component } from "react";
import { Link } from "react-router-dom";
import { TMDB_API } from '../../keys.js';
import fire from '../../config/Fire';

import "./Browse.scss";
import Logo from "../Logo/Logo";

export default class Browse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      latestSearchResults: []
    }
  }

  signOut(e) {
    e.preventDefault();
    fire.auth().signOut().then(function() {
      console.log('Signed Out');
    }, function(error) {
      console.error('Sign Out Error', error);
    });
  }

  search(e) {
    e.preventDefault();
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API}&query=${this.state.search}`)
    .then(res => res.json())
    .then(data => this.setState({latestSearchResults: data.results}))
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="Browse">
        <div className="Browse-header">
          <Link to="/" style={{ textDecoration: "none" }}>
            <Logo />
          </Link>

          <input placeholder="Search for movies" onKeyPress={(e) => {e.key === 'Enter' ? this.search(e) : false;}} onChange={(e) => {this.setState({search: e.target.value})}} />

          <button onClick={(e) => this.signOut(e)}>Sign Out</button>
        </div>

        <div className="Browse-content-selected">

        </div>

        <div className="Browse-content">
            {
              this.state.latestSearchResults.map((item, i) => {
                return (
                  <div className="Poster">
                    <img src=
                      {
                      item.poster_path !== null ? `https://image.tmdb.org/t/p/w500/${item.poster_path}` : ""
                      }></img>

                    <p>
                      {
                        item.poster_path !== null ? "" : item.title
                      }
                    </p>
                  </div>
                )}
              )
            }
        </div>
      </div>
    );
  }
}
