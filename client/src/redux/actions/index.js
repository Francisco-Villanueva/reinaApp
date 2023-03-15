import axios from "axios";

export const actionTypes = {
  GET_MENU: "GET_MENU",
  GET_PEDIDOS: "GET_PEDIDOS",
  SWITCH_BOOL: "SWITCH_BOOL",
  ADD_BURGER: "ADD_BURGER",
  CLEAN_BURGER_LIST: "CLEAN_BURGER_LIST",
  crearPedido: "crearPedido",
  SET_COUNT: "SET_COUNT",
  DELETE_PEDIDO: "DELETE_PEDIDO",
  ENTREGAR_PEDIDO: "ENTREGAR_PEDIDO",
  GET_BURGERS: "GET_BURGERS",
  GET_BURGER_DATA: "GET_BURGER_DATA",
  EDIT_BURGER: "EDIT_BURGER",
  CREATE_BURGER: "CREATE_BURGER",
  GET_HORARIOS: "GET_HORARIOS",
  DELETE_BURGER: "DELETE_BURGER",
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

    // console.log("entramos al getPedidos(), retorna:  ", json.data);
    let countAux = [];
    json.data.forEach((e) => {
      countAux.push(e.cantidad);
    });

    let contador = countAux.reduce((a, b) => a + b, 0);

    // console.log("entramos al getPedidos() CONTADOR, retorna:  ", contador);
    return dispatch({
      type: actionTypes.GET_PEDIDOS,
      payload: json.data,
      payloadCount: contador,
    });
  };
}

export function getBurgers() {
  return async function (dispatch) {
    const json = await axios.get("http://localhost:4000/burger");

    console.log("GETBURGERS()=> ", json.data);
    return dispatch({
      type: actionTypes.GET_BURGERS,
      payload: json.data,
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

export function deletePedido(id) {
  return async function () {
    try {
      await axios.delete(`http://localhost:4000/pedido/${id}`);

      // console.log('ENTRO AL DELETEPEDIDO()')
      return {
        type: actionTypes.DELETE_PEDIDO,
        payload: id,
      };
    } catch (error) {}
  };
}
export function deleteBurger(id) {
  return async function () {
    try {
      await axios.delete(`http://localhost:4000/burger/${id}`);

      console.log("ENTRO AL DELETEBUIRGER()");
      return {
        type: actionTypes.DELETE_BURGER,
        payload: id,
      };
    } catch (error) {}
  };
}

export function entregarPedido(id) {
  return async function () {
    try {
      const req = await axios.get(`http://localhost:4000/pedido/${id}`);

      console.log("ACTION ENTREGAR", req.data);
      return {
        type: actionTypes.ENTREGAR_PEDIDO,
        payload: req.data,
      };
    } catch (error) {
      throw new Error(error);
    }
  };
}
export function getBurgerInfo(id) {
  return async function (dispatch) {
    try {
      const json = await axios.get(`http://localhost:4000/burger/${id}`);
      console.log("ENTRO AL getBurgerInfo(): ", json.data);

      return dispatch({
        type: actionTypes.GET_BURGER_DATA,
        payload: json.data,
      });
    } catch (error) {
      throw new Error(error);
    }
  };
}

export function editBurger(id, payload) {
  return async function () {
    try {
      console.log("ENTRO AL editBurger(): ", id + "  +  ", payload);
      const edited = await axios.put(
        `http://localhost:4000/burger/${id}`,
        payload
      );

      return edited;
      // return dispatch({
      //   type: actionTypes.EDIT_BURGER,
      //   payload: edited
      // });
    } catch (error) {
      throw new Error(error);
    }
  };
}

export function createBurger(payload) {
  return async function (dispatch) {
    try {
      console.log("ENTRO AL CREATEBURGER() => ", payload);
      const create = await axios.post(`http://localhost:4000/burger`, payload);

      return dispatch({
        type: actionTypes.CREATE_BURGER,
        payload: create,
      });
    } catch (error) {
      throw new Error(error);
    }
  };
}

export function getHorarios() {
  return async function (dispatch) {
    try {
      const json = await axios.get(`http://localhost:4000/horarios`);
      console.log("entramos al getHoraios(), retorna:  ", json.data);

      return dispatch({
        type: actionTypes.GET_HORARIOS,
        payload: json.data,
      });
    } catch (error) {
      throw new Error(error);
    }
  };
}
