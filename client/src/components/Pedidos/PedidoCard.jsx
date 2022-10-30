import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePedido, entregarPedido } from "../../actions";
import "./PedidoCard.css";
export default function PedidoCard(props) {
  // let o = 1;
  const dispatch = useDispatch()
 
  const handleDelete=()=>{
    dispatch(deletePedido(props.id))
    console.log('ELIMINANDO', props.id)
  }
  const handleEntregado=()=>{
    
    console.log('ENTREGAD', props.id)
  }
  return (
    <div className="container">
      <ol >
        <ul>$ {props.precio}</ul>
        <ul>{props.name}</ul>
        <ul className="burgersCont">
          <ol>
            {props.burgers.map((burgaa) => (
              <ul key={props.id}>{burgaa}</ul>
            ))}
          </ol>
        </ul>
        <ul>{props.entrega}</ul>
        <ul>{props.direccion}</ul>
        <ul>{props.cantidad}</ul>
        <div>

        <button onClick={handleDelete}>x</button>
        <button onClick={handleEntregado}>E</button>
        </div>
      </ol>
    </div>
  );
}
