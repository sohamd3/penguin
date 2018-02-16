
// import { combineReducers } from 'redux'
import displayProfileData from '../actions'
import storeData from '../stores'

const initialState = {
    post: storeData
}

function reduceProfileData(state = initialState, action) {
    switch(action.type){
        case "show-profile-data":
            return {
                post: storeData
            };
        default:
            return state;
    }
}
export default reduceProfileData

