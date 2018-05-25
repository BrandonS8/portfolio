import React, { Component } from 'react'
import './Work.css'
import WorkCard from '../WorkCard/WorkCard'
class Work extends Component {
  render() {
    return (
      <div>
        <h1>My Work</h1>
        <WorkCard
          title="TEST!"
          image="https://i.imgur.com/QOF4Nba.jpg"
          class="work-card"
          deployed="https://google.com"
          github="https://github.com"
        />
      </div>
    )
  }
}

export default Work
