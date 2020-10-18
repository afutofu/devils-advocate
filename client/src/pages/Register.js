import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled, { keyframes } from "styled-components";

import { RegisterCard } from "../container";
import { switchRegister } from "../store/actions";

import w12 from "../assets/wallpaper/wallpaper12.jpg";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity:1;
  }
`;

const RegisterComp = styled.div`
  position: relative;
  /* width: 100vw;
  max-width: 100vw;
  min-height: 94vh; */
  width: 100%;
  height: 100%;
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  /* background: #2a2a2a; */
  z-index: -50;
`;
const BackgroundImage = styled.img.attrs((props) => ({
  src: props.src || "",
}))`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -100;
`;

const Container = styled.div`
  position: relative;
  width: 80%;
  min-height: 100%;
  margin: auto;
  box-sizing: border-box;
  background: none;
  padding: 20px 50px;
  padding-bottom: 150px;
  display: flex;
  justify-content: center;
  align-items: center;

  opacity: 0;
  animation: ${fadeIn} 1s 0.5s forwards;
`;

const Register = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(switchRegister());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <RegisterComp>
      <BackgroundImage src={w12} />
      <Background />
      <Container>
        <RegisterCard />
      </Container>
    </RegisterComp>
  );
};

export default Register;
