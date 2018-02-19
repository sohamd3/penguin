
import React from 'react';

const LeftSidebar = (props) =>  {
    return (
        <div>
            <div className="content-panels left-sidebar">
                <div className="info basic-info">
                    <img src={props.post.profilePic} alt="profile pic"/>
                    <p>{props.post.name}</p>
                    <p>{props.post.role}</p>
                </div>
                <div className="info bio">
                    <p className="heading">About Me</p>
                    <p className="details">
                        {props.post.bio}  
                    </p>
                </div>
                <div className="info links">
                    <p className="heading">Links</p>
                    {props.post.links.map((d,i) =><Links key={i} linkData={d}/>)}
                </div>
            </div>
        </div>
    );
}

// Links
const Links = (props) => {
    return (
    <div>
        <a href={props.linkData.link} target="_blank">
        <span><i className={props.linkData.icon}></i></span>
            {props.linkData.title}
        </a>
    </div>
    );
}

export default LeftSidebar