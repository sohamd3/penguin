
import displayProfileData from '../actions'
import storeData from '../stores'

const initialState = {
    post: storeData
}

function reduceProfileData(state = initialState, action) {
    switch(action.type){
        case "show-profile-data":
            console.log("showing profile data")
            return {
                ...state,
                post: state.post
            };
        case "change-name":
            state.post.name = "Frank";
            return {
                ...state,
                post: state.post
            };
        default:
            return state;
    }
}
export default reduceProfileData

