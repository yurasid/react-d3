import {SET_EVENTS} from 'constants/actionTypes'

const initialState = []

export default function events (state = initialState, action) {
  switch (action.type) {
    case SET_EVENTS:
      return action.payload
    default:
      return state
  }
}
