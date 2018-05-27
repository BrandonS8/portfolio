import React, { Component } from 'react'
import './Work.css'
import WorkCard from '../WorkCard/WorkCard'
import ProjectData from './ProjectData'
class Work extends Component {
  constructor() {
    super()
    this.state = {
      small: false,
      smallClass: ''
    }
  }
  componentDidMount() {
    if (this.props.windowW <= 1000) {
      this.setState({
        small: true,
        smallClass: 'flex-center-col smaller'
      })
    } else {
      this.setState({
        false: true,
        smallClass: ''
      })
    }
  }
  componentWillReceiveProps() {
    if (this.props.windowW <= 1000) {
      this.setState({
        small: true,
        smallClass: 'flex-center-col smaller'
      })
    } else {
      this.setState({
        small: false,
        smallClass: ''
      })
    }
  }

  render() {
    return (
      <div className="work">
        <h1>My Work</h1>
        <div className={`work-list ${this.state.smallClass}`}>
          {ProjectData.map((item, i) => {
            return !this.state.small ? (
              <WorkCard
                title={item.name}
                image={item.img}
                class="work-card"
                deployed={item.deployed}
                github={item.code}
                desc={item.description}
                key={i}
              />
            ) : (
              <div className="small-work flex-center-col" key={i}>
                <a href={item.deployed} className="small-work-name">
                  {item.name}
                </a>
                {/* <img src={item.img} alt={item.name + ' screenshot'} /> */}
                <p>
                  <a href={item.deployed}>DEPLOYED</a>
                  {item.code ? <span className="line">|</span> : null}
                  {item.code ? <a href={item.code}>CODE</a> : null}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Work
