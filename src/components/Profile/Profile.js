import React, { Component } from 'react';

import { connect } from 'react-redux';
import './Profile.css';
import Parent from './ProfileContainer.js'

class Profile extends React.Component {
    
    componentWillUpdate() {
        //before component renders
    }
    componentDidMount() {
        //After component mounts
    }
    componentWillReceiveProps() {
        //If component receives props
    }
    render() {
        return (
            <div>
                <Parent post={this.props.post} changeName={this.props.changeName}/>
                {/* <h1>{console.log(this.props.post)}</h1> */}
            </div>
        );
    }
}
 
const mapStateToProps = (state) => ({
    post: state.reduceProfileData.post
})

const mapDispatchToProps = (dispatch) => {
    return {
      changeName: () => dispatch({type:"change-name"}),
      initPage: () => dispatch({type:"show-profile-data"})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
