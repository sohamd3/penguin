import React from 'react';
import { Link } from 'react-router-dom';

import LeftSidebar from './LeftSidebar'

//Parent Content
const Parent = (props) => {
    return(
        <div className="profile">
            
            {/* left sidebar to contain profile info */} 
            <LeftSidebar post={props.post}/>

            {/* mid section to contain posts */}
            <div className="content-panels mid-section">
                <div className="content-box">
                    <button type="button" className="btn compose-btn" onClick={props.changeName}>
                        <i className="fa fa-pencil-square"></i>
                        Compose
                    </button>
                </div>
                <div id="dynamic-posts">
                    {props.post.posts.map((d, i) => <Content key = {i} postData = {d}/>)}
                </div>
            </div>

            {/* right sidebar to contain users list etc */}
            <div className="content-panels right-sidebar">
                
            </div>
        </div>
    );
}


// Mid Content
const Content = (props) => {
    
       return (
            <div className="content-box">
                <img src={props.postData.postImg} alt="post pic" className="post-image"/>
                <Link to={props.postData.link}><p className="post-title">{props.postData.title}</p></Link>
                <ul className="post-details">
                    <li>{props.postData.createDate}</li>
                    <li><a href="/" className="number-of-comments">Comments ({props.postData.comments})</a></li>
                    <li>{props.postData.tags.slice(0,4).map((d, i) => <Tags key = {i} tagData = {d}/>)}</li>
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


export default Parent;