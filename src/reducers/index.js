import {combineReducers} from 'redux'
import repos from './reposReducer'
import user from './userReducer'

export default combineReducers({
  repos,
  user
})
