import React from 'react';
import { Link } from 'react-router-dom';

//Parent Content
class Parent extends React.Component{
    render(){
        return(
            <div className="profile">
                {/* left sidebar to contain profile info */}
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

                {/* mid section to contain posts */}
                <div className="content-panels mid-section">
                    <div className="content-box">
                        <button type="button" className="btn compose-btn">
                            <i className="fa fa-pencil-square"></i>
                            Compose
                        </button>
                    </div>
                    <div id="dynamic-posts">
                        {this.props.post.posts.map((d, i) => <Content key = {i} postData = {d}/>)}
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
                    <li>{this.props.postData.tags.slice(0,4).map((d, i) => <Tags key = {i} tagData = {d}/>)}</li>
                </ul>
                <p className="post-desc">{this.props.postData.desc}</p>
            </div>
       );
    }
}

// Tags
class Tags extends React.Component {
    render() {
       return (
        <Link to={this.props.tagData.link}><span className="tags"># {this.props.tagData.name}</span></Link>
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

export default Parent;