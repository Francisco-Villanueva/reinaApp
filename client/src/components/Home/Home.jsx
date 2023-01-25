import React from "react";
import { Testeando } from "../Testeando";
import { useEffect } from "react";
import "./Home.css";
import PedidosSide from "./pedidos-side/PedidosSide";

import ClientForm from "./pedidos-side/clienteForm/ClientForm";
import NavBar from "./NavBar";

import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import {
  cleanBurgerList,
  crearPedido,
  getHorarios,
  getMenu,
  getPedidos,
} from "../../actions";
// import PanelBurgers from "./Panel de pedidos/PanelBurgers";
import PedidosList from "../Pedidos/PedidosList";
export default function Home(props) {
  const dispatch = useDispatch();
  const datos = useSelector((s) => s.clientData);
  let burgers = useSelector((s) => s.burgerList);
  let burgersMenu = useSelector((s) => s.burgersMenu);
  const preciosPart = useSelector((s) => s.pricesList);

  useEffect(() => {
    dispatch(getMenu());
    dispatch(getHorarios());
    // dispatch(getPedidos());
  }, []);

  const test = () => {
    // const long = props.datos.length - 1

    const c = datos[datos.length - 1];

    const precioFinal = preciosPart.reduce(
      (acumulador, valorActual) => acumulador + valorActual
    );
    const pedidoFinal = {
      precio: precioFinal,
      nombre: c.name,
      entrega: c.entrega,
      burgers: burgers,
      pago: c.pago,
      direccion: c.direccion,
      bloque: c.bloque,
    };
    dispatch(crearPedido(pedidoFinal));
    dispatch(cleanBurgerList());
    Swal.fire({
      icon: "success",
      title: `Pedido cargado! Precio: $  ${precioFinal}`,
      showConfirmButton: false,
      timer: 1000,
    });
  };
  const horarios = useSelector((s) => s.horariosList);

  // cosas para cargar como props al "PedidosList"
  let entregados = useSelector((s) => s.pedidosEntregados);
  const pedidosCargados = useSelector((s) => s.pedidosLoaded);

  useEffect(() => {
    dispatch(getPedidos());
    // dispatch(getMenu());
  }, [pedidosCargados]);
  return (
    <div className="home-container">
      <NavBar />

      <div className="body">
        <div className="main-container">
          <div className="menu-container">
            <ClientForm loadPedido={dispatch(crearPedido)} cliente={datos} horas={horarios}/>

            <button className="btn-cargarpedido" onClick={test}>
              Cargar pedido
            </button>

            <Testeando menu={burgersMenu} addBurga={props.addBurger} />
            {/* <Testeando2 menu={props.menu.blu} /> */}
          </div>
        </div>
      </div>

      <div className="home-pedidos">
        {}
        <PedidosList entrega2={entregados} p={pedidosCargados}/>
      </div>
    </div>
  );
}
