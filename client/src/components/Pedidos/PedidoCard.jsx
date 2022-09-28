import React from "react";
import "./PedidoCard.css";
export default function PedidoCard(props) {
  let o = 1;
  return (
    <div className="container">
      <ol>
        <ul>{o}</ul>
        <ul>{props.name}</ul>
        <ul className="burgersCont">
          <ol>
            {props.burgers.map((burgaa) => (
              <ul>{burgaa}</ul>
            ))}
          </ol>
        </ul>
        <ul>{props.entrega}</ul>
        <ul>{props.direccion}</ul>
        <ul>{props.cantidad}</ul>
      </ol>
    </div>
  );
}
