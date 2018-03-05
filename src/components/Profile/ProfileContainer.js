import React from 'react';
import { Link } from 'react-router-dom';

import LeftSidebar from './LeftSidebar'

//Parent Content
const Parent = (props) => {

    // Condition to check if "post" exists in response
    let posts = {}
    if(props.post){
        posts = props.post.map((d, i) => <Content key = {i} postData = {JSON.parse(d)}/>)
    }
    else{
        posts = <p>Go write something then come back !!!</p>
    }

    // render
    return(    
        
        <div className="container width-90">
            <div className="row">
                <div className="col m3">
                    {/* left sidebar to contain profile info */} 
                    <LeftSidebar post={props.userdata} urlparam={props.urlparam}/>
                </div>
                <div className="col m6">
                    {/* mid section to contain posts */}
                    <div className="col m12">
                        <p className="blue-grey-text card-heading card-heading-type-2">Latest Posts</p>
                    </div>
                    {posts}
                </div>
                <div className="col m3">
                    {/* right sidebar to contain profile info */} 
                    <div className="right-sidebar">
                        <div className="col m12">
                            <p className="blue-grey-text card-heading card-heading-type-2">Monthly Posts</p>
                        </div>
                        <div className="col m12">
                            <div className="card-action links">
                                <div className="collection">
                                    <a href="#!" className="collection-item active">January (5)</a>
                                    <a href="#!" className="collection-item">February (2)</a>
                                    <a href="#!" className="collection-item">March (6)</a>
                                    <a href="#!" className="collection-item">April (1)</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


// Mid Content
const Content = (props) => {
       return (
            <Link to={props.postData.link}>
                <div className="col m12">
                    <div className="card #fffde7 white lighten-5">
                        <div className="card-image">
                            <img src="../default.png" alt="default"/>
                            {<span className="card-title">{props.postData.title}</span>}
                        </div>
                        <div className="card-content #263238 blue-grey-text darken-4">
                            <p className="#212121 grey-text darken-4">{props.postData.createDate}</p>
                            <p className="post-excerpt">{props.postData.desc}</p>
                        </div>
                        <div className="card-action">
                            <p className="author-name #263238 blue-grey-text darken-4">
                                <i className="fa fa-user grey-text"></i> {props.postData.name}
                                <span className="read-more-btn">
                                    <i className="fa fa-comments #f5f5f5 grey-text lighten-4"></i> {props.postData.comments}
                                </span>
                            </p>  
                        </div>
                    </div>
                </div>
                
            </Link>
       );
    
}

// Tags
// const Tags = (props) => {
    
//        return (
//         <Link to={props.tagData.link}><span className="tags"># {props.tagData.name}</span></Link>
//        );
// }


export default Parent;