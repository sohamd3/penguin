
// import storeData from '../stores'

const initialState = {}

function reduceProfileData(state = initialState, action) {
    switch(action.type){
        case "init-state":
            return action.payload
            break;
        case "set-name":
            return {
                ...state,
                name: action.payload
            }
            break;
        default:
            return state;
    }
}
export default reduceProfileData

