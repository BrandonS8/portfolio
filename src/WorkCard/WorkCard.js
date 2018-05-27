import React, { Component } from 'react'
import './WorkCard.css'
class WorkCard extends Component {
  constructor() {
    super()
    this.state = {
      open: false
    }
    this.handleAction = this.handleAction.bind(this)
  }
  handleAction() {
    if (this.state.open) {
      this.setState({
        open: false
      })
    } else {
      this.setState({
        open: true
      })
    }
  }

  render() {
    const style = {
      background: 'url(' + this.props.image + ')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%'
    }
    const infoStyle = {
      opacity: this.state.open ? '1' : '0'
    }
    return (
      <div
        className={this.props.class + ' work-card-main'}
        style={style}
        onMouseEnter={this.handleAction}
        onMouseLeave={this.handleAction}
        // onClick={this.handleAction}
      >
        <div className="work-card-info flex-center-col" style={infoStyle}>
          <h2>{this.props.title}</h2>
          <p>{this.props.desc}</p>
          <div className="work-card-buttons flex-center-row">
            <a href={this.props.deployed} target="_blank">
              View Live
            </a>
            {this.props.github ? (
              <a href={this.props.github} target="_blank">
                View Code
              </a>
            ) : null}
          </div>
        </div>
      </div>
    )
  }
}

export default WorkCard
