import React, { Component } from 'react'
import './About.css'
class About extends Component {
  render() {
    return (
      <div className="about flex-center-row">
        <div className="about-left flex-center-col">
          <h1>About Me</h1>
          <p>
            I am a full stack web developer that loves to create things that
            appeal visually and funcionally. Most of my passion lies with the
            front-end but I like the ability to create my own app using the full
            stack.
          </p>
          <p>
            I recently graduated from General Assembly's Web Development
            Immersive Course. In my 12 weeks at General Assembly I learned all
            the skills you see above and more. This fast paced enviroment was a
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
            I love being creative, I have been a freelance graphic designer for
            nearly 7 years (and yes I'm only 18) and that has led my creativity
            to creating things for the web. I think being a web developer or any
            type of software developer is so special in a creative sense because
            so many people get to use what you make and see what you make
            everyday. People appreciate developers because we unlock new worlds
            for them. As a developer you can get one good idea that changes
            someones life forever, I love the thought that something I made
            could make someone happy even if just for a day. Everyone deserves
            the right to happiness and the right express their creativity. I
            hope in my future I can continue expressing my creativity and
            passions in personal pursuits as well as in my employer's projects.
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
