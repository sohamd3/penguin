
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

import '../components/Auth/Auth.css';

class Login extends Component {

    // componentWillMount(){
    //     if(this.props.history.location.state.username === "sohamda1@gmail.com"){
    //         this.props.history.push("/profile")
    //     }
    // }

    //declaring initial state
    state = {
        "username": "",
        "password":"",
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
        if((this.state.username.length > 0) && (this.state.password.length > 0)){
            let creds = {
                "username":"",
                "password":""
            }
            
            try {
                JSON.parse(localStorage.getItem("users")).map((d,i)=>{
                    if(this.state.username == d.username){
                        creds = d
                    }
                })
            }
            catch(err){
                // Error Check

            }

            if((this.state.username === creds.username) && (this.state.password === creds.password)){
                toast.success("Logging In !",{
                    position: toast.POSITION.TOP_CENTER
                })
                localStorage.setItem("loggedInUser", creds.username)
                localStorage.setItem("authState", true)
                setTimeout(()=>{
                    window.location.href = '/profile/'+creds.username
                },1000)
            }
            else{
                toast.error("Wrong Username/Password !",{
                    position: toast.POSITION.TOP_CENTER
                })
            }
        }
        else{
            toast.warning("Fields can't be empty !",{
                position: toast.POSITION.TOP_CENTER
            })
        }
    }

    render() {
        return (
        <div className="panel">
            <p className="heading">Sign In</p>
            <ToastContainer />
            <form className="cred-form">
                <label>Username/Email</label>
                <input type="text" name="username" placeholder="Enter username or email" onChange={e=>this.handleChange(e)}/>

                <label>Password</label>
                <input type="password" name="password" placeholder="Enter password" onChange={e=>this.handleChange(e)}/>

                <button className="cred-btn" onClick={e=>this.handleClick(e)}>Login</button>  

            </form>
        </div>
        );
    }
}

const mapStateToProps = (state) => ({
    // post: state.registerReducers
})

export default connect(mapStateToProps)(Login);

