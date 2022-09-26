import axios from "axios";

export const actionTypes = {
  GET_MENU: "GET_MENU",
  GET_PEDIDOS: "GET_PEDIDOS",
  SWITCH_BOOL: "SWITCH_BOOL",
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
