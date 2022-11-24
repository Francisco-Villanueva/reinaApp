import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getBurgers } from "../../actions";
import BackBtn from "../Btn-backNavigate/BackBtn";
import CardB from "./burgerCard/CardB";
import "./Menu.css";
export default function Menu() {
  const dispatch = useDispatch();
  const burgers = useSelector((state) => state.burgersMenu);
  const nav = useNavigate();
  useEffect(() => {
    dispatch(getBurgers());
  }, []);
  return (
    <div>
      <BackBtn />
      <h2>LISTA DE BURGERS</h2>
      <button onClick={() => nav("/createBurger")}> + Burger</button>
      <div className="card-container">
        {burgers.map((b) => (
          <CardB
            key={b.id}
            id={b.id}
            name={b.name}
            price={b.price}
            description={b.description}
            carnes={b.carnes}
          />
        ))}
      </div>
    </div>
  );
}
