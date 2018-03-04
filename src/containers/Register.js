
import React from 'react';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

import {registerUser} from '../actions/index'

class Register extends React.Component {

    //declaring initial state
    state = {
        "username": "",
        "password":"",
        "cpassword":"",
        "disabled": true,
        "error": ""
    }

    // execute on change in input value
    handleChange = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // execute on form submit
    handleClick(e) {
        e.preventDefault()
        
        // form validation
        if((this.state.password === this.state.cpassword) && (this.state.password.length > 0) && (this.state.cpassword.length > 0)){
            toast.success("New User Created !",{
                position: toast.POSITION.TOP_CENTER
            })
            console.log(this.state)
            let currentData = JSON.parse(localStorage.getItem("users"))
            currentData.push(this.state)
            localStorage.setItem("users",JSON.stringify(currentData))
            setTimeout(()=>{
                this.props.history.push({
                    pathname: '/login',
                    state: this.state
                }) 
            },1000)
        }
        else{
            toast.warning("Fields can't be empty !",{
                position: toast.POSITION.TOP_CENTER
            })
        }
    }

    // render
    render() {
        return (
            <div className="panel">
                <ToastContainer />
                <p className="heading">Register</p>
                {this.state.error}
                <form className="cred-form" method="post">
                    <label>Username/Email</label>
                    <input type="text" name="username" value={this.state.username} placeholder="Username or email" onChange={e => this.handleChange(e)}/>

                    <label>Password</label>
                    <input type="password" name="password" value={this.state.password} placeholder="Enter password" onChange={e => this.handleChange(e)}/>

                    <label>Confirm Password</label>
                    <input type="password" name="cpassword" value={this.state.cpassword} placeholder="Confirm password" onChange={e => this.handleChange(e)}/>

                    <button className="cred-btn" type="submit" onClick={(e)=>this.handleClick(e)}>Signup</button>
                </form>
            </div>
        );
    }

}
 
const mapStateToProps = (state) => ({
    post: state.registerReducers
})

export default connect(mapStateToProps)(Register);
