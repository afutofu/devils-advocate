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

export const addFruitSuccess = (id) => {
  return {
    type: actions.ADD_FRUIT_SUCCESS,
    payload: id,
  };
};

export const removeFruit = (id) => {
  return {
    type: actions.REMOVE_FRUIT_SUCCESS,
    payload: id,
  };
};

export const addFruitAmt = (id) => {
  return {
    type: actions.ADD_FRUIT_AMT_SUCCESS,
    payload: id,
  };
};

export const removeFruitAmt = (id) => {
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
    type: actions.CLEAR_CART_SUCCESS,
  };
};
