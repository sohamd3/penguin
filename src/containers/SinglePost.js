import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../components/SinglePost/SinglePost.css';
import LeftSidebar from '../components/Profile/LeftSidebar'

class SinglePost extends React.Component {
    
    render() {
        return (
            <div className="profile">
                {/* left sidebar to contain profile info */}
                <LeftSidebar post={this.props.post}/>

                {/* mid section to contain posts */}
                <div className="content-panels mid-section">
                    <div id="dynamic-posts">
                    {this.props.post.posts.slice(0,1).map((d, i) => <Content key = {i} postData = {d}/>)}  
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
const Content = (props) => {
    return (
        <div className="content-box">
            <img src={props.postData.postImg} alt="post pic" className="post-image"/>
            <a href={props.postData.link}><p className="post-title">{props.postData.title}</p></a>
            <ul className="post-details">
                <li>{props.postData.createDate}</li>
                <li><a href="/" className="number-of-comments">Comments ({props.postData.comments})</a></li>
                <li>{props.postData.tags.map((d, i) => <Tags key = {i} tagData = {d}/>)}</li>
            </ul>
            <p className="post-desc">{props.postData.desc}</p>
        </div>
    );
}

// Tags
const Tags = (props) => {
    return (
    <Link to={props.tagData.link}><span className="tags"># {props.tagData.name}</span></Link>
    );
}

 
const mapStateToProps = (state) => ({
    post: state.reduceProfileData
})

export default connect(mapStateToProps)(SinglePost);
