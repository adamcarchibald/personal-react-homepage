import React, { useEffect } from "react";
import ReactGA from "react-ga";
import logo from "./robot-logo-v2.svg";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaMedium,
  FaEnvelopeOpen
} from "react-icons/fa";
import "./App.scss";


export default function App() {
  useEffect(() => {
    initializeReactGA();
  }, [])

  return (
    <div className="Card">
      <img src={logo} className="App-logo FullRow" alt="logo" />
      <h1 className="LargeTitle NoBottomMargin">Adam Archibald</h1>
      <h3 className="UnderTitle">Cat lover, code writer</h3>
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

function initializeReactGA() {
  ReactGA.initialize('UA-38131856-5');
  ReactGA.pageview('/');
}
