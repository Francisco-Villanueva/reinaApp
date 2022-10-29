import React from "react";
import { Testeando } from "../Testeando";
import { useEffect } from "react";
import { bindActionCreators } from "redux";
import * as actionCreatos from "../../actions";
import { connect, useSelector } from "react-redux";
import "./Home.css";
import PedidosSide from "./pedidos-side/PedidosSide";

import ClientForm from "./pedidos-side/clienteForm/ClientForm";
import NavBar from "./NavBar";

import Swal from "sweetalert2";
export function Home(props) {
  let burgers = useSelector((s) => s.burgerList);
  const preciosPart = useSelector((s) => s.pricesList);

  useEffect(() => {
    console.log("HOLA SOY HOME.JSX");
    props.getMenu();
    props.getPedidos()
    console.log("HOLA TERMINO HOME.JSX");

  }, []);

  const test = () => {
    // const long = props.datos.length - 1
    const c = props.datos[props.datos.length - 1];

    const precioFinal = preciosPart.reduce(
      (acumulador, valorActual) => acumulador + valorActual
    );
    console.log("PUREBA DE C", c);
    const pedidoFinal = {
      precio: precioFinal,
      nombre: c.name,
      entrega: c.entrega,
      burgers: burgers,
      pago: c.pago,
      direccion: c.direccion,
      bloque: c.bloque
    }
    props.crearPedido(pedidoFinal);
    props.cleanBurgerList()
    Swal.fire({
      icon: "success",
      title: `Pedido cargado! Precio: $  ${precioFinal}`,
      showConfirmButton: false,
      timer: 1000,
    });

    
  };
  return (
    <div className="home-container">
      <NavBar />

      <div className="body">
        <div className="main-container">
          <div className="menu-container">
            <ClientForm loadPedido={props.crearPedido} cliente={props.datos} />

            <button className="btn-cargarpedido" onClick={test}>
              Cargar pedido
            </button>

            <Testeando menu={props.menu} addBurga={props.addBurger} />
            {/* <Testeando2 menu={props.menu.blu} /> */}
          </div>
          <div className="pedido-container">
            <PedidosSide />
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  menu: state.menuLoaded,
  datos: state.clientData,
  pedido: state.burgerList,
});
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreatos, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
