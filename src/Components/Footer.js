import "../Styles/FooterStyles.css";
// import Logo from "../Components/Assets/Logo-1.png";

import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="divTopFooter">
          <h1 className="headingTopFooter">K-GREAT ENGINEERING</h1>
          <p className="paraTopFooter">Engineering Excellence</p>
        </div>
        {/* <img className="navbarLogoImage" alt="Image1" src={Logo} /> */}
      </div>

      <div className="bottom">
        <div className="bottomDiv">
          <h4>Company</h4>
          <Link to="/" className="footerLink">
            <span class="material-symbols-outlined" id="footerArrowIcon">
              chevron_right
            </span>
            <p className="footerLinkText">Home</p>
          </Link>
          <Link to="/About" className="footerLink">
            <span class="material-symbols-outlined" id="footerArrowIcon">
              chevron_right
            </span>
            <p className="footerLinkText">About</p>
          </Link>
          <Link to="/Projects" className="footerLink">
            <span class="material-symbols-outlined" id="footerArrowIcon">
              chevron_right
            </span>
            <p className="footerLinkText">Projects</p>
          </Link>
          <Link to="/Contact" className="footerLink">
            <span class="material-symbols-outlined" id="footerArrowIcon">
              chevron_right
            </span>
            <p className="footerLinkText">Contact</p>
          </Link>
        </div>
        <div className="bottomDiv">
          <h4>Contact</h4>
          <Link to="/Contact" className="footerLink">
            <span class="material-symbols-outlined" id="footerArrowIcon">
              home
            </span>
            <p className="footerLinkText">
              No. 34 Razak Balogun Street, Surulere, Lagos
            </p>
          </Link>
          <Link to="/Contact" className="footerLink">
            <span class="material-symbols-outlined" id="footerArrowIcon">
              phone_in_talk
            </span>
            <p className="footerLinkText">+234 813 409 6977</p>
          </Link>
          <Link to="/Contact" className="footerLink">
            <span class="material-symbols-outlined" id="footerArrowIcon">
              phone_in_talk
            </span>
            <p className="footerLinkText">+234 813 156 7055</p>
          </Link>
          <Link to="/Contact" className="footerLink">
            <span class="material-symbols-outlined" id="footerArrowIcon">
              mail
            </span>
            <p className="footerLinkText">kgreat.engineering1@gmail.com</p>
          </Link>
        </div>
        <div className="footerSocialLinks">
          {/* <Link to="/About" className="footerLink">
            <i className="fa-brands fa-facebook-square"></i>
          </Link> */}
          <Link
            to="https://www.instagram.com/kgreat.engineering1/"
            className="footerLink"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-instagram-square"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
