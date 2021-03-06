import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import allReducers from "../store/reducers";

// const saveToLocalStorage = (state) => {
//   try {
//     const serializedState = JSON.stringify(state);
//     localStorage.setItem("state", serializedState);
//   } catch (e) {
//     console.log(e);
//   }
// };

// const loadFromLocalStorage = () => {
//   try {
//     const serializedState = localStorage.getItem("state");
//     if (serializedState == null) return undefined;
//     return JSON.parse(serializedState);
//   } catch (e) {
//     console.log(e);
//     return undefined;
//   }
// };

// const persistedState = loadFromLocalStorage();

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  allReducers,
  // persistedState,
  // composeEnhancers(applyMiddleware(thunk))
  applyMiddleware(thunk)
);

// store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
