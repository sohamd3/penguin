
import { combineReducers } from 'redux'
import reduceProfileData from './ProfileReducers'
import Home from './Home'

const rootReducer = combineReducers({
    reduceProfileData,
    Home
})

export default rootReducer

