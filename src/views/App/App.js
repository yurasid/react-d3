import './app.scss'

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {withRouter} from 'react-router-dom'

import Header from 'components/Header'
import {getUser} from 'actions/userActions'
import {getRepos} from 'actions/reposActions'

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => (bindActionCreators({
  getRepos,
  getUser
}, dispatch))

@withRouter
@connect(mapStateToProps, mapDispatchToProps)
export default class App extends Component {
  static propTypes = {
    getRepos: PropTypes.func.isRequired,
    getUser: PropTypes.func.isRequired
  }

  componentDidMount () {
    const {getUser, getRepos} = this.props

    getUser()
    getRepos()
  }
  render () {
    return (
      <div styleName='app'>
        <Header />
      </div>
    )
  }
}
