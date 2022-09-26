import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../actions";
import { bindActionCreators } from "redux";
import { useEffect } from "react";
import { Card } from "./Card/Card";
import "./Testeando.css";

export function Testeando(props) {
  useEffect(() => {
    props.getMenu();
    console.log(props.p);
  }, []);
  return (
    <div>
      <h1>MENU</h1>
      <div>
        <label htmlFor="Nombre">Nombre</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="Nombre">Direccion</label>
        <input type="text" />
      </div>
      <div className="menuContainer">
        {props.p.map((burg) => (
          <Card
            name={burg.name}
            price={burg.price}
            description={burg.description}
            key={burg.id}
            types={burg.dietType}
          />
        ))}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  p: state.menuLoaded,
  name: state.statePrueba,
  bool: state.load,
});
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Testeando);
