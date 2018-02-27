
import React, { Component } from 'react';

import { connect } from 'react-redux';
import '../components/Profile/Profile.css';
import Parent from '../components/Profile/ProfileContainer.js'

import {setName, loadData} from '../actions/index'

class Profile extends React.Component {
    
    constructor(props){
        super(props)
        console.log(this.props.match.params.username)
        this.post = []
        this.userdata = {}

        // Get user's posts from local storage
        try{
            JSON.parse(localStorage.getItem("posts")).map((d,i) => {
                if(this.props.match.params.username == d.name){
                    this.post.push(JSON.stringify(d))
                }
            })
        }
        catch(err){
            // Handle Error
        }

        // Get user details from local storage
        try{
            JSON.parse(localStorage.getItem("users")).map((d,i) => {
                if(this.props.match.params.username == d.username){
                    this.userdata = d
                }
                else{
                    this.post.push()
                }
            })
        }
        catch(err){
            // Handle Error
        }
    }

    // Executes before component is mounted. Here used to check user is logged in or not
    componentWillMount(){
        try{
            if(!localStorage.getItem("loggedInUser"))
                this.props.history.push({pathname: '/login'}) 
        }
        catch(err){
            //Handle Error
        }
    }

    // render 
    render() {
        return (
            <div>
                {<Parent post={this.post} userdata={this.userdata}/>}
            </div>
        );
    }
}
 
const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
