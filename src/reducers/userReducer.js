import {SET_USER} from 'constants/actionTypes'

const initialState = {}

export default function users (state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return action.payload
    default:
      return state
  }
}
