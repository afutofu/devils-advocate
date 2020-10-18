import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { CartItemCtr, CheckoutCard } from "../container";
import { switchCart } from "../store/actions";

const CartComp = styled.div`
  position: relative;
  min-height: 100%;
  max-width: 100%;
  width: 100vw;
  box-sizing: border-box;
  overflow: auto;
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #2a2a2a;
  z-index: -100;
`;

const Container = styled.div`
  position: relative;
  width: 80%;
  height: 100%;
  margin: auto;
  padding-bottom: 20px;
  box-sizing: border-box;
  background: none;
  padding: 20px 50px;
  padding-top: 70px;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 600px) {
    flex-direction: column-reverse;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    padding-top: 50px;
  }
`;

const CartItems = styled.div`
  position: relative;
  width: 65%;
  box-sizing: border-box;
  padding-right: 50px;

  @media (max-width: 600px) {
    width: 100%;
    padding-right: 0;
  }
`;

const Checkout = styled.div`
  position: relative;
  width: 35%;
  min-width: 250px;
  float: right;

  @media (max-width: 600px) {
    width: 100%;
    min-width: 100px;
    margin-bottom: 50px;
  }
`;

const Cart = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(switchCart());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CartComp>
      <Background />
      <Container>
        <CartItems>
          <CartItemCtr items={5} />
        </CartItems>
        <Checkout>
          <CheckoutCard />
        </Checkout>
      </Container>
    </CartComp>
  );
};

export default Cart;
