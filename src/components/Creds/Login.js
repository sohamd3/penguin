import React, { Component } from 'react';
import './Creds.css';

class Login extends Component {
  render() {
    return (
      <div className="panel">
        <p className="heading">Sign In</p>
        <form className="cred-form">
            
            <label>Username/Email</label>
            <input type="text" name="username" placeholder="Enter username or email"/>

            <label>Password</label>
            <input type="password" name="password" placeholder="Enter password"/>

            <button className="cred-btn">Login</button>  

        </form>
      </div>
    );
  }
}

export default Login;
