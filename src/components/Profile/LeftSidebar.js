
import React from 'react';

class LeftSidebar extends React.Component {
    render() {
        return (
            <div>
                <div className="content-panels left-sidebar">
                    <div className="info basic-info">
                        <img src={this.props.post.profilePic} alt="profile pic"/>
                        <p>{this.props.post.name}</p>
                        <p>{this.props.post.role}</p>
                    </div>
                    <div className="info bio">
                        <p className="heading">About Me</p>
                        <p className="details">
                            {this.props.post.bio}  
                        </p>
                    </div>
                    <div className="info links">
                        <p className="heading">Links</p>
                        {this.props.post.links.map((d,i) =><Links key={i} linkData={d}/>)}
                    </div>
                </div>
            </div>
        );
    }
}

// Links
class Links extends React.Component {
    render() {
       return (
        <div>
            <a href={this.props.linkData.link} target="_blank">
            <span><i className={this.props.linkData.icon}></i></span>
                {this.props.linkData.title}
            </a>
        </div>
       );
    }
}

export default LeftSidebar