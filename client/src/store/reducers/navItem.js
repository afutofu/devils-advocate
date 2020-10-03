import * as actions from "../actions/actionTypes";

const navItemReducer = (state = "", action) => {
  switch (action.type) {
    case actions.SWITCH_LOGO:
      return "LOGO";
    case actions.SWITCH_FRUITS:
      return "FRUITS";
    case actions.SWITCH_CART:
      return "CART";
    case actions.SWITCH_LOGIN:
      return "LOGIN";
    case actions.SWITCH_REGISTER:
      return "REGISTER";
    default:
      return state;
  }
};

export default navItemReducer;
