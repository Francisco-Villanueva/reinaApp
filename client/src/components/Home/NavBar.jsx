import React from "react";
import logo from "../../images/logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "./NavBar.css";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <div>
      <div className="navbar">
        <div className="nav-izq">
          <Link to={"/"}>
            <img className="bugerPNG" src={logo} alt="logoReinA" />
          </Link>
        </div>
        <div className="nav-der">
          <p>
            <FontAwesomeIcon className="social-icon ig" icon={faInstagram} />{" "}
            reina.burguesa
          </p>
          <p>
            <FontAwesomeIcon className="social-icon wp" icon={faWhatsapp} /> 291
            503-8472
          </p>
        </div>
      </div>
    </div>
  );
}
