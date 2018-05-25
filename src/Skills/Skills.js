import React, { Component } from 'react'
import './Skills.css'
class Skills extends Component {
  render() {
    return (
      <div className="skills flex-center-col">
        <h1>My Skills</h1>
        <div className="skill-list flex-center-row">
          <div className="skill" style={{ color: '#EEDA68' }}>
            <i className="fab fa-js" />
            <p>JavaScript</p>
          </div>
          <div className="skill" style={{ color: '#77A06F' }}>
            <i className="fab fa-node-js" />
            <p>Node.js</p>
          </div>
          <div className="skill" style={{ color: 'lightblue' }}>
            <i className="fas fa-cube" />
            <p>Express.js</p>
          </div>
          <div className="skill" style={{ color: '#8CDCF8' }}>
            <i className="icon-reactjs" />
            <p>React.js</p>
          </div>
          <div className="skill" style={{ color: 'red' }}>
            <i className="icon-ruby" />
            <p>Ruby</p>
          </div>
          <div className="skill" style={{ color: 'red' }}>
            <i className="icon-ruby-on-rails" />
            <p>Ruby on Rails</p>
          </div>
          <div className="skill" style={{ color: '#3E668D' }}>
            <i className="icon-postgres" />
            <p>PostgreSQL</p>
          </div>
          <div className="skill" style={{ color: '#6CA959' }}>
            <i className="icon-mongodb" />
            <p>MongoDB</p>
          </div>
          <div className="skill" style={{ color: '#ddd61c' }}>
            <i class="fab fa-snapchat-square" />
            <p>Lens Studio</p>
          </div>
        </div>
        <h2>
          ...and more. I am confident in my ability to pickup new technologies
          as needed.
        </h2>
      </div>
    )
  }
}

export default Skills
