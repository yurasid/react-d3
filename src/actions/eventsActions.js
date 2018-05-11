import {SET_EVENTS} from 'constants/actionTypes'

export function getEvents () {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: SET_EVENTS,
        payload: require('./events.json')
      })
    }, 1500)
  }
}
