
// import storeData from '../stores'

const initialState = {}

function reduceProfileData(state = initialState, action) {
    switch(action.type){
        case "init-state":
            return action.payload
        case "set-name":
            return {
                ...state,
                name: action.payload
            }
        default:
            return state;
    }
}
export default reduceProfileData

