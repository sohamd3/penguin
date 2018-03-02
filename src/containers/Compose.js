
import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import {stateToHTML} from 'draft-js-export-html';

import "../components/Compose/Compose.css"
import {registerUser} from '../actions/index'

class Compose extends React.Component {

    flag = 0
    //Declaring initial state
    state = {
        "msg": "",
        "id": null,
        "name": "",
        "title": "",
        "editorstate": EditorState.createEmpty(),
        "desc": "",
        "link": "",
        "createDate": moment().format("MMM Do YY"),
        "comments": 0,
        "tags": [{
            "name": "",
            "link": ""
        }, {
            "name": "pc games",
            "link": "/tags/pcgame"
        }, {
            "name": "stategy",
            "link": "/tags/strategy"
        }]
    }

    // execute on change in input value
    handleChange = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // execute on change in <Editor/> component (wysiwyg editor) 
    onEditorStateChange = (editorstate) => {
        this.setState({
            editorstate
        });
        this.flag = 1
        
    };

    // execute on form submit
    handleClick(e) {
        e.preventDefault()
        
        if(this.flag !== 0 && this.state.title !== ""){
            // Override default element (`strong`).
            let options = {
                inlineStyles: {
                    BOLD: {element: 'b'}
                },
            };
            this.setState(
                this.state = {
                    "msg": "success",
                    "id": "",
                    "name": localStorage.getItem("loggedInUser"),
                    "title": this.state.title,
                    "editorstate": this.state.editorstate,
                    "desc": stateToHTML(this.state.editorstate.getCurrentContent(), options),
                    "link": "/posts/"+this.state.title,
                    "createDate": moment().format("MMMM Do YY"),
                    "comments": 0,
                    "tags": [{
                        "name": "",
                        "link": ""
                    }, {
                        "name": "",
                        "link": "/tags/"
                    }, {
                        "name": "",
                        "link": "/tags/"
                    }]
                }
            )
            
            let currentData = JSON.parse(localStorage.getItem("posts"))
            currentData.push(this.state)
            localStorage.setItem("posts",JSON.stringify(currentData))        

        }
        else{
            alert("Ughh Empty")
        }
        

    }

    // Executes before component is mounted. Here used to check user is logged in or not
    componentWillMount(){
        try{
            if(!localStorage.getItem("loggedInUser"))
                this.props.history.push({pathname: '/login'}) 
        }
        catch(err){
            //Handle Error
        }
    }

    // render
    render() {
        
        return (
            
            <div className="container">
                <div className="col s12">
                    <div className="card">
                        <form className="cred-form" method="get">
                            {/* <label>Title</label> */}
                            <input type="text" name="title" value={this.state.title} placeholder="Enter post title" onChange={(e) => this.handleChange(e)}/>
                            {/* <label>Content</label> */}
                            <br/><br/>
                            <Editor editorState={this.state.editorstate} placeholder="Go on... write something cool...!" onEditorStateChange={this.onEditorStateChange}/>
                            <button className="cred-btn" type="submit" onClick={(e)=>this.handleClick(e)}>Publish</button>
                        </form>
                        {this.temp}
                    </div>
                </div>
            </div>
        );
    }

}
 
const mapStateToProps = (state) => ({
    post: state.registerReducers
})

export default connect(mapStateToProps)(Compose);
