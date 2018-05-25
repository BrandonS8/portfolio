import React, { Component } from 'react'
import './App.css'
import Intro from './Intro/Intro'
import About from './About/About'
import { ScrollToTopOnMount, SectionsContainer, Section } from 'react-fullpage'
// https://github.com/subtirelumihail/react-fullpage
class App extends Component {
  render() {
    let options = {
      activeClass: 'active',
      sectionClassName: 'section',
      anchors: ['sectionOne', 'sectionTwo', 'sectionThree'],
      scrollBar: false,
      navigation: true,
      verticalAlign: false,
      arrowNavigation: true
      // sectionPaddingTop: '5vh',
      // sectionPaddingBottom: '5vh'
    }
    return (
      <div className="App">
        <nav>
          <h1>BRANDON</h1>
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
            <Section>Page 3</Section>
          </SectionsContainer>
        </div>
      </div>
    )
  }
}

export default App
