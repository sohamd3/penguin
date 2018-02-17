import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './SinglePost.css';
import LeftSidebar from '../Profile/LeftSidebar'

class SinglePost extends Component {

    componentWillMount() {
        //init dispatcher
        // this.props.dispatch({type:"show-single-post-data"});
    }
    render() {
        return (
            <div className="profile">
                {/* left sidebar to contain profile info */}
                <LeftSidebar post={this.props.post}/>

                {/* mid section to contain posts */}
                <div className="content-panels mid-section">
                    <div className="content-box">
                        <button type="button" className="btn compose-btn">
                            <i className="fa fa-pencil-square"></i>
                            Compose
                        </button>
                    </div>
                    <div id="dynamic-posts">
                        
                    </div>
                </div>

                {/* right sidebar to contain users list etc */}
                <div className="content-panels right-sidebar">

                </div>
            </div>
        );
    }
}
 
const mapStateToProps = (state) => ({
    post: state.reduceProfileData.post
})

export default connect(mapStateToProps)(SinglePost);
