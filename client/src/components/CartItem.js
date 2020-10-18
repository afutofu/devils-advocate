import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { ExitBtn, Counter } from "./index";
import numWithCommas from "../shared/numWithCommas";
import { removeFruit, addFruitAmt, removeFruitAmt } from "../store/actions";

const CartItem = styled.div`
  position: relative;
  width: 100%;
  min-width: 500px;
  max-width: 800px;
  height: 175px;
  margin-bottom: 50px !important;
  border-radius: 5px;
  padding: 5px;
  box-sizing: border-box;
  background: #fefefe;
  display: flex;
  align-self: flex-end;

  @media (max-width: 600px) {
    min-width: 100px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: unset;
  }
`;

const Image = styled.img.attrs((props) => ({
  src: props.src || "",
}))`
  width: 200px;
  height: 100%;
  min-height: 100px;
  border-radius: 5px;
  background: #f23f3f;
  box-sizing: border-box;

  @media (max-width: 600px) {
    width: 100%;
    height: 200px;
  }
`;

const Info = styled.div`
  flex-grow: 1;
  padding: 10px;
  padding-left: 20px;
  padding-top: 20px;
  padding-right: 40px;
  box-sizing: border-box;
  * {
    margin: 0;
  }

  @media (max-width: 600px) {
    font-size: 18px;
    align-self: flex-start;
  }
`;

const Name = styled.h1`
  width: 100%;
  font-weight: 700;
  font-size: 1.7rem;
  text-transform: uppercase;
  margin-right: 20px;
  margin-bottom: 10px;
  box-sizing: border-box;
  cursor: pointer;

  @media (max-width: 600px) {
    font-size: 18px;
  }

  a {
    color: black !important;
  }
`;

const Price = styled.h2`
  width: 100%;
  font-weight: 500;
  font-size: 1.3rem;
  box-sizing: border-box;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

const ExitPos = styled.div`
  margin: 0;
  position: absolute;
  top: 10px;
  right: 10px;
  box-sizing: border-box;

  @media (max-width: 600px) {
    top: 213px;
  }
`;

const CounterPos = styled.div`
  margin: 0;
  position: absolute;
  bottom: 5px;
  right: 20px;
  box-sizing: border-box;

  @media (max-width: 600px) {
    font-size: 18px;
    align-self: flex-start;
    bottom: 0;
  }
`;

const cartItem = (props) => {
  const { user, fruit } = props;
  let count = 1;

  props.cart.forEach((fruitInArr) => {
    if (fruitInArr.id === fruit._id) {
      count = fruitInArr.amt;
    }
  });

  return (
    <CartItem
      onMouseEnter={() => props.setHoverCartItemId(fruit._id)}
      onMouseLeave={() => props.setHoverCartItemId(null)}
    >
      <Image src={fruit.imagelink} />
      <Info>
        <Name>
          <Link to={`/fruits/${fruit.id}`}>{fruit.name}</Link>
        </Name>
        <Price>{"$" + numWithCommas(fruit.price)}</Price>
      </Info>
      <ExitPos>
        <ExitBtn onClick={() => props.removeFruit(user._id, fruit._id)} />
      </ExitPos>
      <CounterPos>
        <Counter
          count={count}
          addFruitAmt={() => props.addFruitAmt(user._id, fruit._id)}
          removeFruitAmt={() => props.removeFruitAmt(user._id, fruit._id)}
        />
      </CounterPos>
    </CartItem>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart,
    user: state.auth.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFruit: (userId, fruitId) => dispatch(removeFruit(userId, fruitId)),
    addFruitAmt: (userId, friendId) => dispatch(addFruitAmt(userId, friendId)),
    removeFruitAmt: (userId, friendId) =>
      dispatch(removeFruitAmt(userId, friendId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(cartItem);
