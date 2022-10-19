import { actionTypes } from "../actions";
const initialState = {
  count: 0,
  menuLoaded: [],
  pedidosLoaded: [],
  pedidoOnProgress:[],
  statePrueba: "pedazoooooooooo",
  load: false,
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_MENU:
      return {
        ...state,
        menuLoaded: action.payload,
      };

    case actionTypes.GET_PEDIDOS:
      return {
        ...state,
        pedidosLoaded: action.payload,
      };

    default:
      return state;
  }
};

export default rootReducer;
