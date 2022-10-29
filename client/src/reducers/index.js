import { actionTypes } from "../actions";
const initialState = {
  count: 0,
  menuLoaded: [],
  pedidosLoaded: [],
  burgerList: [],
  pricesList: [],
  clientData: [],
  bloque1:[],
  bloque2:[],
  bloque3:[],
  bloque4:[],
  bloque5:[],
  bloque6:[],
  bloque7:[],
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
    case actionTypes.CLEAN_BURGER_LIST:
      return {
        ...state,
        burgerList: [],
        pricesList: [],
      };

    default:
      return state;
  }
};

export default rootReducer;
