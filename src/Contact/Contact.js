import React, { Component } from 'react'
import Clipboard from 'react-clipboard.js'
import './Contact.css'

class Contact extends Component {
  constructor() {
    super()
    this.state = {
      copyText: 'COPY EMAIL',
      copyTextStyle: {
        color: '#000'
      }
    }
    this.sayCopied = this.sayCopied.bind(this)
  }

  sayCopied(e) {
    this.setState({
      copyText: 'COPIED!',
      copyTextStyle: {
        color: 'lightgreen'
      }
    })
    setTimeout(() => {
      this.setState({
        copyText: 'COPY EMAIL',
        copyTextStyle: {
          color: '#000'
        }
      })
    }, 2000)
  }

  render() {
    return (
      <div className="contact flex-center-col">
        <h1>Contact Me</h1>
        <div className="contact-links">
          <Clipboard
            data-clipboard-text="brandonsears8@gmail.com"
            button-className="copy-button"
          >
            <p
              onClick={this.sayCopied}
              style={this.state.copyTextStyle}
              className="copy-email"
            >
              <i className="fas fa-clipboard" /> {this.state.copyText}
            </p>
          </Clipboard>
          <p>
            <a
              href="mailto:brandonsears8@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="far fa-envelope" />BrandonSears8@gmail.com
            </a>
          </p>
          <a
            href="https://github.com/brandons8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github" />Github.com/brandons8
          </a>
          <a
            href="https://linkedin.com/in/brandon-sears/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in" /> Linkedin.com/in/brandon-sears/
          </a>
        </div>
      </div>
    )
  }
}

export default Contact
