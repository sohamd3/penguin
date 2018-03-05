
const AuthGuard = (props) => {
    try{
        if(!localStorage.getItem("loggedInUser")){
            props.history.push({pathname: '/login'}) 
            return false
        }
    }
    catch(err){
        //Handle Error
        console.log("meh")
    }
    return true
}

export default AuthGuard