import { actionTypes } from "../actions";
const initialState = {
  count: 0,
  menuLoaded: [],
  pedidosLoaded: [],
  burgerList: [],
  pricesList: [],
  clientData: [],
  pedidosEntregados: [],
  bloque1: [],
  bloque2: [],
  bloque3: [],
  bloque4: [],
  bloque5: [],
  bloque6: [],
  bloque7: [],
  load: false,
  burgersMenu: [],
  burgerData: [],
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

    default:
      return state;
  }
};

export default rootReducer;
