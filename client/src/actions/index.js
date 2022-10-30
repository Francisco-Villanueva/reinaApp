import axios from "axios";

export const actionTypes = {
  GET_MENU: "GET_MENU",
  GET_PEDIDOS: "GET_PEDIDOS",
  SWITCH_BOOL: "SWITCH_BOOL",
  ADD_BURGER: "ADD_BURGER",
  CLEAN_BURGER_LIST: "CLEAN_BURGER_LIST",
  crearPedido: "crearPedido",
  SET_COUNT:"SET_COUNT",
  DELETE_PEDIDO: "DELETE_PEDIDO",
  ENTREGAR_PEDIDO: "ENTREGAR_PEDIDO"
};

export function getMenu() {
  return async function (dispatch) {
    const json = await axios.get("http://localhost:4000/menu");

    // console.log("entramos al getMenu(), retorna:  ", json.data);

    return dispatch({
      type: actionTypes.GET_MENU,
      payload: json.data,
    });
  };
}
export function getPedidos() {
  return async function (dispatch) {
    const json = await axios.get("http://localhost:4000/pedido");

    // console.log("entramos al getPedidos(), retorna:  ", json.data);
    let countAux=[];
     json.data.forEach(e => {countAux.push(e.cantidad)
    });

    let contador = countAux.reduce((a,b)=>a+b,0)

    // console.log("entramos al getPedidos() CONTADOR, retorna:  ", contador);
    return dispatch({
      type: actionTypes.GET_PEDIDOS,
      payload: json.data,
      payloadCount: contador,
    });
  };
}
export function addBurger(burg) {
  // console.log("ENTRAMOS AL ADD BURGER()");
  return {
    type: actionTypes.ADD_BURGER,
    payload: burg,
  };
}
export function cleanBurgerList() {
  // console.log("ENTRAMOS AL CLEAN BURGER LIST()");
  return {
    type: actionTypes.CLEAN_BURGER_LIST,
  };
}



export const crearPedido = (payload) => {
  return async function () {
    try {
      // console.log("ENTRO AL POST: ");
      const created = await axios.post("http://localhost:4000/pedido", payload);
      // console.log("REALIZADO EL POST");
      return created;
    } catch (error) {
      throw new Error(error);
    }
  };
};

export function deletePedido (id){
  return async function(){
    try {
     await axios.delete(`http://localhost:4000/pedido/${id}`)

    // console.log('ENTRO AL DELETEPEDIDO()')
    return {
      type: actionTypes.DELETE_PEDIDO,
      payload: id,
    };
    } catch (error) {
      throw new Error(error);
    }
  }
}

export function entregarPedido(id){
  return async function(){
    try {
      const req = await axios.get(`http://localhost:4000/pedido/${id}`)

      console.log('ACTION ENTREGAR', req.data)
      return {
        type: actionTypes.ENTREGAR_PEDIDO,
        payload: req.data
      }
    
    } catch (error) {
      throw new Error(error);
    }
}
}