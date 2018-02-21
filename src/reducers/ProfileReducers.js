
import storeData from '../stores'

const initialState = storeData

function reduceProfileData(state = initialState, action) {
    switch(action.type){
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

