
import { combineReducers } from 'redux'
import reduceProfileData from './ProfileReducers'
import registerReducers from './RegisterReducers'

const rootReducer = combineReducers({
    reduceProfileData,
    registerReducers
})

export default rootReducer

