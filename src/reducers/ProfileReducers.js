
import displayProfileData from '../actions'
import storeData from '../stores'

const initialState = {
    post: storeData
}

function reduceProfileData(state = initialState, action) {
    switch(action.type){
        case "show-profile-data":
            return {
                post: state.post
            };
        default:
            return state;
    }
}
export default reduceProfileData

