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
    props.addBurga([...burgers, burga[0]]);

    console.log("BURGERS: => ", burgers);
  };
  return (
    <div className="cardContainer">
      <div className="Card-izq">
        <div className="nombre">
          <h3>{props.name}</h3>
        </div>
        <div className="description">
          <span>{props.description}</span>
        </div>
        <div className="buy">
          <button onClick={(e) => handleBurgers(e)} className="btn-add">
            + <b>$ {props.price}</b>
          </button>
        </div>
      </div>
      <div className="img-container">
        <img src={logo} alt="burgPNG" />
      </div>
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
