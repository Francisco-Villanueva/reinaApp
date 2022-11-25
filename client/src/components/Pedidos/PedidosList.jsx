import React from "react";
import "./PedidosList.css";

import { connect, useSelector } from "react-redux";
import * as actionCreators from "../../actions";
import { bindActionCreators } from "redux";
import { useEffect } from "react";
import PedidoCard from "./PedidoCard";
import NavBar from "../Home/NavBar";

export function PedidosList(props) {
  let contador = props.pedidos.length;
  let entrega2 = useSelector((s) => s.pedidosEntregados);
  useEffect(() => {
    props.getPedidos();
    // console.log('useEfect ENTREGAS  ', contador)
    // console.log('PEDIDOS ENTREGADOS: ', entrega2)
  }, [contador]);

  // console.log('LISTA DE PEDIDOS', props.pedidos)
  props.pedidos.sort((a, b) => Date.parse(a.bloque) - Date.parse(b.bloque));

  // new Date(b.date) - new Date(a.date)
  // console.log("LISTA DE PEDIDOS ordenados", props.pedidos);

  return (
    <div>
      <NavBar />
      <div className="pedidosContainer">
        <div className="tabla-main">
          <ol className="tabla-head">
            <ul>nro</ul>
            <ul>Nombre</ul>
            <ul>Burgers</ul>
            <ul>Entrega</ul>
            <ul>Direccion</ul>
            <ul>Cantidad</ul>
            <ul>Acciones</ul>
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
              deleteFunc={p.deletePedido}
            />
          ))}
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
