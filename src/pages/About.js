// About.js

import React from 'react';
import '../css/about.css'
import SaraiPic from "../images/Pursuit_ST.jpg";
import JenniferPic from "../images/Jennifer Einstein_2022_Pursuit_a copy.jpg";
import JoanavelPic from "../images/Pursuit_JP.jpg";


function About() {
  window.scrollTo(0,0);
  return (
    <div id="about-page">
    <div className='about container-fluid p-5'>
      <h2 id='title'>Meet the Development Team</h2>
      <div className='developers'>
        {/* <h2 className=''>App Developers</h2> */}

        <div className='individual-devs'>
          <div id="developer-contianer">
          <img 
            src={JenniferPic} 
            alt="profile pic of Jennifer" 
            className="dev-profile-pic img-thumbnail"/>
            <div>
          <a id="github-link" href="https://github.com/JenniferEinstein" className="developer">Jennifer Einstein </a>
          </div>
          <p>Hailing from the Golden State, Jennifer Einstein is known among her family and friends as an inventive gift giver. The best gift she ever received was 500 individual packets of mustard from her father after complaining that no one served yellow mustard in New York City, where she now lives. Jennifer aims to make the modern world a better place, one line of code at a time. </p>
          <br/>
          </div>
          
          <div id="developer-container">
          <img 
            src={JoanavelPic} 
            alt="profile pic of Joanavel" 
            className="img-thumbnail dev-profile-pic "/>
            <div>
          <a id="github-link" href="https://github.com/JoanavelPascual7" className="developer">Joanavel Pascual</a>
          </div>
          <p>
Joanavel Pascual is a highly motivated professional based in New York City, currently transitioning into a full-stack developer role. With a background in sociology, Joanavel has successfully completed an intensive 12-month software engineering program at Pursuit, dedicating over 30 hours per week to coding. Proficient in front-end technologies like JavaScript, React, Redux, HTML, and CSS, as well as back-end tools such as MySQL, Node.js, and PostgreSQL, Joanavel is well-versed in building interactive web applications and full-stack websites (PERN Stack). Prior work experience includes roles at the NYC Department of Health & Mental Hygiene and the NYC Administration for Children Services, showcasing a strong foundation in data management, coordination, and client support. With a growing portfolio of software engineering projects, including a Student Dashboard Landing Page, Weather App, and Full-stack Portfolio Project, Joanavel brings a diverse skill set and a passion for leveraging technology to make a positive impact. Check out Joanavel's work on GitHub and LinkedIn for a closer look at the projects and skills acquired during this transition.</p>
          <br/>
          </div>


          <div id="developer-container">
          <img 
            src={SaraiPic} 
            alt="profile pic of Sarai" 
            className="img-thumbnail dev-profile-pic "/>
              <div>
          <a id="github-link" href="https://github.com/Sarai-ii" className="developer">Sarai Thomas </a>
          </div>
          <p>Sarai Thomas is a software engineer and digital designer; she is also the lead on this project. Sarai has combined her background in business with her creativity skills to become the CEO and creative director of GLD RZÉ, a new luxury jewelry line.</p>
          <br/>
        </div>
        </div>
      </div>
      <div className='developers-squares'>

      </div>
        {/* <div>
            <h6>Credits</h6>
              <ul className='list credits-list'>
                <li>placeholder one</li>
                <li>placeholder two</li>
              </ul>
        </div> */}
    </div>
    </div>
  )
}

export default About