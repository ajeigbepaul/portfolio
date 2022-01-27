import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <section className="header container">
      <div className="header__img">
        <h1>Paaje</h1>
        {/* paaje image goes here */}
      </div>
      <nav className="header__nav">
        <ul>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <Link to="/contact">Contact Me</Link>
          </li>
          <li>
            <Link to="/login">Admin</Link>
          </li>
        </ul>
      </nav>
      <div className="header__icons">{/* header icons goes here */}</div>
    </section>
  );
}

export default Header;
