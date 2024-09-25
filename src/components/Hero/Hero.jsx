import React from 'react'
import './hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  return (
    <div className='hero' id='home'>
      <img src={profile_img}></img>
      <h1>
        <span>I'M Balakrishna,</span> frontend developer based in india.
      </h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus praesentium provident, modi, quos facere ea vel natus eligendi, quisquam </p>
      <div className='hero-action'>
        <div className='hero-connect'><AnchorLink className='nachor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
        <div className='hero-resume'>My Resume</div>
      </div>
    </div>
  )
}

export default Hero
