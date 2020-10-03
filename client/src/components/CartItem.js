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
`;

const Image = styled.img.attrs(props => ({
  src: props.src || ""
}))`
  min-width: 200px;
  width: 200px;
  height: 100%;
  border-radius: 5px;
  background: #f23f3f;
  box-sizing: border-box;
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

  a {
    color: black !important;
  }
`;

const Price = styled.h2`
  width: 100%;
  font-weight: 500;
  font-size: 1.3rem;
  box-sizing: border-box;
`;

const ExitPos = styled.div`
  margin: 0;
  position: absolute;
  top: 10px;
  right: 10px;
  box-sizing: border-box;
`;

const CounterPos = styled.div`
  margin: 0;
  position: absolute;
  bottom: 5px;
  right: 20px;
  box-sizing: border-box;
`;

const cartItem = props => {
  const fruit = props.fruit;
  let count = 1;

  props.cart.forEach(fruitInArr => {
    if (fruitInArr.id == fruit.id) {
      count = fruitInArr.amt;
    }
  });

  return (
    <CartItem
      onMouseEnter={() => props.setHoverCartItemId(fruit.id)}
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
        <ExitBtn onClick={() => props.removeFruit(fruit.id)} />
      </ExitPos>
      <CounterPos>
        <Counter
          count={count}
          addFruitAmt={() => props.addFruitAmt(fruit.id)}
          removeFruitAmt={() => props.removeFruitAmt(fruit.id)}
        />
      </CounterPos>
    </CartItem>
  );
};

const mapStateToProps = state => {
  return {
    cart: state.cart.cart
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeFruit: id => dispatch(removeFruit(id)),
    addFruitAmt: id => dispatch(addFruitAmt(id)),
    removeFruitAmt: id => dispatch(removeFruitAmt(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(cartItem);
