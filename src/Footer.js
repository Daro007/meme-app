import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaReact } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <footer className="footer">
        <p className="reactIcon">
          SPA coded by Daro in React.js <FaReact className="App-logo"></FaReact>{" "}
        </p>

        <p>Find me on social media</p>

        <a href="https://twitter.com/DevDaro" about="_blank" className="icons">
          <FaTwitter></FaTwitter>
        </a>
        <a
          className="icons"
          href="https://www.facebook.com/Daro.07"
          about="_blank"
        >
          <FaFacebook></FaFacebook>
        </a>
        <a
          className="icons"
          href="https://www.linkedin.com/in/dario-nicolas-elias-a2b743a5/"
          about="_blank"
        >
          <FaLinkedin></FaLinkedin>
        </a>
      </footer>
    </div>
  );
}

export default Footer;
