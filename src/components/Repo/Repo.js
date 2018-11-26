import './repo.scss'

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {select} from 'd3'

export default class Repo extends Component {
  componentDidMount () {
    this.renderRepoMetric()
  }

  renderRepoMetric() {
    const {svg, chart} = this
    const {size, forks, stars} = this.props

    console.log(chart)

    // select(svg)
    //   .selectAll('rect')
    //   .data([size, forks, stars])
    //   .enter()
    //   .append('rect')

    // select(svg)
    //   .selectAll('rect')
    //   .data([size, forks, stars])
    //   .exit()
    //   .remove()

    // select(svg)
    //   .selectAll('rect')
    //   .data([size, forks, stars])
    //   .style('fill', '#fafafa')
    //   .attr('x', (d, i) => i * 25)

    select(chart)
      .selectAll('div')
      .data([size])
      .enter()
      .append('div')
      .style('background-color', 'red')
      .style('width', d => `${d}px`)
      .style('height', '10px')

  }

  render() {
    const {name, description, size, forks, stars, watchers, openedIssues} = this.props

    return (
      <div>
        <svg ref={node => (this.svg = node)}></svg>
        <div ref={node => (this.chart = node)} className='chart'></div>
        <pre>
          <section>
          <div>
            Name: {name}
          </div>
          <div>
            Description: {description}
          </div>
          <div>
            Size: {size}
          </div>
          <div>
            Stars: {stars}
          </div>
          <div>
            Forks: {forks}
          </div>
          <div>
            Watchers: {watchers}
          </div>
          <div>
            Open Issues: {openedIssues}
          </div>
        </section>
      </pre>
      </div>
    )
  }
}

Repo.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  size: PropTypes.number.isRequired,
  forks: PropTypes.number.isRequired,
  stars: PropTypes.number.isRequired,
  watchers: PropTypes.number.isRequired,
  openedIssues: PropTypes.number
}

Repo.defatultProps = {
  descritption: '',
  openedIssues: 0
}
