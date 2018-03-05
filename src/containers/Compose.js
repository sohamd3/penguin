
import React from 'react';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import moment from 'moment';
import { ContentState, EditorState } from 'draft-js';
import DraftPasteProcessor from 'draft-js/lib/DraftPasteProcessor';
import { Editor } from 'react-draft-wysiwyg';
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import {stateToHTML} from 'draft-js-export-html';

import "../components/Compose/Compose.css"
// import {registerUser} from '../actions/index'

class Compose extends React.Component {

    constructor(props){
        super(props)
        this.posturl = null
        try{
            //initialize posturl with url param
            this.posturl = this.props.match.params.posturl
        }
        catch(err){
            console.log("BOOM")
        }
        //check if url params exists
        if(this.posturl){
            //map posts array
            JSON.parse(localStorage.getItem("posts")).map((data,key)=>{
                //check if title and author name matches current title & current user 
                if((this.posturl === data.title) && (localStorage.getItem("loggedInUser") === data.name)){
                    // Fetch post description from localstorage and create processed HTML
                    const processedHTML = DraftPasteProcessor.processHTML(data.desc);
                    // create content state from processed HTML
                    const contentState = ContentState.createFromBlockArray(processedHTML);
                    //init editor state with contentState
                    let editorState
                    editorState = EditorState.createWithContent(contentState);
                    //move focus to the end. 
                    editorState = EditorState.moveFocusToEnd(editorState);
                    //replace editorstate in posts array with updated editorstate
                    data.editorstate = editorState
                    // set state
                    this.state = data     
                    // set cta btn to Update
                    this.cta = <button className="cred-btn" type="submit" onClick={(e)=>this.handleUpdate(e)}>Update</button>
                }
                return this.state
            })
        }
        else{
            //Declaring initial state
            this.state = {
                "editorstate": EditorState.createEmpty(),
            }
            // set cta btn to Publish
            this.cta = <button className="cred-btn" type="submit" onClick={(e)=>this.handlePublish(e)}>Publish</button>
        }
    }
    
    flag = 0
    

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

    // execute on post update
    handleUpdate(e) {
        e.preventDefault()
        // Override default element (`strong`).
        let options = {
            inlineStyles: {
                BOLD: {element: 'b'}
            },
        };
        let posts = JSON.parse(localStorage.getItem("posts"))
        posts.map((data,key)=>{            
            if((this.posturl === data.title) && (localStorage.getItem("loggedInUser") === data.name)){
                data.title = this.state.title
                data.desc = stateToHTML(this.state.editorstate.getCurrentContent(), options)
                data.link = "/post/"+this.state.title
            } 
            return data
        })

        localStorage.setItem("posts",JSON.stringify(posts))

        toast.info("Post updated successfully !",{
            position: toast.POSITION.TOP_CENTER
        })

        this.props.history.push({
            pathname: "/edit/"+this.state.title
        })
    }

    // execute on form submit
    handlePublish(e) {
        e.preventDefault()
        
        if(this.flag !== 0 && this.state.title !== ""){
            // Override default element (`strong`).
            let options = {
                inlineStyles: {
                    BOLD: {element: 'b'}
                },
            };
            
            this.dataToCreatePost = {
                "name": localStorage.getItem("loggedInUser"),
                "title": this.state.title,
                "editorstate": this.state.editorstate,
                "desc": stateToHTML(this.state.editorstate.getCurrentContent(), options),
                "link": "/post/"+this.state.title,
                "createDate": moment().format("MMMM Do YY"),
                "comments": 0
            }
            
            let currentData = JSON.parse(localStorage.getItem("posts"))
            currentData.push(this.dataToCreatePost)
            localStorage.setItem("posts",JSON.stringify(currentData))        

            toast.success("Post successfully posted !",{
                position: toast.POSITION.TOP_CENTER
            })

            this.props.history.push({
                pathname: "/edit/"+this.state.title
            })

        }
        else{
            toast.warn("You just can't post an empty post !",{
                position: toast.POSITION.TOP_CENTER
              })
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
                <ToastContainer />
                <div className="col s12">
                    <div className="card">
                        <form className="cred-form" method="get">
                            {/* <label>Title</label> */}
                            <input type="text" name="title" value={this.state.title} placeholder="Enter post title" onChange={(e) => this.handleChange(e)}/>
                            {/* <label>Content</label> */}
                            <br/><br/>
                            <Editor editorState={this.state.editorstate} placeholder="Go on... write something cool...!" onEditorStateChange={this.onEditorStateChange}/>
                            {this.cta}                
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
