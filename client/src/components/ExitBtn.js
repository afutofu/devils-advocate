import React from "react";
import styled from "styled-components";

const ExitBtn = styled.div`
  font-size: 22px;
  width: 40px;
  height: 40px;
  padding: 2px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  :hover {
    transition: 0.2s;
    color: #bd1e1e;
  }

  :active {
    transition: 0s;
    color: #ff1919;
  }

  i {
    width: 22px;
    height: 23px;
  }

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

const exitBtn = (props) => {
  return (
    <ExitBtn onClick={props.onClick}>
      <i className="fa fa-times"></i>
    </ExitBtn>
  );
};

export default exitBtn;
