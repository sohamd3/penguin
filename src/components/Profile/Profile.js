import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Profile.css';
import Parent from './ProfileContainer.js'

class Profile extends Component {

    componentWillMount() {
        //init dispatcher
        this.props.initPage
    }
    render() {
        return (
            <div>
                <Parent post={this.props.post} changeName={this.props.changeName}/>
            </div>
        );
    }
}
 
const mapStateToProps = (state) => ({
    post: state.reduceProfileData.post,
})

const mapDispatchToProps = (dispatch) => {
    return {
      changeName: () => dispatch({type:"change-name"}),
      initPage: () => dispatch({type:"show-profile-data"})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
