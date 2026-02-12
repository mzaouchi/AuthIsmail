import {combineReducers} from 'redux'
import UserReducer from './UserReducer'
import ErrorReducer from './ErrorReducer'

const rootReducer = combineReducers({UserReducer, ErrorReducer})

export default rootReducer