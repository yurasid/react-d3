import {combineReducers} from 'redux'
import repos from './reposReducer'
import user from './userReducer'
import events from './eventsReducer'

export default combineReducers({
  repos,
  user,
  events
})
