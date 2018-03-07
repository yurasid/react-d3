import {SET_REPOS} from 'constants/actionTypes'

const initialState = []

export default function repos (state = initialState, action) {
  switch (action.type) {
    case SET_REPOS:
      return action.payload
    default:
      return state
  }
}
