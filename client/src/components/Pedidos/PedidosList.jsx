import React from "react";
import "./PedidosList.css";

import { connect, useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import PedidoCard from "./PedidoCard";
import NavBar from "../Home/NavBar";
import { getPedidos } from "../../actions";

export default function PedidosList(props) {
  // let contador = props.pedidos.length;
  let entrega2 = useSelector((s) => s.pedidosEntregados);
  const p = useSelector((s) => s.pedidosLoaded);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPedidos());
  }, []);

  // console.log('LISTA DE PEDIDOS', props.pedidos)
  // props.pedidos.sort((a, b) => Date(a.bloque) - Date(b.bloque));

  return (
    <div>
      {/* <NavBar /> */}
      <h1>Lista de pedidos</h1>
      <div className="pedidosContainer">
        <div className="tabla-main">
          <ol className="tabla-head">
            <ul>Horario</ul>
            <ul>Precio</ul>
            <ul>Nombre</ul>
            <ul>Burgers</ul>
            <ul>Entrega</ul>
            <ul>Direccion</ul>
            <ul>Cantidad</ul>
            <ul>Acciones</ul>
          </ol>
          <hr />
          {p?.map((p) => (
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
              bloque={p.bloque}
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
