import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
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
                    
                    </div>
                    <div id="dynamic-posts">
                    {this.props.post.posts.slice(0,1).map((d, i) => <Content key = {i} postData = {d}/>)}
                    {console.log(this.props.post)}    
                    </div>
                </div>

                {/* right sidebar to contain users list etc */}
                <div className="content-panels right-sidebar">

                </div>
            </div>
        );
    }
}

// Mid Content
class Content extends React.Component {
    render() {
       return (
            <div className="content-box">
                <img src={this.props.postData.postImg} alt="post pic" className="post-image"/>
                <a href={this.props.postData.link}><p className="post-title">{this.props.postData.title}</p></a>
                <ul className="post-details">
                    <li>{this.props.postData.createDate}</li>
                    <li><a href="/" className="number-of-comments">Comments ({this.props.postData.comments})</a></li>
                </ul>
                <p className="post-desc">{this.props.postData.desc}</p>
            </div>
       );
    }
}

 
const mapStateToProps = (state) => ({
    post: state.reduceProfileData.post
})

export default connect(mapStateToProps)(SinglePost);
