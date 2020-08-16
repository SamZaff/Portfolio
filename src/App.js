import React from 'react';
import './App.css';
import Card from 'react-bootstrap/Card'
import { FaGithub, FaPhoneAlt, FaLightbulb } from 'react-icons/fa'
import { AiFillLinkedin } from 'react-icons/ai'
import { GoMail } from 'react-icons/go'
import { IoIosPaper } from 'react-icons/io'
import { GiCardRandom, GiBookCover, GiThink } from 'react-icons/gi'
import {MdWork} from 'react-icons/md'
import resume from './Resources/Resume.pdf'

// function getTimeOfDay() {
//   var d = new Date();
//   if (d.getHours() < 6 || d.getHours() > 19) {
//     return 'Moon'
//   }
//   else {
//     return 'Sun'
//   }
// }

function App() {
  return (
    <div className="App">
      <div className="sunBanner">
        <div id="nav">
          <a href="#section1">About</a>
          <a href="#section2">Experience</a>
          <a href="#section3">Projects</a>
        </div>
        <img src={require(`./Resources/SunBanner.gif`)} alt="sun" />
        <p>GIF created using Blender</p>
      </div>
      <div className="page" id="section1">
        <div id="me">
          <img src={require(`./Resources/MeSquared2.JPG`)} alt="Me" />
          <p>Hi there! My name is <b>Sam Zaffanella</b> and I am a recent computer
             science graduate of San Francisco State University. I am currently
             looking for work. I'm gonna come back and work on this description
             later so all of what I'm writing right now is just a filler. Hopefully
             I can think of something interesting to say.
            </p>
        </div>
        <div id="info">
          <ul>
            <li><FaGithub /> <a href="https://github.com/SamZaff" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><AiFillLinkedin color="#0072b1" /> <a href="https://www.linkedin.com/in/sam-zaffanella-239190109/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><FaPhoneAlt color="#32CD32" /> (+1)925-451-0918</li>
            <li><GoMail color="red" /> samuel.zaffanella@gmail.com</li>
            <li><IoIosPaper color="grey" /> <a href={resume} target="_blank" rel="noopener noreferrer">Resume.pdf</a></li>
            <li><GiCardRandom color="Purple" /> <a href="https://briscolacardgame.herokuapp.com/" target="_blank" rel="noopener noreferrer">Briscola Card Game</a></li>
          </ul>
        </div>
      </div>
      <div className="page" id="section2">
        {/* <div className="about"> */}

        <div id="experience">
          <h2><FaLightbulb color="#CCCC00" />Skills</h2>
          <h4>Programming</h4>
          <ul>
            <li>Java</li>
            <li>JavaScript</li>
            <li>C++</li>
            <li>React.js</li>
            <li>HTML/CSS</li>
            <li>Go</li>
            <li>Python</li>
          </ul>
          <h4>Databases</h4>
          <ul>
            <li>MongoDB</li>
            <li>SQL</li>
          </ul>
          <h4>Other Skills</h4>
          <ul>
            <li>Microsoft Office</li>
            <li>Windows, Mac, LinuxOS</li>
            <li>Blender</li>
          </ul>
        </div>
        <div id="experience">
          <h2><GiBookCover color="purple" />Education</h2>
          <h5>San Francisco <br/> State University</h5>
          <img src = {require('./Resources/SFSU logo.png')} alt = "sfsu logo" style = {{height: "60px", width: "60px", display: "inline-block"}}/> {/**CHANGE */}
          </div>
        <div id="experience">
          <h2><MdWork color="red" />Experience</h2>
          <h4>Programming</h4>
          <ul>
            <li>Java</li>
            <li>JavaScript</li>
            <li>C++</li>
            <li>React.js</li>
            <li>HTML/CSS</li>
            <li>Go</li>
            <li>Python</li>
          </ul>
          <h4>Databases</h4>
          <ul>
            <li>MongoDB</li>
            <li>SQL</li>
          </ul>
          <h4>Other Skills</h4>
          <ul>
            <li>Microsoft Office</li>
            <li>Windows, Mac, LinuxOS</li>
            <li>Blender</li>
          </ul>
        </div>
        <div id="experience">
          <h2><GiThink color="blue" />Work Ethic</h2>
          <h4>Programming</h4>
          <ul>
            <li>Java</li>
            <li>JavaScript</li>
            <li>C++</li>
            <li>React.js</li>
            <li>HTML/CSS</li>
            <li>Go</li>
            <li>Python</li>
          </ul>
          <h4>Databases</h4>
          <ul>
            <li>MongoDB</li>
            <li>SQL</li>
          </ul>
          <h4>Other Skills</h4>
          <ul>
            <li>Microsoft Office</li>
            <li>Windows, Mac, LinuxOS</li>
            <li>Blender</li>
          </ul>
        </div>
        {/* </div> */}
      </div>

    </div>

  );
}

export default App;
