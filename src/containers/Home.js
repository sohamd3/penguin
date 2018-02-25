
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { BrowserRouter, Link} from 'react-router-dom';
import { connect } from 'react-redux';

import {loadData} from '../actions/index'
import '../components/Home/Home.css';

class Home extends React.Component {
    
    // Executes before component is mounted. Here used to set initial data
    componentWillMount(){
        this.props.init()
    }

    // Executes after component is mounted. 
    // Here used to set the state with data received from reducer and re-render the component
    componentDidMount(){
        this.setState({
            post: this.props.post
        })
    }
    
    // Render
    render() {
        
        // Condition to check if "posts" exists in localstorage
        let content = null
        this.data = JSON.parse(localStorage.getItem("posts")) 

        if(this.data){
            content = this.data.reverse().map((d,i)=>
                <div className="post-containers" key={i}>
                    <div className="post-inner-container">
                        {<Link to={d.link}><p className="post-title">{d.title}</p></Link>}
                        <ul className="post-details">
                            <li>{d.createDate}</li>
                            <li className="number-of-comments">Comments ({d.comments})</li>
                        </ul>
                        <p className="post-excerpt">{d.desc}</p>
                        <ul className="post-details">
                            <li>Author : {d.name}</li>
                        </ul>
                    </div>
                </div>
            )
        }
        else{
            content = "Loading..."    
        }
        return (
            <div className="wrapper">
                {content}
            </div>
        );
    }
}
 
const mapStateToProps = (state) => ({
    // Data from reducer
    post: state.Home
})

const mapDispatchToProps = (dispatch) => {
    return {
      init: () => dispatch(loadData())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
