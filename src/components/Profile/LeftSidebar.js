
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
            <div className="row">
                <div className="leftsidebar-fixed">
                    <div className="col m12">
                        <p className="blue-grey-text card-heading">Profile</p>
                    </div>
                    <div className="col m12">
                        <div className="card">
                            <div className="card-content avatar-section col m12">
                                <p className="heading">About</p>
                                <p><i className="fa fa-user"></i> {props.post.username}</p>
                                <p><i className="fa fa-bolt"></i> {props.post.role}</p>
                                <p><i className="fa fa-map-marker"></i> Bangalore</p>
                            </div>
                            <div className="card-content">
                                <p className="heading">Bio</p>
                                <p className="bio">{props.post.bio}</p>
                            </div>
                            <div className="card-action links">
                                <p className="heading">Links</p>
                                {links}
                            </div>
                        </div>
                    </div>
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