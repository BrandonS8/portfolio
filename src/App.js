import React, { Component } from 'react'
import './App.css'
import Intro from './Intro/Intro'
import About from './About/About'
import Skills from './Skills/Skills'
import Work from './Work/Work'
import Contact from './Contact/Contact'
import { ScrollToTopOnMount, SectionsContainer, Section } from 'react-fullpage'
// https://github.com/subtirelumihail/react-fullpage
class App extends Component {
  constructor() {
    super()
    this.state = {
      windowW: 0,
      windowH: 0
    }
    this.updateWindowSize = this.updateWindowSize.bind(this)
  }

  componentWillMount() {
    this.updateWindowSize()
    window.addEventListener('resize', this.updateWindowSize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowSize)
  }

  updateWindowSize() {
    this.setState({ windowW: window.innerWidth, windowH: window.innerHeight })
  }
  render() {
    let options = {
      activeClass: 'active',
      sectionClassName: 'section',
      anchors: ['home', 'about', 'skills', 'work', 'contact'],
      scrollBar: false,
      navigation: false,
      verticalAlign: false,
      arrowNavigation: true
      // sectionPaddingTop: '5vh',
      // sectionPaddingBottom: '5vh'
    }
    return (
      <div className="App">
        {/* <div
          className="scroll-toggle"
          style={this.state.scrollToggleStyle}
          // onClick={this.toggleScroll}
        >
          <div
            className="scroll-toggle-circle"
            style={this.state.scrollToggleCircleStyle}
          />
        </div> */}
        <nav>
          <a href="#home">
            <h1>
              BRANDON <strong>SEARS</strong>
            </h1>
          </a>
          <div className="nav-links">
            <a href="#home">HOME</a>
            <a href="#about">ABOUT</a>
            <a href="#skills">SKILLS</a>
            <a href="#work">WORK</a>
            <a href="#contact">CONTACT</a>
          </div>
        </nav>
        <div>
          <ScrollToTopOnMount />
          <SectionsContainer {...options}>
            <Section>
              <Intro />
            </Section>
            <Section>
              <About />
            </Section>
            <Section>
              <Skills />
            </Section>
            <Section>
              <Work windowW={this.state.windowW} windowH={this.state.windowH} />
            </Section>
            <Section>
              <Contact />
            </Section>
          </SectionsContainer>
        </div>
      </div>
    )
  }
}

export default App
