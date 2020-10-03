import * as actions from "../actions/actionTypes";

const initialState = {
  user: {},
  isLogged: false,
  loading: false,
  error: null,
  errorStatus: null
};

const logout = state => {
  return { ...state, user: {}, isLogged: false };
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ATTEMPT_REGISTER_BEGIN:
      return { ...state, ...initialState, loading: true };
    case actions.ATTEMPT_REGISTER_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        isLogged: true,
        loading: false
      };
    case actions.ATTEMPT_REGISTER_FAIL:
      return { ...state, error: action.payload.error, loading: false };
    case actions.ATTEMPT_LOGIN_BEGIN:
      return { ...state, ...initialState, loading: true };
    case actions.ATTEMPT_LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        isLogged: true,
        loading: false
      };
    case actions.ATTEMPT_LOGIN_FAIL:
      return {
        ...state,
        error: action.payload.error,
        errorStatus: action.payload.status,
        loading: false
      };
    case actions.LOGOUT:
      return { ...state, ...initialState };
    default:
      return state;
  }
};

export default authReducer;
