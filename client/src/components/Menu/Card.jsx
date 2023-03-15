import React from "react";
import "./Card.css";
import fotoCard from "../../images/burgerCard.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
export default function Card({ burger }) {
  console.log("Card MENU: ", burger);
  return (
    <div className="card-main slide-in-left-12 ">
      <img src={fotoCard} alt="fotocard" />
      <div className="info-container scale-in-ver-top-14  ">
        <div>
          <h4 className="scale-in-ver-top-17">{burger.name}</h4>
        </div>
        <div>
          <p className="scale-in-ver-top-1-8" style={{ fontSize: ".9rem" }}>
            Opciones <FontAwesomeIcon icon={faCaretDown} />
          </p>
        </div>
      </div>
    </div>
  );
}
