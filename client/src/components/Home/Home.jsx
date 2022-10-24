import React from "react";
import { Testeando } from "../Testeando";
import { useEffect } from "react";
import { bindActionCreators } from "redux";
import * as actionCreatos from "../../actions";
import { connect, useSelector } from "react-redux";
import logo from "../../images/logo.jpg";
import "./Home.css";
import PedidosSide from "./pedidos-side/PedidosSide";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Testeando2 } from "../Testeando2";
import { CardByBurger } from "./cartasPorBurger/CardByBurger";
import ClientForm from "./pedidos-side/clienteForm/ClientForm";
import NavBar from "./NavBar";

import Swal from "sweetalert2";
export function Home(props) {
  const burgers = useSelector((s) => s.burgerList);
  const preciosPart = useSelector((s) => s.pricesList);

  useEffect(() => {
    console.log("hola");
    props.getMenu();
  }, []);

  const test = () => {
    const c = props.datos[0];

    const precioFinal= preciosPart.reduce((acumulador, valorActual) => acumulador + valorActual)
    console.log('')
    const pedidoFinal = {
      precio: precioFinal,
      nombre: c.name,
      entrega: c.entrega,
      burgers: burgers,
      pago: c.pago,
      direccion: c.direccion,
    };
    props.crearPedido(pedidoFinal);
    Swal.fire({
      icon: "success",
      title: `Pedido cargado! Precio: $  ${precioFinal}`,
      showConfirmButton: false,
      timer: 1000,
    });
    // console.log(pedidoFinal);
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
