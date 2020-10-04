import * as actions from "./actionTypes";
import axios from "axios";

export const login = (email, password) => {
  return {
    type: actions.LOGIN,
    payload: {
      email,
      password,
    },
  };
};

export const attemptLogin = (email, password) => {
  return (dispatch) => {
    dispatch(attemptLoginBegin());
    return axios
      .post("http://localhost:5000/api/auth", { email, password })
      .then((res) => {
        dispatch(attemptLoginSuccess(res.data));
        return;
      })
      .catch((error) => {
        dispatch(attemptLoginFail(error, error.response.status));
        throw error.response.status;
      });
  };
};

const attemptLoginBegin = () => {
  return {
    type: actions.ATTEMPT_LOGIN_BEGIN,
  };
};

const attemptLoginSuccess = (data) => {
  return {
    type: actions.ATTEMPT_LOGIN_SUCCESS,
    payload: { data },
  };
};

const attemptLoginFail = (error, status) => {
  return {
    type: actions.ATTEMPT_LOGIN_FAIL,
    payload: { error, status },
  };
};

export const logout = () => {
  return {
    type: actions.LOGOUT,
  };
};

export const attemptRegister = (username, email, password) => {
  return (dispatch) => {
    dispatch(attemptRegisterBegin());
    return axios
      .post("http://localhost:5000/api/users", {
        username: username,
        email: email,
        password: password,
      })
      .then((res) => {
        dispatch(attemptRegisterSuccess(res.data));
        return;
      })
      .catch((error) => {
        dispatch(attemptRegisterFail(error.response.data.msg));
        throw error.response.status;
      });
  };
};

const attemptRegisterBegin = () => {
  return {
    type: actions.ATTEMPT_REGISTER_BEGIN,
  };
};

const attemptRegisterSuccess = (data) => {
  return {
    type: actions.ATTEMPT_REGISTER_SUCCESS,
    payload: { data },
  };
};

const attemptRegisterFail = (error) => {
  return {
    type: actions.ATTEMPT_REGISTER_FAIL,
    payload: { error },
  };
};
