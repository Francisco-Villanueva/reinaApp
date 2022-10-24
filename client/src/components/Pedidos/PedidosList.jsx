import React from "react";
import "./PedidosList.css";

import { connect, useSelector } from "react-redux";
import * as actionCreators from "../../actions";
import { bindActionCreators } from "redux";
import { useEffect } from "react";
import PedidoCard from "./PedidoCard";
import NavBar from "../Home/NavBar";

export function PedidosList(props) {
  useEffect(() => {
    props.getPedidos();
  }, [props.pedidos]);
  return (
    <div>
      <NavBar />
      <div className="pedidosContainer">
        <div className="tabla-main">
          <table>
            <ol className="tabla-head">
              <ul>nro</ul>
              <ul>Nombre</ul>
              <ul>Burgers</ul>
              <ul>Entrega</ul>
              <ul>Direccion</ul>
              <ul>Cantidad</ul>
            </ol>
            <hr />
            {props.pedidos.map((p) => (
              <PedidoCard
                key={p.id}
                id={p.id}
                name={p.nombre}
                burgers={p.burgers}
                entrega={p.entrega}
                direccion={p.direccion}
                cantidad={p.cantidad}
                precio={p.precio}
              />
            ))}
          </table>
        </div>
      </div>
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
