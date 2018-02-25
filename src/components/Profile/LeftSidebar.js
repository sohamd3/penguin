
import React from 'react';

const LeftSidebar = (props) =>  {

    // Condition to check if "Links" exists in response
    let links = null

    if(props.post.links){
        links = props.post.links.map((d,i) => {
            return <Links key={i} linkData={d}/>
        })
    }
    else{
        links = <p>No data</p>
    }
    
    // render
    return (
        <div>
            <div className="content-panels left-sidebar">
                <div className="info basic-info">
                    <img src={props.post.profilePic} alt="profile pic"/>
                    <p>{props.post.username}</p>
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
                    {links}
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