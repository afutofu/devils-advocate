import { combineReducers } from "redux";

import navItemReducer from "./navItem";
import fruitTypeReducer from "./fruitType";
import fruitsReducer from "./fruits";
import cartReducer from "./cart";
import authReducer from "./auth";

const allReducers = combineReducers({
  navItem: navItemReducer,
  fruitType: fruitTypeReducer,
  fruits: fruitsReducer,
  cart: cartReducer,
  auth: authReducer
});

export default allReducers;
