import React from "react";
import { Testeando } from "../Testeando";
import { useEffect } from "react";
import { bindActionCreators } from "redux";
import * as actionCreatos from "../../actions";
import { connect } from "react-redux";
import logo from "../../images/logo.jpg";
import "./Home.css";
import PedidosSide from "./pedidos-side/PedidosSide";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Testeando2 } from "../Testeando2";
import { CardByBurger } from "./cartasPorBurger/CardByBurger";
export function Home(props) {
  useEffect(() => {
    console.log("hola");
    props.getMenu();
  }, []);
  return (
    <div className="home-container">
      <div className="navbar">
        <div className="nav-izq">
          {/* <h1>Reina Burguesa</h1> */}
          <img className="bugerPNG" src={logo} alt="logoReinA" />
        </div>
        <div className="nav-der">
          <p>
            <FontAwesomeIcon className="social-icon ig" icon={faInstagram} />{" "}
            reina.burguesa
          </p>
          <p>
            <FontAwesomeIcon className="social-icon wp" icon={faWhatsapp} /> 291
            503-8472
          </p>
        </div>
      </div>

      <div className="body">
        <div className="main-container">
          <div className="menu-container">
            {/* <Testeando2 menu={props.menu.lif} /> */}
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
});
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreatos, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
