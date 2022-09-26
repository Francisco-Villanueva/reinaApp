import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../actions";
import { bindActionCreators } from "redux";

export function Menu(props) {
  return <div>{props.menu}</div>;
}
const mapStateToProps = (state) => ({
  menu: state.statePrueba,
});
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
