import React, { Component } from 'react'
import './About.css'
class About extends Component {
  render() {
    return (
      <div className="about flex-center-row">
        <div className="about-left flex-center-col">
          <h1>About Me</h1>
          <p>
            I am a full stack developer that loves to create things that appeal
            visually and functionally. Most of my passion lies in the full
            stack. I've started leaning toward back end development more
            recently.
          </p>
          <p>
            I graduated from General Assembly's Web Development Immersive Course
            in 2018. In my 12 weeks at General Assembly I learned all the skills
            to be a web developer and more. This fast paced enviroment was a
            perfect fit to me because I felt the progress every single day and
            progress is a big deal to me. I don't like to sit on old methods and
            mindsets. I prefer moving toward more innovative things.
          </p>
          <p>
            Prior to General Assembly I was just out of my town's vocational
            school's Information Technology class. I learned valuable problem
            solving and team work skills here that I believe benefit me often as
            a developer. During my time in the IT course I competed in Future
            Business Leaders of America. In my final year, I was a national
            winner in Cybersecurity.
          </p>
          <p>
            I love being creative, I've done freelance graphic design since I
            was 12. In December 2017 I started creating augmented reality
            experiences on social media. I launched my own company later in 2018
            and have been creating AR effects for clients ever since. I am an
            expert in Snapchat Lens Studio and one of the most involved creators
            in the community. In 2018 I won the award for Most Valuable
            Contributor. I also grow social media accounts, make chat bots, and
            much more. I try to focus on innovative tools rather than old
            methods everyone uses.
          </p>
        </div>
        <div className="about-right flex-center-row">
          <img src={require('./me.jpg')} alt="Me" />
        </div>
      </div>
    )
  }
}

export default About
