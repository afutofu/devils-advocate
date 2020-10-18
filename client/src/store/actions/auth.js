import * as actions from "./actionTypes";
import axios from "axios";
import tokenConfig from "../../shared/tokenConfig";
import { storeCart } from "./cart";

// Check token & fetch user
export const fetchUser = () => (dispatch, getState) => {
  return new Promise(function (resolve, reject) {
    dispatch(fetchUserBegin());
    axios
      .get("/api/auth/user", tokenConfig(getState))
      .then((res) => {
        const user = res.data;
        dispatch(fetchUserSuccess(user));
        if (user.cart) {
          dispatch(storeCart(user.cart));
        }
        resolve();
      })
      .catch((err) => {
        if (err.response) {
          dispatch(fetchUserFail(err.response.data.msg));
          console.log(err.response.data.msg);
        } else {
          console.log(err);
          reject();
        }
      });
  });
};

const fetchUserBegin = () => {
  return {
    type: actions.FETCH_USER_BEGIN,
  };
};

const fetchUserSuccess = (user) => {
  return {
    type: actions.FETCH_USER_SUCCESS,
    payload: { user },
  };
};

const fetchUserFail = (msg) => {
  return {
    type: actions.FETCH_USER_FAIL,
    payload: { id: "FETCH_USER_ERROR", msg: msg },
  };
};

export const login = (email, password) => {
  return {
    type: actions.LOGIN,
    payload: {
      email,
      password,
    },
  };
};

export const attemptLogin = (email, password) => (dispatch) => {
  return new Promise(function (resolve, reject) {
    dispatch(attemptLoginBegin());
    return axios
      .post("/api/auth", { email, password })
      .then((res) => {
        const { user } = res.data;
        dispatch(attemptLoginSuccess(res.data));
        if (user.cart) {
          dispatch(storeCart(user.cart));
        }
        resolve();
      })
      .catch((error) => {
        if (error.response) {
          dispatch(attemptLoginFail(error, error.response.status));
          reject(error.response.status);
        } else {
          console.log(error);
        }
      });
  });
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
      .post("/api/users", {
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
