import { actionTypes } from "../actions";
const initialState = {
  count: 0,
  menuLoaded: [],
  pedidosLoaded: [],
  burgerList: [], //se usa para hacer el listado de burgers de cada pedido
  pricesList: [],
  clientData: [],
  pedidosEntregados: [],

  load: false,
  burgersMenu: [],
  burgerData: [],
  horariosList: [],
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_MENU:
      return {
        ...state,
        burgersMenu: action.payload,
      };

    case actionTypes.GET_PEDIDOS:
      return {
        ...state,
        pedidosLoaded: action.payload,
        count: action.payloadCount,
      };
    case actionTypes.CLEAN_BURGER_LIST:
      return {
        ...state,
        burgerList: [],
        pricesList: [],
      };

    case actionTypes.DELETE_PEDIDO:
      return {
        ...state,
        pedidosLoaded: initialState.pedidosLoaded.filter(
          (m) => m.id != action.payload
        ),
      };
    case actionTypes.DELETE_BURGER:
      return {
        ...state,
        pedidosLoaded: initialState.burgersMenu.filter(
          (m) => m.id != action.payload
        ),
      };

    case actionTypes.ENTREGAR_PEDIDO:
      return {
        ...state,
        pedidosEntregados: action.payload,
      };

    case actionTypes.GET_BURGERS:
      return {
        ...state,
        burgersMenu: action.payload,
      };
    case actionTypes.GET_BURGER_DATA:
      return {
        ...state,
        burgerData: action.payload,
      };
    case actionTypes.CREATE_BURGER:
      state.burgersMenu.push(action.payload);
      return {
        ...state,
      };
    case actionTypes.GET_HORARIOS:
      return {
        ...state,
        horariosList: action.payload,
      };

    default:
      return state;
  }
};

export default rootReducer;
