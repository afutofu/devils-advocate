import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { CartItemCtr, CheckoutCard } from "../container";
import { switchCart } from "../store/actions";

const CartComp = styled.div`
  position: relative;
  /* min-height: 94vh; */
  height: 100%;
  max-width: 100%;
  width: 100vw;
  box-sizing: border-box;
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  /* background: rgba(0, 0, 0, 0.4); */
  background: #2a2a2a;
  z-index: -100;
`;

const Container = styled.div`
  position: relative;
  width: 80%;
  min-height: 100%;
  margin: auto;
  padding-bottom: 20px;
  box-sizing: border-box;
  background: none;
  padding: 20px 50px;
  padding-top: 70px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const CartItems = styled.div`
  position: relative;
  width: 65%;
  box-sizing: border-box;
  padding-right: 50px;
`;

const Checkout = styled.div`
  position: relative;
  width: 35%;
  min-width: 250px;
  float: right;
`;

const Cart = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(switchCart());
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
