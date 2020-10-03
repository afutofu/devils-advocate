import * as actions from "../actions/actionTypes";

const fruitTypeReducer = (state = "LOGIA", action) => {
  switch (action.type) {
    case actions.SWITCH_LOGIA:
      return "LOGIA";
    case actions.SWITCH_PARAMECIA:
      return "PARAMECIA";
    case actions.SWITCH_ZOAN:
      return "ZOAN";
    default:
      return state;
  }
};

export default fruitTypeReducer;
