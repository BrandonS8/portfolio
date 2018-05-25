import React, { Component } from 'react'
import './App.css'
import Intro from './Intro/Intro'
import About from './About/About'
import Skills from './Skills/Skills'
import Work from './Work/Work'
import { ScrollToTopOnMount, SectionsContainer, Section } from 'react-fullpage'
// https://github.com/subtirelumihail/react-fullpage
class App extends Component {
  render() {
    let options = {
      activeClass: 'active',
      sectionClassName: 'section',
      anchors: ['home', 'about', 'skills', 'work', 'contact'],
      scrollBar: true,
      navigation: true,
      verticalAlign: false,
      arrowNavigation: true
      // sectionPaddingTop: '5vh',
      // sectionPaddingBottom: '5vh'
    }
    return (
      <div className="App">
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
          {/* <ScrollToTopOnMount /> */}
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
              <Work />
            </Section>
          </SectionsContainer>
        </div>
      </div>
    )
  }
}

export default App
