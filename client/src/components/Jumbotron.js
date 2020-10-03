import React from "react";
import styled from "styled-components";

import { device } from "../shared/deviceWidth";

const Jumbotron = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 10vh;
  background: rgb(249, 249, 249);
  box-sizing: border-box;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  position: relative;
  width: 70%;
  height: 80%;
  box-sizing: border-box;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1.5rem;

  @media ${device.mobileM} {
    font-size: 0.65rem;
    line-height: 1.1rem;
  }

  @media ${device.tablet} {
    font-size: 0.9rem;
  }
`;

const jumbotron = props => {
  return (
    <Jumbotron>
      <Container>{props.content}</Container>
    </Jumbotron>
  );
};

export default jumbotron;
