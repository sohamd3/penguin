import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Profile.css';
import Parent from './ProfileContainer.js'

class Profile extends Component {

    componentWillMount() {
        //init dispatcher
        this.props.dispatch({type:"show-profile-data"});
    }
    render() {
        return (
            <Parent post={this.props.post}/>
        );
    }
}
 
const mapStateToProps = (state) => ({
    post: state.post
})

export default connect(mapStateToProps)(Profile);
