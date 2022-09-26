import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../actions";
import { bindActionCreators } from "redux";
import { useEffect } from "react";
import { Menu } from "./Menu";

export function Testeando(props) {
  useEffect(() => {
    props.getMenu();
    console.log(props.p);
  }, []);
  return (
    <div>
      <button onClick={() => props.switchh()}>Cargar menu</button>

      {props.p.map((e) => (
        <p key={e.id}>{e.name}</p>
      ))}
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
