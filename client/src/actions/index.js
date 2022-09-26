import axios from "axios";

export const actionTypes = {
  GET_MENU: "GET_MENU",
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
export function switchh() {
  return {
    type: actionTypes.SWITCH_BOOL,
    payload: true,
  };
}
