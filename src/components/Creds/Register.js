import React, { Component } from 'react';
import './Creds.css';

class Register extends Component {
  render() {
    return (
      <div className="panel">
        <p className="heading">Register</p>
        <form className="cred-form">
            
            <label>Username/Email</label>
            <input type="text" name="username" placeholder="Username or email"/>

            <label>Password</label>
            <input type="password" name="password" placeholder="Enter password"/>

            <label>Confirm Password</label>
            <input type="password" name="cpassword" placeholder="Confirm password"/>

            <button className="cred-btn">Signup</button>  

        </form>
      </div>
    );
  }
}

export default Register;
