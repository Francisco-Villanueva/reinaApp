import React, { useEffect } from "react";
import "./PedidosSide.css";

import { connect } from "react-redux";
import * as actionCreators from "../../../actions";
import { bindActionCreators } from "redux";

export function PedidosSide(props) {
  useEffect(() => {
    props.getPedidos();
  }, []);
  return (
    <div className="list-container">
      <h2>PEDIDOS</h2>
      <div className="lista">
        {props.pedidos1.map((p) => (
          <p>
            <b>{p.nombre}</b> - {p.entrega}
          </p>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  pedidos1: state.pedidosLoaded,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(PedidosSide);
