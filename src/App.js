import React from 'react';
import './App.css';
import Card from 'react-bootstrap/Card'
import { FaGithub, FaPhoneAlt } from 'react-icons/fa'
import { AiFillLinkedin } from 'react-icons/ai'
import { GoMail } from 'react-icons/go'
import { IoIosPaper } from 'react-icons/io'
import { GiCardRandom } from 'react-icons/gi'
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
        <a href="#section1">About</a>
        <a href="#section2">Projects</a>
        <a href="#section3">Contact</a>
        <img src={require(`./Resources/SunBanner.gif`)} alt="sun" />
        <p>GIF created using Blender</p>
      </div>
      <div className="page" id="section1">
        <div className="about">
          <div id="me">
            <img src={require(`./Resources/MeSquared.jpg`)} alt="Me" />
            <p>Sam Zaffanella</p>
          </div>
          <div id = "info">
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
      </div>
      <div className="page" id="section2">
        <div className="about">
          <div id="me">
            <img src={require(`./Resources/MeSquared.jpg`)} alt="Me" />
            <p>Sam Zaffanella</p>
          </div>
          <div id = "info">
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
      </div>
      
    </div>

  );
}

export default App;
