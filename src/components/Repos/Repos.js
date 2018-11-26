import './repos.scss'

import React, {Component} from 'react';
import Repo from '../Repo'

export default class Repos extends Component {
  render() {
    const {repos} = this.props

    return (
      <div>
        {repos.map(repo => (
          <Repo 
            key={repo.name}
            name={repo.name}
            description={repo.description}
            size={repo.size}
            stars={repo.stargazers_count}
            forks={repo.forks_count}
            watchers={repo.watchers}
            openIssues={repo.open_issues}
          />
        ))}
      </div>
    )
  }
}
