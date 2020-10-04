import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

import numWithCommas from "../shared/numWithCommas";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity:1;
  }
`;

const Card = styled.div`
  min-width: 200px;
  max-width: 400px;
  height: 300px;
  margin: 0 1vw;
  margin-bottom: 8vh;
  padding: 2px;
  box-sizing: border-box;
  border-radius: 5px;
  background: #fefefe;
  overflow: hidden;
  opacity: 0;
  animation: ${fadeIn} 1.5s 0s forwards;

  transition: 0.3s;
  &:hover {
    transform: translateY(-5%);
  }

  a {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
`;

const Image = styled.img.attrs((props) => ({
  src: props.src || "",
}))`
  flex-grow: 1;
  width: 100%;
  height: 180px;
  background: rgb(89, 255, 247);
  border-radius: 5px 5px 0px 0px;
  border: 0;
`;

const Content = styled.div`
  flex-grow: 0.1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  box-sizing: border-box;
  border: none;
`;

const Name = styled.h1`
  font-size: 1rem;
  font-weight: 700;
  margin: 0;
  color: black;
  text-align: center;
`;

const Price = styled.h2`
  font-size: 1rem;
  font-weight: 500;
  margin: 0;
  color: black;
`;

const card = (props) => {
  return (
    <Card>
      <Link to={`/fruits/${props.id}`}>
        <Image src={props.imagelink} />
        <Content>
          <Name>{props.name}</Name>
          <Price>{"$" + numWithCommas(props.price)}</Price>
        </Content>
      </Link>
    </Card>
  );
};

export default card;
