
import React from 'react';

import { connect } from 'react-redux';
import '../components/Profile/Profile.css';
import Parent from '../components/Profile/ProfileContainer.js'

// import {setName, loadData} from '../actions/index'

class Profile extends React.Component {
    
    constructor(props){
        super(props)
        console.log(this.props.match.params.username)
        this.post = []
        this.userdata = {}

        // Get user's posts from local storage
        try{
            JSON.parse(localStorage.getItem("posts")).reverse().map((d,i) => {
                if(this.props.match.params.username === d.name){
                    this.post.push(JSON.stringify(d))
                }
                return this.post
            })
        }
        catch(err){
            // Handle Error
        }

        // Get user details from local storage
        try{
            JSON.parse(localStorage.getItem("users")).map((d,i) => {
                    if(this.props.match.params.username === d.username){
                        return this.userdata = d
                    }
                    else{
                        return this.post.push()
                    }
            })
        }
        catch(err){
            // Handle Error
        }
        
    }

    // render 
    render() {
        return (
            <div>
                {<Parent post={this.post} userdata={this.userdata} urlparam = {this.props.match.params.username}/>}
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
