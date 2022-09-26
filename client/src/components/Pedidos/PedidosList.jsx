import React from "react";
import "./PedidosList.css";

import { connect } from "react-redux";
import * as actionCreators from "../../actions";
import { bindActionCreators } from "redux";
import { useEffect } from "react";
import PedidoCard from "./PedidoCard";

export function PedidosList(props) {
  useEffect(() => {
    props.getPedidos();
  }, []);
  return (
    <div>
      {props.pedidos.map((p) => (
        <PedidoCard
          key={p.id}
          id={p.id}
          name={p.nombre}
          burgers={p.burgers}
          entrega={p.entrega}
          direccion={p.direccion}
          cantidad={p.cantidad}
        />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  pedidos: state.pedidosLoaded,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(PedidosList);
