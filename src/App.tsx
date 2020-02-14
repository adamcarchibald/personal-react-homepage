import React from "react";
import logo from "./robot-logo-v2.svg";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaMedium,
  FaEnvelopeOpen
} from "react-icons/fa";
import "./App.scss";

const App: React.FC = () => {
  return (
    <div className="Card">
      <img src={logo} className="App-logo FullRow" alt="logo" />
      <h4>
        <b>Adam Archibald</b>
      </h4>
      <p className="FullRow">Cat lover, code writer</p>
      <div className="SocialMediaIconContainer">
        <a href="https://github.com/adamcarchibald" target="_blank" rel="noopener noreferrer"><FaGithub size={25} /></a>
        <a href="https://www.linkedin.com/in/adamarchibald/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={25} /></a>
        <a href="https://medium.com/@adamarchibald" target="_blank" rel="noopener noreferrer"><FaMedium size={25} /></a>
        <a href="https://twitter.com/adamarchibald/" target="_blank" rel="noopener noreferrer"><FaTwitter size={25} /></a>
        <FaEnvelopeOpen size={25} />
      </div>
    </div>
  );
};

export default App;
