import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="#263238 blue-grey darken-4">
          <div className="nav-wrapper">
            <a href="/" className="brand-logo">Penguin</a>
            <ul className="right hide-on-med-and-down">
              <li><NavLink to={'/Login'}>Login</NavLink></li>
              <li><NavLink to={'/Register'}>Register</NavLink></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
