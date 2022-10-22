import React from "react";
import { Testeando } from "../Testeando";
import { useEffect } from "react";
import { bindActionCreators } from "redux";
import * as actionCreatos from "../../actions";
import { connect } from "react-redux";
import logo from "../../images/logo.jpg";
import "./Home.css";
import PedidosSide from "./pedidos-side/PedidosSide";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram, faWhatsapp} from '@fortawesome/free-brands-svg-icons'
export function Home(props) {
  useEffect(() => {
    props.getMenu();
  }, []);
  return (
    <div className="home-container">
      <div className="navbar">
        <div className="nav-izq">
          <img src={logo} alt="logoReinA" />
          <h1>Reina Burguesa</h1>
        </div>
        <div className="nav-der">
          <p><FontAwesomeIcon icon= {faInstagram}  /> reina.buguesa</p>
          <p><FontAwesomeIcon icon={faWhatsapp}/> 291 503-8472</p>
        </div>
      </div>

      <div className="body">
        <div className="main-container">
          <div className="menu-container">
            <Testeando menu={props.menu} addBurga={props.addBurger} />
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
