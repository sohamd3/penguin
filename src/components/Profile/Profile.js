import React, { Component } from 'react';

import { connect } from 'react-redux';
import './Profile.css';
import Parent from './ProfileContainer.js'

import {setName} from '../../actions/index'

class Profile extends React.Component {

    render() {
        return (
            <div>
                <Parent post={this.props.post} changeName={()=>this.props.changeName("Frank")}/>
            </div>
        );
    }
}
 
const mapStateToProps = (state) => ({
    post: state.reduceProfileData
})

const mapDispatchToProps = (dispatch) => {
    return {
      changeName: (name) => dispatch(setName(name))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
