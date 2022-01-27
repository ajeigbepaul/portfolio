import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import "./Banner.css";
function Banner() {
  return (
    <div className="banner">
      <div className="banner__body">
        <span>I am</span>
        <h1>Ajeigbe Paul</h1>
        <p>A MERN Stack WebDeveloper</p>
      </div>
      <div className="banner__cv">
        <button className="banner__btn">
          <a
            href="https://www.dropbox.com/s/fb079u3q3xvn56l/webdeveloper-AjeigbePaul%20-%201641323517.pdf?dl=0"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span>Download CV</span>
          </a>
        </button>
      </div>
      <div className="banner__icons">
        <a href="https://web.facebook.com/Darichlol">
          <FacebookIcon fontSize="large" className="icons" />
        </a>
        <a href="https://www.instagram.com/thedairyofatechnovies/">
          <InstagramIcon fontSize="large" className="icons" />
        </a>
        <a href="https://www.linkedin.com/in/paul-ajeigbe-81a5b11bb">
          <LinkedInIcon fontSize="large" className="icons" />
        </a>

        <TwitterIcon fontSize="large" className="icons" />
      </div>
    </div>
  );
}

export default Banner;
