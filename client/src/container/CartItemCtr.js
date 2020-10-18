import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { CartItem } from "../components";
import { setHoverCartItemId } from "../store/actions";

const CartItemCtrComp = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0;
  box-sizing: border-box;
`;

const CartItemCtr = (props) => {
  const findFruit = (id) => {
    let fruit = null;

    for (var fruitType in props.fruits) {
      if (fruit != null) break;

      for (let i = 0; i < props.fruits[fruitType].length; i++) {
        const fruitInArr = props.fruits[fruitType][i];

        if (fruitInArr._id === id) {
          fruit = fruitInArr;
          break;
        }
      }
    }

    return fruit != null ? fruit : null;
  };

  const renderCartItems = () => {
    let cartItems = [];
    props.cart.forEach((fruitInArr) => {
      const fruit = findFruit(fruitInArr.id);
      if (fruit != null) {
        cartItems.unshift(
          <CartItem
            key={fruit._id}
            fruit={fruit}
            setHoverCartItemId={(id) => props.setHoverCartItemId(id)}
          />
        );
      }
    });
    return cartItems;
  };

  return <CartItemCtrComp>{renderCartItems()}</CartItemCtrComp>;
};

const mapStateToProps = (state) => {
  return {
    fruits: state.fruits.fruits,
    cart: state.cart.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setHoverCartItemId: (id) => dispatch(setHoverCartItemId(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItemCtr);
