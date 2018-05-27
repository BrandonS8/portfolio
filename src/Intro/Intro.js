import React, { Component } from 'react'
import './Intro.css'

class Intro extends Component {
  render() {
    return (
      <div className="intro flex-center-col">
        <h1>
          Brandon <span>Sears</span>
        </h1>
        <h2>A creative, user-focused, and passionate Web Developer</h2>
        {/* <img src={require('./me.jpg')} /> */}
      </div>
    )
  }
}

export default Intro
