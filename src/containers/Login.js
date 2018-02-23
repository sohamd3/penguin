
import React, { Component } from 'react';
import { connect } from 'react-redux';

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
            if(JSON.parse(localStorage.getItem(this.state.username)) === null){
                creds = {...creds}
            }   
            else{
                creds = JSON.parse(localStorage.getItem(this.state.username));
            }
            console.log(creds)
            if((this.state.username === creds.username) && (this.state.password === creds.password)){
                this.setState({
                    error: "Proceed"
                })
                setTimeout(()=>{
                    this.props.history.push({
                        pathname: '/profile',
                        state: this.state
                    }) 
                },1000)
            }
            else{
                this.setState({
                    error: "Wrong Creds"
                })
            }
        }
        else{
            this.setState({
                error: "Fields Can't Be Empty"
            })
        }
    }

    render() {
        return (
        <div className="panel">
            <p className="heading">Sign In</p>
            {this.state.error}
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

