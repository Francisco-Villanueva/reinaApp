import React, { useState } from "react";
import "./Card.css";
import logo from "./burger.png";

import { connect, useSelector } from "react-redux";
import * as actionCreators from "../../actions";
import { bindActionCreators } from "redux";

export function Card(props) {
  const burgers = useSelector((s) => s.burgerList);
  const [burga, setBurga] = useState([props.name]);
  const handleBurgers = () => {
    setBurga([...burga, props.name]);
    console.log("brugas: ", burga, burga.length);
    props.addBurga([...burgers, burga]);

    console.log("BURGERS: => ", burgers);
  };
  return (
    <div className="cardContainer">
      <img src={logo} alt="burgPNG" />
      <div className="nombre">
        <h3>{props.name}</h3>
        <span>{props.description}</span>
      </div>
      <div className="datos">
        <div className="precios">
          <b>$ {props.price}</b>
        </div>
      </div>
      <button onClick={(e) => handleBurgers(e)} className="btn-add">
        +
      </button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  menu: state.statePrueba,
  // burgers: state.burgerList, //arreglo con las burgers
});
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
