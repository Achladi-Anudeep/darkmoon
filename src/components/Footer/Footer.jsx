import React from "react";
import { Link } from "react-router-dom";
import DarkMoonLogo from "../../assets/Images/DarkmoonLogoTransparantBgWithoutBrandName.png";
import {
  AiOutlineDoubleRight,
  AiFillInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { ImFacebook } from "react-icons/im";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-first-sec">
        <h1>
          <img src={DarkMoonLogo} className="footer-logo" alt="darkmoon-logo" />
          Dark Moon
        </h1>
        <button>
          <Link to="/contact-us">Contact Us</Link>
          <AiOutlineDoubleRight className="footer-contact-us-icon" />
        </button>
      </div>
      <div className="footer-second-sec">
        <p>STARDUST SPICES LLP,</p>
        <p>B1, Suite#685,</p>
        <p>LR Towers,SJRRA 104,</p>
        <p> Janatha Rd, Palarivattom,</p>
        <p> Kochi, Kerala 682025.</p>
      </div>
      <div className="footer-third-sec">
        <h3>Connect with us on</h3>
        <div className="social-icons">
          <button>
            <ImFacebook />
          </button>
          <button>
            <a
              href="https://www.instagram.com/darkmoon.in/?hl=en"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillInstagram />
            </a>
          </button>
          <button>
            <a
              href="https://twitter.com/darkmoon_in"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineTwitter />
            </a>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
