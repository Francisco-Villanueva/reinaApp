import React from "react";
import "./CardB.css";
import { useDispatch } from "react-redux";
import { deleteBurger } from "../../../actions";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
export default function CardB(props) {
  console.log(props);
  const dispatch = useDispatch();
  const handleDeleteBurger = () => {
    dispatch(deleteBurger(props.id));
  };
  return (
    <div className="card-main scale-in-hor-left ">
      <div className="data-container">
        <div className="items">
          <h2 className="tracking-in-expand">{props.name} ---------- </h2>
        </div>

        <div className="items">
          <div className="precios">
            <p className="slide-in-bottom">
              Simple <b> ${props.price - 100}</b>
            </p>
            <p className="slide-in-bottom">
              Doble <b> ${props.price}</b>
            </p>
            <p className="slide-in-bottom">
              Triple <b> ${props.price + 250}</b>
            </p>
          </div>
        </div>
      </div>
      <div className="btns-container scale-in-ver-center">
        <Link className="btn-edit" to={`/editburger/${props.id}`}>
          <FontAwesomeIcon icon={faPenToSquare} />
        </Link>

        <button className="btn-delete" onClick={handleDeleteBurger}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
}
