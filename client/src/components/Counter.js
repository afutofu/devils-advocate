import React from "react";
import styled from "styled-components";

const Counter = styled.div`
  height: 50px;
  width: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 600px) {
    width: 80px;
  }
`;

const Operator = styled.div`
  position: relative;
  width: 25px;
  height: 25px;
  font-weight: 700;
  background: #0fb839;
  border-radius: 50px;
  border: 3px solid #0fb839;
  box-sizing: border-box;
  cursor: pointer;

  transition: 0.1s;
  :active {
    background: #12de44;
    border: 3px solid #12de44;
    i {
      color: white;
    }
  }

  @media (max-width: 600px) {
    width: 20px;
    height: 20px;
    font-weight: 400;
  }
`;

const Icon = styled.i`
  font-size: 0.9rem;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  transform: translate(1px, 1px);

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

const Count = styled.div`
  font-weight: 500;
  font-size: 1.3rem;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

const counter = (props) => {
  return (
    <Counter>
      <Operator>
        <Icon onClick={() => props.removeFruitAmt()}>
          <i className="fa fa-minus"></i>
        </Icon>
      </Operator>
      <Count>{props.count}</Count>
      <Operator>
        <Icon onClick={() => props.addFruitAmt()}>
          <i className="fa fa-plus"></i>
        </Icon>
      </Operator>
    </Counter>
  );
};

export default counter;
