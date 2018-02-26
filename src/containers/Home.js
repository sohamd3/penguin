
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
                <div className="col s12 m4" key={i}>
                    <Link to={d.link}>
                    <div className="card #fffde7 white lighten-5">
                    <div className="card-image">
                    <img src="../default.png"/>
                    {<span className="card-title">{d.title}</span>}
                    </div>
                        <div className="card-content #263238 blue-grey-text darken-4">
                            {/* <span className="card-title #00838f cyan-text darken-1">{d.title}</span> */}
                            <p className="#212121 grey-text darken-4">{d.createDate}</p>
                            <p className="post-excerpt">{d.desc}</p>
                        </div>
                        <div className="card-action">
                            <p className="author-name #263238 blue-grey-text darken-4">
                                <i className="fa fa-user grey-text"></i> {d.name}
                                <span className="read-more-btn">
                                    <i className="fa fa-comments #f5f5f5 grey-text lighten-4"></i> {d.comments}
                                </span>
                            </p>  
                        </div>
                    </div>
                    </Link>
                </div>
            )
        }
        else{
            content = "Loading..."    
        }
        return (
            <div className="row">
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
