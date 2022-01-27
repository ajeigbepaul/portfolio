import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import HomeIcon from "@mui/icons-material/Home";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link } from "react-router-dom";
import "./Contact.css";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

function Contact() {
  return (
    <div className="contact">
      <div className="contact__address">
        <div className="contact__header">
          <LocationOnIcon />
          <h1>My Address</h1>
        </div>

        <div className="contact__me">
          <HomeIcon />
          <p>
            Km 46, Lekki Epe Express way, Corner Bustop , Sangotedo Lagos
            Nigeria
          </p>
        </div>
        <div className="contact__email">
          <AlternateEmailIcon />
          <p>ajeigbepaul@yahoo.com</p>
        </div>
        <div className="contact__phone">
          <PhoneIcon />
          <p>+234 (0)8104560227</p>
        </div>
        <small className="back">
          <Link to="/">Back Home</Link>
        </small>
      </div>
    </div>
  );
}

export default Contact;
