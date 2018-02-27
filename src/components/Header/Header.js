import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = (props) => {

    let navlink = <ul className="right hide-on-med-and-down navlinks">
                    <li><NavLink to={'/Login'}>Login</NavLink></li>
                    <li><NavLink to={'/Register'}>Register</NavLink></li>
                  </ul>

    if(localStorage.getItem("authState")){
      navlink = <ul className="right hide-on-med-and-down navlinks">
                  <li>
                    <NavLink className="dropdown-button" to="#!" data-activates="dropdown1">
                      {localStorage.getItem("loggedInUser")}<i className="fa fa-caret-down right"></i>
                    </NavLink>
                  </li>
                </ul>
    }

    const logout = (e) => {
      localStorage.removeItem("loggedInUser")
      localStorage.removeItem("authState")
      this.myaccount = "hide"
      window.location.href = '/login'
    }

    return (
      <div className="navbar-fixed">
        {/* Dropdown Structure */}
        <ul id="dropdown1" className="dropdown-content">
          <li><a href="#!">My Account</a></li>
          <li className="divider"></li>
          <li onClick={logout}><a href="#!">Logout</a></li>
        </ul>
        <nav className="#ffffff white darken-4">
          <div className="nav-wrapper">
            <a href="/" className="brand-logo">Penguin</a>
            {navlink}
          </div>
        </nav>
      </div>
    );
}

export default Header;
