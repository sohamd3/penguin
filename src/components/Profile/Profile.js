import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';

class Header extends Component {
    constructor() {
        super();

        this.state = {
            content:[
                {
                   component: 'First...',
                   id: 1
                },
                {
                   component: 'Second...',
                   id: 2
                },
                {
                   component: 'Third...',
                   id: 3
                }
            ],
            name:'Soham Dan',
            profilePic:'./me.jpg',
            role:'Frontend Developer',
            bio:'I am a Frontend Developer and a Design enthusiast.Suffers from high OCD, and cooks good alu bhaja :P',
            links:[
                {
                    title: 'Github',
                    link:'https://www.github.com',
                    icon:'fa fa-github-square',
                    id: 1
                 },
                 {
                    title: 'LinkedIn',
                    link:'https://www.linkedin.com',
                    icon:'fa fa-linkedin-square',
                    id: 2
                 },
                 {
                    title: 'Twitter',
                    link:'https://www.twitter.com',
                    icon:'fa fa-twitter-square',
                    id: 3
                 }
            ]
        }
    }
    render() {
        return (
        <div className="profile">
            
            {/* left sidebar to contain profile info */}
            <div className="content-panels left-sidebar">
                <div className="info basic-info">
                    <img src={this.state.profilePic} alt="profile pic"/>
                    <p>{this.state.name}</p>
                    <p>{this.state.role}</p>
                </div>
                <div className="info bio">
                    <p className="heading">About Me</p>
                    <p className="details">
                        {this.state.bio}  
                    </p>
                </div>
                <div className="info links">
                    <p className="heading">Links</p>
                    {this.state.links.map((d,i) =><Links key={i} linkData={d}/>)}
                </div>
            </div>

            {/* mid section to contain posts */}
            <div className="content-panels mid-section">
                {this.state.content.map((d, i) => <Content key = {i} componentData = {d}/>)}
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
             <p>{this.props.componentData.component}</p>
             <p>{this.props.componentData.id}</p>
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
 

export default Header;
