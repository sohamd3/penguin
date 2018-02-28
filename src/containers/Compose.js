
import React from 'react';
import { connect } from 'react-redux';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import {stateToHTML} from 'draft-js-export-html';

import "../components/Compose/Compose.css"
import {registerUser} from '../actions/index'

class Compose extends React.Component {

    //declaring initial state
    state = {
        "msg": "",
        "id": null,
        "name": "",
        "title": "",
        "desc": "",
        "link": "",
        "createDate": Date(),
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
    onEditorStateChange = (desc) => {
        this.setState({
            desc
        });
    };

    // execute on form submit
    handleClick(e) {
        e.preventDefault()
        // this.state.desc = stateToHTML(this.state.desc.getCurrentContent());
        // const raw = convertToRaw(this.state.desc.getCurrentContent())
        console.log(this.state)
        this.setState(
            this.state = {
                "msg": "success",
                "id": "",
                "name": localStorage.getItem("loggedInUser"),
                "title": this.state.title,
                "desc": this.state.desc.getCurrentContent(),
                "link": "/posts/"+this.state.title,
                "createDate": Date(),
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
        // const raw = convertToRaw(this.state.desc.getCurrentContent())
        console.log(this.state)
        let currentData = JSON.parse(localStorage.getItem("posts"))
        currentData.push(this.state)
        localStorage.setItem("posts",JSON.stringify(currentData))        

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
                            <Editor editorState={this.state.desc} placeholder="Go on... write something cool...!" onEditorStateChange={(desc)=>this.onEditorStateChange(desc)}/>
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
