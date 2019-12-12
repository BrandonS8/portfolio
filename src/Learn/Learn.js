import React, { Component } from 'react'
import './Learn.css'

class Learn extends Component {
  render() {
    return (
      <div className="about-work learn flex-center-col">
        <h1>What I Want To Learn</h1>
        <ul>
          <li>
            <b>Game Development in Unity or Unreal</b>, already have some
            experience as AR engines are quite similiar
          </li>
          <li>
            <b>Three.js</b>, I'm alright with it but don't get to use it often
          </li>
          <li>
            <b>Angular & Vue</b>, I know React well. This site is even made with
            React. But I've not used these 2 very much
          </li>
          <li>
            <b>Security</b>, I would like to see how large sites or apps with
            authentication handle security full stack. I get JWT authentication,
            but I assume there is much more to learn.
          </li>
          <li>
            <b>Lower/Mid level languages</b>, C++/C#/Java/Other popular
            languages. I've used them some, but haven't really learned them.
            They vary a fair amount from my usual language, Javascript
          </li>
          <li>
            <b>Getting paying clients</b>, I've always struggled to pitch new
            things to clients. Especially since I focus on things most people
            haven't even heard of.
          </li>
          <li>
            <b>Real Estate</b>, not related to programming. I'm just an
            entreprenuer at heart and invest a lot of my money. Real Estate is
            interesting to me for the investment side.
          </li>
        </ul>
      </div>
    )
  }
}

export default Learn
