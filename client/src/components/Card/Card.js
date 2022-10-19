import React, { useState } from "react";
import "./Card.css";
import logo from "./burger.png";

import { connect } from "react-redux";
import * as actionCreators from "../../actions";
import { bindActionCreators } from "redux";

export function Card(props) {

  const[aux, setAux]=useState({
    nombre: "",
    entrega: "",
    burgers:[],
    direccion: ""
  })
  const loadPedido = ()=>{
    alert(props.name)
  }
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
      <button onClick={()=>loadPedido()} className="btn-add">+</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  menu: state.statePrueba,
  pedi : state.pedidoOnProgress
});
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
