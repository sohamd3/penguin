
// import storeData from '../stores'

const initialState = {}

function Home(state = initialState, action) {
    switch(action.type){
        case "init-state":
            return action.payload
            break;
        default:
            return state;
    }
}
export default Home

