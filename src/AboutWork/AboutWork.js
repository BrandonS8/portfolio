import React, { Component } from 'react'
import './AboutWork.css'

class AboutWork extends Component {
  render() {
    return (
      <div className="about-work flex-center-col">
        <h1>More About Me / My Work</h1>
        <p>
          First, my projects shown are mainly from GA because I've mainly
          focused on AR which is hard to show you here, as well,
          NDAs...everywhere.
        </p>
        <p>
          While at my first web dev job, at Ghost Note Agency, I worked on and
          created many wordpress based sites and themes. I also talked them into
          trying React.js for a few things.
        </p>
        <p>
          I eventually left to start my own company. If you're on my website now
          I'm guessing it didn't go too well...but Scarlet Social's motto is
          really what I specialize in. "A digital agency for the future. We do
          what other's dont." Doing what others don't. I try creating
          experiences and strategies other people and agencies don't. I like to
          push innovation and new ideas.
        </p>
        <p className="no-indent">
          I make chat bots using Discord, Reddit, Facebook, Twitter and more
          API's.
        </p>
        <p className="no-indent">I make augmented reality experiences.</p>
        <p className="no-indent">
          And if I have a crazy idea I can't do. I learn how to do it and it
          happens.
        </p>
        <p>
          I learn fast and I'm not afraid to try something new, in fact I'm
          afraid of never getting to try anything new. This works well in
          agencies, you can try that crazy idea for a client because if nobody
          else is willing to learn how to make it within the deadline, I will.
          Speaking of that, scroll down to see what I wanna learn.
        </p>
      </div>
    )
  }
}

export default AboutWork
