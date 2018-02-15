import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <ul>
          <li className="brand"><Link to={'/'}>Penguin</Link></li>
          <li><Link to={'/Register'}>Register</Link></li>
          <li><Link to={'/Login'}>Login</Link></li>
          <li><Link to={'/Profile'}>Profile</Link></li>
        </ul>
      </div>
    );
  }
}

export default Header;
