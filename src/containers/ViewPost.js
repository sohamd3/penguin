import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../components/ViewPost/ViewPost.css';

class ViewPost extends React.Component {
    
    constructor(props){
        super(props)

        this.posturl = null
        this.post = null
        this.posts = JSON.parse(localStorage.getItem("posts"))

        try{
            //initialize posturl with url param
            this.posturl = this.props.match.params.posturl
            console.log(this.posturl)
        }
        catch(err){
            console.log("BOOM")
        }

        this.posts.map((data,key) => {
            if(this.posturl === data.title){
                this.post = <Content key = {key} postData = {data}/>
            }
        })
    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col m12">
                        {/* mid section to contain posts */}
                        {this.post}
                    </div>
                </div>
            </div>
        );
    }
}

// Mid Content
const Content = (props) => {
    return (
         <Link to={props.postData.link}>
             <div className="col m12">
                 <div className="card #fffde7 white lighten-5">
                     <div className="card-image">
                         <img src="../default.png"/>
                         <span className="card-title title-width">{props.postData.title}</span>
                     </div>
                     <div className="card-content #263238 blue-grey-text darken-4">
                         <p className="#212121 grey-text darken-4">{props.postData.createDate}</p>
                         <p dangerouslySetInnerHTML={{__html: props.postData.desc}}/>
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
const Tags = (props) => {
    return (
    <Link to={props.tagData.link}><span className="tags"># {props.tagData.name}</span></Link>
    );
}

 
const mapStateToProps = (state) => ({
    post: state.reduceProfileData
})

export default connect(mapStateToProps)(ViewPost);
