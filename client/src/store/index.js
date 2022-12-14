import rootReducer from "../reducers";
import thunk from "redux-thunk";

import { createStore, applyMiddleware } from "redux";

const store = createStore(
  rootReducer,
  window._REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

export default store;
