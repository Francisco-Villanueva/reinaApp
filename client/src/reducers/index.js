import { actionTypes } from "../actions";
const initialState = {
  count: 0,
  menuLoaded: [],
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

    case actionTypes.SWITCH_BOOL:
      return {
        ...state,
        load: action.payload,
      };

    default:
      return state;
  }
};

export default rootReducer;
