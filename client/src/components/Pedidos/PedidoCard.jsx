import React from "react";
import "./PedidoCard.css";
export default function PedidoCard(props) {
  return (
    <div className="container">
      <ol>
        <ul>{props.id}</ul>
        <ul>{props.name}</ul>
        <ul>
          <ol>
            <ul>{props.burgers[15]}</ul>
          </ol>
        </ul>
        <ul>{props.entrega}</ul>
        <ul>{props.direccion}</ul>
        <ul>{props.cantidad}</ul>
      </ol>
    </div>
  );
}
