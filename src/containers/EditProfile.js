
import React from 'react';
import { connect } from 'react-redux';
import AuthGuard from '../utils/AuthGuard'

class EditProfile extends React.Component {

    constructor(props){
        super(props)

        // variable declaration for users array from localstorage, url parameter and logged in user
        let userdata = JSON.parse(localStorage.getItem("users"))
        let urlparam = this.props.match.params.username
        let authUser = localStorage.getItem("loggedInUser")
        this.state = {
            "role": "",
            "location": "",
            "bio": "",
            "links": []
        }

        // function to set initial state
        this.setInitState = () => {
            userdata.map((data,key)=>{
                if((authUser === data.username)){  

                    let defaultLinks = [{"title":"github"},{"title":"linkedIn"},{"title":"twitter"}]

                    // set data
                    this.temp = {
                        "role": data.role,
                        "location": data.location,
                        "bio": data.bio,
                        "links": data.links ? data.links : defaultLinks
                    }
                }
                return this.temp
            })
        }

        try{
            if((authUser === urlparam)){
                this.setInitState()  
                // modifying state
                this.state = {
                    "role": this.temp.role,
                    "location": this.temp.location,
                    "bio": this.temp.bio,
                    "links": this.temp.links
                }
            }
            else{
                this.setInitState()
                // modifying state
                this.state = {
                    "role": this.temp.role,
                    "location": this.temp.location,
                    "bio": this.temp.bio,
                    "links": this.temp.links
                }
                this.props.history.push({
                    pathname: "/edit-profile/"+localStorage.getItem("loggedInUser")
                })            
            }
        }
        catch(err){

        }
    
    }
    
    // execute on change in input value
    handleChange = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // execute on change in input value of dynamically created elements
    handleDynamicChange = (e,key) => {
        e.preventDefault()
        let links = [...this.state.links];
        console.log(links)
        links[key].link = e.target.value
        this.setState({
            links
        })
    }

    // execute on form submit
    handleProfileUpdate = (e) => {
        e.preventDefault()
        let userdata = JSON.parse(localStorage.getItem("users"))
        let urlparam = this.props.match.params.username
        let authUser = localStorage.getItem("loggedInUser")

        userdata.map((data,key)=>{
            if((authUser === urlparam) && (authUser === data.username)){
                data.role = this.state.role
                data.location = this.state.location
                data.bio = this.state.bio
                data.links = this.state.links
            } 
            return data
        })

        localStorage.setItem("users",JSON.stringify(userdata))

        this.props.history.push({
            pathname: "/profile/"+localStorage.getItem("loggedInUser")
        })
        
    }

    // Executes before component is mounted. Here used to check user is logged in or not
    componentWillMount(){
        AuthGuard(this.props) 
    }

    // render
    render() {
        return (
            <div className="container width-33">
                <div className="row">
                    <p className="editprofile-heading">Edit Profile</p>
                    <div className="card col s12">
                        <div className="card-content club-padding">
                        <form className="" method="post">

                            <label>Role</label>
                            <input type="text" name="role" value={this.state.role} placeholder="Write your role" onChange={e => this.handleChange(e)}/>

                            <label>Location</label>
                            <input type="text" name="location" value={this.state.location} placeholder="Enter your location" onChange={e => this.handleChange(e)}/>

                            <label>Bio</label>
                            <textarea type="text" className="materialize-textarea" name="bio" value={this.state.bio} placeholder="Write briefly about yourself" onChange={e => this.handleChange(e)}/>

                            
                            <p className="link-label">Links</p>
                            {this.state.links.map((data,key) => { 
                                return(
                                    <div className="row" key={key}>
                                        <div className="col s12 m12">
                                            <label>{data.title}</label>
                                            <input type="text" name={"link"+key} value={data.link} placeholder="Enter your location" onChange={e => this.handleDynamicChange(e,key)}/>
                                        </div>
                                    </div>
                                )
                            })}

                            <div className="row">
                                <div className="col s12 m12 center">
                                    <button className="btn" type="submit" onClick={(e)=>this.handleProfileUpdate(e)}>Update Profile</button>
                                </div>
                            </div>

                        </form>
                        </div>
                    </div>
                </div>
            </div>
        );
        
    }

}
 
const mapStateToProps = (state) => ({
    
})

export default connect(mapStateToProps)(EditProfile);
