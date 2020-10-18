import * as actions from "../actions/actionTypes";

// let initialState = { 0: 1, 1: 1 };
// let initialState = [
//   { id: 1, amt: 1 },
//   { id: 0, amt: 1 }
// ];

let initialState = { cart: [], hoverId: null };

const storeCart = (state, cart) => {
  return {
    ...state,
    cart: [...cart],
  };
};

const addFruit = (state, fruitIdToAdd) => {
  return { ...state, cart: [...state.cart, { id: fruitIdToAdd, amt: 1 }] };
};

const removeFruit = (state, fruitIdToRemove) => {
  return {
    ...state,
    cart: state.cart.filter((fruit) => fruit.id !== fruitIdToRemove),
  };
};

const addFruitAmt = (state, fruitId) => {
  return {
    ...state,
    cart: state.cart.map((fruit) => {
      if (fruit.id === fruitId) {
        fruit.amt += 1;
      }
      return fruit;
    }),
  };
};

const removeFruitAmt = (state, fruitId) => {
  return {
    ...state,
    cart: state.cart.map((fruit) => {
      if (fruit.id === fruitId) {
        if (fruit.amt <= 1) return fruit;
        fruit.amt -= 1;
      }
      return fruit;
    }),
  };
};

const setHoverCartItemId = (state, cartItemId) => {
  return { ...state, hoverId: cartItemId };
};

const clearCart = (state) => {
  return { ...state, ...initialState };
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.STORE_CART:
      return storeCart(state, action.payload);
    case actions.ADD_FRUIT_SUCCESS:
      return addFruit(state, action.payload);
    case actions.REMOVE_FRUIT_SUCCESS:
      return removeFruit(state, action.payload);
    case actions.ADD_FRUIT_AMT_SUCCESS:
      return addFruitAmt(state, action.payload);
    case actions.REMOVE_FRUIT_AMT_SUCCESS:
      return removeFruitAmt(state, action.payload);
    case actions.SET_HOVER_CART_ITEM_ID:
      return setHoverCartItemId(state, action.payload);
    case actions.CLEAR_CART:
      return clearCart(state);
    default:
      return state;
  }
};

export default cartReducer;
