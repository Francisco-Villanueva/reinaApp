import React, { useState } from "react";
import "./Card.css";
import logo from "./burger.png";

import { connect, useSelector } from "react-redux";
import * as actionCreators from "../../actions";
import { bindActionCreators } from "redux";

export function Card(props) {
  console.log("CARD :  ", props.contador);
  const burgers = useSelector((s) => s.burgerList);
  const precioPart = useSelector((s) => s.pricesList);

  const [burga, setBurga] = useState({
    simple: props.name + " simple",
    doble: props.name,
    triple: props.name + " triple",
  });
  const [precio, setPrecio] = useState({
    simple: props.price - 100,
    doble: props.price,
    triple: props.price + 250,
  });

  const [counterSimple, setCounterSimp] = useState(0);
  const [counterDoble, setCounterDobl] = useState(0);
  const [counterTriple, setCounterTrip] = useState(0);


  const handleBurgers = (e) => {
    let nameAux = e.target.name;

    if (nameAux == "simple") {
      setCounterSimp((state) => state + 1);
      burgers.push(burga.simple);
      precioPart.push(precio.simple);
    } else if (nameAux == "doble") {
      setCounterDobl((state) =>state+ 1);
      burgers.push(burga.doble);
      precioPart.push(precio.doble);
    } else {
      setCounterTrip((state) => state + 1);
      burgers.push(burga.triple);
      precioPart.push(precio.triple);
    }
    console.log("BURGERS: => ", burgers);
    console.log("PRECIOS: => ", precioPart);
  };
  return (
    <div className="cardContainer">
      <div className="Card-izq">
        <div className="nombre">
          <h3>{props.name}</h3>
        </div>

        <div className="buy">
          <div className="price-btn">
            <p>Simple</p>
            <button
              name="simple"
              onClick={(e) => handleBurgers(e)}
              className="btn-add"
            >
              $ {props.price - 100}
            </button>
            <span>{counterSimple}</span>
          </div>
          <div className="price-btn">
            <p>Doble</p>
            <button
              name="doble"
              onClick={(e) => handleBurgers(e)}
              className="btn-add"
            >
              $ {props.price}
            </button>
            <span>{counterDoble}</span>
          </div>
          <div className="price-btn">
            <p>Triple</p>
            <button
              name="triple"
              onClick={(e) => handleBurgers(e)}
              className="btn-add"
            >
              $ {props.price + 250}
            </button>
            <span>{counterTriple}</span>
          </div>
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
