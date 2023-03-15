import React from "react";
import "./Header.css";
import logoRojo from "../../images/logoRojo.png";
import wave from "../../images/wave.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
export default function Header() {
  return (
    <div>
      <div className="top-header ">
        <div className="logo-container text-focus-in">
          <img src={logoRojo} alt="logo rjoo " />
          <h2>REINA BURGUESA</h2>
          <span>La mejor burger de la ciudad</span>
        </div>
      </div>
    </div>
  );
}
