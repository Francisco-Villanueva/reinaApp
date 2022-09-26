import React from "react";
import "./Card.css";
import logo from "./burger.png";

import { connect } from "react-redux";
import * as actionCreators from "../../actions";
import { bindActionCreators } from "redux";

export function Card(props) {
  return (
    <div className="cardContainer">
      <img src={logo} />
      <div className="nombre">
        <h3>{props.name}</h3>
        <span>{props.description}</span>
      </div>
      <div className="datos">
        <div className="precios">
          <p>simple: {props.price.simple}</p>
          <p>doble: {props.price.doble}</p>
          <p>triple: {props.price.triple}</p>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  menu: state.statePrueba,
});
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
