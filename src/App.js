import React, { Component } from 'react'
import './App.css'
import Intro from './Intro/Intro'
import About from './About/About'
import Skills from './Skills/Skills'
import Work from './Work/Work'
import Contact from './Contact/Contact'
import AboutWork from './AboutWork/AboutWork'
import Learn from './Learn/Learn'
import ReactFullpage from '@fullpage/react-fullpage'

// https://github.com/subtirelumihail/react-fullpage
class App extends Component {
  constructor() {
    super()
    this.state = {
      windowW: 0,
      windowH: 0,
      allowScroll: false
    }
    this.toggleScroll = this.toggleScroll.bind(this)
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

  toggleScroll() {
    if (this.state.allowScroll) {
      this.setState({
        allowScroll: false
      })

      // fullpage_api.setAllowScrolling(false)
    } else {
      this.setState({
        allowScroll: true
      })
      // fullpage_api.setAllowScrolling(true)
    }
  }

  render() {
    const Menu = () => (
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
    )

    const ScrollToggle = () => (
      <div className="scroll-lock-button-holder">
        <span
          className={this.state.allowScroll ? '' : 'scroll-lock-hidden'}
          onClick={this.toggleScroll}
        >
          Toggle Scroll Lock
          <i className={`fas fa-lock-open`}></i>
        </span>
        <span
          className={this.state.allowScroll ? 'scroll-lock-hidden' : ''}
          onClick={this.toggleScroll}
        >
          Toggle Scroll Lock
          <i className={`fas fa-lock`}></i>
        </span>
      </div>
    )

    return (
      <div className="App">
        <ScrollToggle />
        <Menu />
        <ReactFullpage
          scrollOverflow={true}
          anchors={[
            'home',
            'about',
            'skills',
            'work',
            'about-work',
            'want-to-learn',
            'contact'
          ]}
          render={({ state, fullpageApi }) => {
            if (fullpageApi) {
              if (!this.state.allowScroll) {
                fullpageApi.setAutoScrolling(true)
              } else {
                fullpageApi.setAutoScrolling(false)
              }
            }
            return (
              <div id="fullpage-wrapper">
                <div className="section section1">
                  <Intro />
                </div>
                <div className="section">
                  <About />
                </div>
                <div className="section">
                  <Skills />
                </div>
                <div className="section">
                  <Work
                    windowW={this.state.windowW}
                    windowH={this.state.windowH}
                  />
                </div>
                <div className="section">
                  <AboutWork />
                </div>
                <div className="section">
                  <Learn />
                </div>
                <div className="section">
                  <Contact />
                </div>
              </div>
            )
          }}
        />
      </div>
    )
  }

  // render() {
  //   let options = {
  //     activeClass: 'active',
  //     sectionClassName: 'section',
  //     anchors: [
  //       'home',
  //       'about',
  //       'skills',
  //       'work',
  //       'about-work',
  //       'want-to-learn',
  //       'contact'
  //     ],
  //     scrollBar: this.state.allowScroll,
  //     navigation: false,
  //     verticalAlign: false,
  //     arrowNavigation: true
  //     // sectionPaddingTop: '5vh',
  //     // sectionPaddingBottom: '5vh'
  //   }

  //   return (
  //     <div className="App">
  //       <div className="scroll-lock-button-holder">
  //         <span
  //           className={this.state.allowScroll ? '' : 'scroll-lock-hidden'}
  //           onClick={this.toggleScroll}
  //         >
  //           Toggle Scroll Lock
  //           <i className={`fas fa-lock-open`}></i>
  //         </span>
  //         <span
  //           className={this.state.allowScroll ? 'scroll-lock-hidden' : ''}
  //           onClick={this.toggleScroll}
  //         >
  //           Toggle Scroll Lock
  //           <i className={`fas fa-lock`}></i>
  //         </span>
  //       </div>

  //       {/* <div
  //         className="scroll-toggle"
  //         style={this.state.scrollToggleStyle}
  //         // onClick={this.toggleScroll}
  //       >
  //         <div
  //           className="scroll-toggle-circle"
  //           style={this.state.scrollToggleCircleStyle}
  //         />
  //       </div> */}
  //       <nav>
  //         <a href="#home">
  //           <h1>
  //             BRANDON <strong>SEARS</strong>
  //           </h1>
  //         </a>
  //         <div className="nav-links">
  //           <a href="#home">HOME</a>
  //           <a href="#about">ABOUT</a>
  //           <a href="#skills">SKILLS</a>
  //           <a href="#work">WORK</a>
  //           <a href="#contact">CONTACT</a>
  //         </div>
  //       </nav>
  //       <div>
  //         <ScrollToTopOnMount />
  //         <SectionsContainer {...options}>
  //           <Section>
  //             <Intro />
  //           </Section>
  //           <Section>
  //             <About />
  //           </Section>
  //           <Section>
  //             <Skills />
  //           </Section>
  //           <Section>
  //             <Work windowW={this.state.windowW} windowH={this.state.windowH} />
  //           </Section>
  //           <Section>
  //             <AboutWork />
  //           </Section>
  //           <Section>
  //             <Learn />
  //           </Section>
  //           <Section>
  //             <Contact />
  //           </Section>
  //         </SectionsContainer>
  //       </div>
  //     </div>
  //   )
  // }
}

export default App
