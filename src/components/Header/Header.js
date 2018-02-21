import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <ul>
          <li className="brand"><NavLink to={'/'}>Penguin</NavLink></li>
          <li><NavLink to={'/Register'}>Register</NavLink></li>
          <li><NavLink to={'/Login'}>Login</NavLink></li>
          <li><NavLink to={'/Profile'}>Profile</NavLink></li>
        </ul>
      </div>
    );
  }
}

export default Header;
