import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import _ from "lodash";

import numWithCommas from "../shared/numWithCommas";

const CheckoutCardComp = styled.div`
  width: 100%;
  min-width: 320px;
  max-width: 400px;
  height: 100%;
  padding: 20px;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 5px;
  background: #fefefe;
  margin: 0;
  box-sizing: border-box;

  @media (max-width: 600px) {
    min-width: 100px;
  }
`;

const Header = styled.h3`
  width: 100%;
  font-size: 1.2rem;
  margin: 0;
  margin-bottom: 10px;
  text-transform: uppercase;
`;

const Hr = styled.hr`
  align-self: center;
  border: none;
  width: 100%;
  border-top: 2px solid rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
  box-sizing: border-box;
`;

const Button = styled.button`
  width: 100%;
  outline: none;
  text-transform: uppercase;
  background: #f50000;
  font-weight: 600;
  font-size: 0.9rem;
  padding: 7px 15px;
  border: 3px solid #f50000;
  cursor: pointer;
  border-radius: 5px;
  box-sizing: border-box;
  color: white;
  letter-spacing: 2px;
  align-self: center;
  margin-top: 20px;

  transition: 0.3s;
  :hover {
    transition: 0.2s;
    background: #c90000;
    border: 3px solid #c90000;
  }
`;

const ShoppingSummary = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const ItemsCalc = styled.div`
  width: 100%;
`;

const ItemCalc = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 10px;
  font-weight: ${(props) => (props.hover ? "600" : "400")};
  p {
    margin: 0;
  }
`;

const Calc = styled.p``;

const Result = styled.p``;

// const TotalCtr = styled.div``;

const Total = styled.p`
  border-top: 2px solid rgba(0, 0, 0, 0.2);
  padding-top: 10px;
  align-self: flex-end;
  margin: 0;
`;
const CheckoutCard = (props) => {
  const [fruitsInitialized, setFruitsInitialized] = useState(false);

  let cartPrices = [];

  useEffect(() => {
    if (!_.isEmpty(props.fruits)) {
      setFruitsInitialized(true);
    }
  }, [props.fruits]);

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

  const renderCartPrices = () => {
    props.cart.forEach((fruitInArr, i) => {
      const fruit = findFruit(fruitInArr.id);
      const fruitPrice = fruit.price;
      const fruitAmt = fruitInArr.amt;

      cartPrices.unshift(
        <ItemCalc key={i} hover={props.hoverId === fruit._id}>
          <Calc>{`$${numWithCommas(fruitPrice)} x ${fruitAmt}`}</Calc>
          <Result>{`$${numWithCommas(fruitPrice * fruitAmt)}`}</Result>
        </ItemCalc>
      );
    });

    return cartPrices;
  };

  const calcTotal = () => {
    let total = 0;
    props.cart.forEach((fruitInArr) => {
      const fruit = findFruit(fruitInArr.id);
      const fruitPrice = fruit.price;
      const fruitAmt = fruitInArr.amt;

      total += fruitAmt * fruitPrice;
    });

    return "$" + numWithCommas(total);
  };

  const renderContent = () => {
    renderCartPrices();
    let shoppingSummary = "No Items In Cart";

    if (cartPrices.length > 0) {
      shoppingSummary = (
        <React.Fragment>
          <ItemsCalc>{cartPrices}</ItemsCalc>
          <Total>{calcTotal()}</Total>
        </React.Fragment>
      );
    }

    return (
      <CheckoutCardComp>
        <Header>Shopping Summary</Header>
        <Hr />
        <ShoppingSummary>{shoppingSummary}</ShoppingSummary>
        <Button>Checkout</Button>
      </CheckoutCardComp>
    );
  };

  if (fruitsInitialized) return renderContent();

  return null;
};

const mapStateToProps = (state) => {
  return {
    fruits: state.fruits.fruits,
    cart: state.cart.cart,
    hoverId: state.cart.hoverId,
  };
};

export default connect(mapStateToProps)(CheckoutCard);
