import React, { useEffect } from "react";
import "./PedidosSide.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../../../actions";
import { bindActionCreators } from "redux";

export function PedidosSide(props) {
  // useEffect(() => {
  //   props.getPedidos();
<<<<<<< HEAD
  // }, [props.pedidos1]);
=======
  // }, []);
>>>>>>> 7bb2d2a4bd68a0a515e6ada06d4efdb5ae705f1b
  return (
    <div className="list-container">
      <Link className="Link-styles" to={"/pedidos"}>
        <h1>PEDIDOS</h1>
      </Link>
      <div className="lista">
        {props.pedidos1.map((p) => (
          <p key={p.id}>
            <b style={{ textTransform: "capitalize" }}>{p.nombre}</b> -{" "}
            {p.entrega}
          </p>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  pedidos1: state.pedidosLoaded,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(PedidosSide);
