import * as actions from "../actions/actionTypes";

// const initialState = {
//   user: {},
//   isLogged: false,
//   loading: false,
//   error: null,
//   errorStatus: null,
// };

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  user: null,
  error: null,
  isLoading: false,
};

const logout = (state) => {
  return { ...state, user: {}, isLogged: false };
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ATTEMPT_REGISTER_BEGIN:
    case actions.ATTEMPT_LOGIN_BEGIN:
      return { ...state, ...initialState, isLoading: true };
    case actions.ATTEMPT_REGISTER_SUCCESS:
    case actions.ATTEMPT_LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.data.token);
      return {
        ...state,
        ...action.payload.data,
        isAuthenticated: true,
        error: null,
        isLoading: false,
      };
    case actions.ATTEMPT_REGISTER_FAIL:
    case actions.ATTEMPT_LOGIN_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        error: action.payload.error,
        errorStatus: action.payload.status,
        isLoading: false,
      };
    case actions.LOGOUT:
      localStorage.removeItem("token");
      return { ...state, ...initialState };
    default:
      return state;
  }
};

export default authReducer;
