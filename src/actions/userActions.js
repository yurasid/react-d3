import {SET_USER} from 'constants/actionTypes'

export function getUser () {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: SET_USER,
        payload: require('./user.json')
      })
    }, 600)
  }
}
