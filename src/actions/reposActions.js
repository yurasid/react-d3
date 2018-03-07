import {SET_REPOS} from 'constants/actionTypes'

export function getRepos () {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: SET_REPOS,
        payload: require('./repos.json')
      })
    }, 1000)
  }
}
