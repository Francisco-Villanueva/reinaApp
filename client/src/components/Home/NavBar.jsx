import React from "react";
import logo from "../../images/logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { getPedidos,  } from "../../actions";
export default function NavBar() {
  let pedidos = useSelector(s=>s.pedidosLoaded)
  const dispatch = useDispatch()
  let pedidosCant= pedidos.map(p=>p.cantidad)
  let cantidaTotal= useSelector(p=>p.count)
  
  useEffect(()=>{
      dispatch(getPedidos())
  },[])
  return (
    <div>
      <div className="navbar">
        <div className="nav-izq">
          <Link to={"/home"}>
            <img className="bugerPNG" src={logo} alt="logoReinA" />
          </Link>
        </div>
        <div className="nav-mid">
         <h3>Burger vendidas: {cantidaTotal}</h3>
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
    </div>
  );
}
