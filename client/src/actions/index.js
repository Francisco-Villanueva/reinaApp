import axios from "axios";

export const actionTypes = {
  GET_MENU: "GET_MENU",
  GET_PEDIDOS: "GET_PEDIDOS",
  SWITCH_BOOL: "SWITCH_BOOL",
  ADD_BURGER: "ADD_BURGER",
  CLEAN_BURGER_LIST: "CLEAN_BURGER_LIST",
  crearPedido: "crearPedido",
};

export function getMenu() {
  return async function (dispatch) {
    const json = await axios.get("http://localhost:4000/menu");

    console.log("entramos al getMenu(), retorna:  ", json.data);

    return dispatch({
      type: actionTypes.GET_MENU,
      payload: json.data,
    });
  };
}
export function getPedidos() {
  return async function (dispatch) {
    const json = await axios.get("http://localhost:4000/pedido");

    console.log("entramos al getPedidos(), retorna:  ", json.data);
    return dispatch({
      type: actionTypes.GET_PEDIDOS,
      payload: json.data,
    });
  };
}
export function addBurger(burg) {
  console.log("ENTRAMOS AL ADD BURGER()");
  return {
    type: actionTypes.ADD_BURGER,
    payload: burg,
  };
}
export function cleanBurgerList() {
  console.log("ENTRAMOS AL CLEAN BURGER LIST()");
  return {
    type: actionTypes.CLEAN_BURGER_LIST,
  };
}

export const crearPedido = (payload) => {
  return async function () {
    try {
      console.log("ENTRO AL POST: ");
      const created = await axios.post("http://localhost:4000/pedido", payload);
      console.log("REALIZADO EL POST");
      return created;
    } catch (error) {
      throw new Error(error);
    }
  };
};
