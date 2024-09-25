import React from 'react'
import './about.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.svg'
const About = () => {
  return (
    <div className='about' id='about'>
      <div className='about-title'>
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam amet exercitationem rerum aliquid molestias nemo debitis eum pariatur eveniet, cum voluptates numquam natus, excepturi rem reiciendis et quos possimus eius?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo architecto reiciendis cumque, vel doloremque, voluptatem expedita dolore molestiae porro magni enim obcaecati incidunt quasi mollitia suscipit, accusantium alias voluptates corrupti.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill">
                    <p>HTML & CSS</p><hr style={{width:"80%"}}/>
                </div>
                <div className="about-skill">
                    <p>React JS</p><hr style={{width:"60%"}}/>
                </div>
                <div className="about-skill">
                    <p>Javascript</p><hr style={{width:"70%"}}/>
                </div>
                <div className="about-skill">
                    <p>Next JS</p><hr style={{width:"30%"}}/>
                </div>
            </div>
        </div>
      </div>
      <div className="about-ach">
        <div className="about-achievement">
           <h1>10+</h1>
           <p>Years of experience</p>
        </div>
        <hr />
        <div className="about-achievement">
           <h1>90+</h1>
           <p>projects completed</p>
        </div>
        <hr />
        <div className="about-achievement">
           <h1>15+</h1>
           <p>happy clients</p>
        </div>
      </div>
    </div>
  )
}

export default About
