import axios from "axios";
import * as actions from "./actionTypes";
import tokenConfig from "../../shared/tokenConfig";

export const storeCart = (cart) => {
  return {
    type: actions.STORE_CART,
    payload: cart,
  };
};

export const addFruit = (userId, fruitId) => (dispatch, getState) => {
  return new Promise(function (resolve, reject) {
    axios
      .post(`/api/users/${userId}/cart`, { fruitId }, tokenConfig(getState))
      .then((res) => {
        dispatch(addFruitSuccess(fruitId));
        resolve();
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const addFruitSuccess = (id) => {
  return {
    type: actions.ADD_FRUIT_SUCCESS,
    payload: id,
  };
};

export const removeFruit = (userId, fruitId) => (dispatch, getState) => {
  return new Promise(function (resolve, reject) {
    axios
      .delete(`/api/users/${userId}/cart/${fruitId}`, tokenConfig(getState))
      .then((res) => {
        dispatch(removeFruitSuccess(fruitId));
        resolve();
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const removeFruitSuccess = (id) => {
  return {
    type: actions.REMOVE_FRUIT_SUCCESS,
    payload: id,
  };
};

export const addFruitAmt = (userId, fruitId) => (dispatch, getState) => {
  return new Promise(function (resolve, reject) {
    axios
      .patch(
        `/api/users/${userId}/cart/${fruitId}`,
        { type: "ADD" },
        tokenConfig(getState)
      )
      .then((res) => {
        dispatch(addFruitAmtSuccess(fruitId));
        resolve();
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const addFruitAmtSuccess = (id) => {
  return {
    type: actions.ADD_FRUIT_AMT_SUCCESS,
    payload: id,
  };
};

export const removeFruitAmt = (userId, fruitId) => (dispatch, getState) => {
  return new Promise(function (resolve, reject) {
    axios
      .patch(
        `/api/users/${userId}/cart/${fruitId}`,
        { type: "REMOVE" },
        tokenConfig(getState)
      )
      .then((res) => {
        dispatch(removeFruitAmtSuccess(fruitId));
        resolve();
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const removeFruitAmtSuccess = (id) => {
  return {
    type: actions.REMOVE_FRUIT_AMT_SUCCESS,
    payload: id,
  };
};

export const setHoverCartItemId = (id) => {
  return {
    type: actions.SET_HOVER_CART_ITEM_ID,
    payload: id,
  };
};

export const clearCart = () => {
  return {
    type: actions.CLEAR_CART,
  };
};
