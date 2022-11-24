import React from "react";
import "./CardB.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
export default function CardB(props) {
  console.log(props);
  return (
    <div className="card-main">
      <div className="data-container">
        <div className="items">
          Nombre:
          <b>{props.name}</b>
        </div>
        <div className="items">
          Descripcion:
          <b> {props.description}</b>
        </div>
        <div className="items">
          Carnes:
          <b> {props.carnes}</b>
        </div>
        <div className="items">
          Precio:
          <b>$ {props.price}</b>
        </div>
      </div>
      <div className="btns-container">
        <Link className="btn-edit" to={`/editburger/${props.id}`}>
          <FontAwesomeIcon icon={faPenToSquare} />
        </Link>
      </div>
    </div>
  );
}
