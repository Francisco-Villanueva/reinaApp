import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteBurger, getBurgers } from "../../actions";
import BackBtn from "../Btn-backNavigate/BackBtn";
import CardB from "./burgerCard/CardB";
import "./Menu.css";
export default function Menu({ burgers }) {
  const nav = useNavigate();
  const dispatch = useDispatch();

  return (
    <div>
      <BackBtn />
      <h2>LISTA DE BURGERS</h2>
      <button className="btn-addBurger" onClick={() => nav("/createBurger")}>
        {" "}
        + Burger
      </button>
      <div className="card-container">
        {burgers.map((b) => (
          <CardB
            key={b.id}
            id={b.id}
            name={b.name}
            price={b.price}
            description={b.description}
            carnes={b.carnes}
            // delete={() => dispatch(deleteBurger(b.id))}
          />
        ))}
      </div>
    </div>
  );
}
