import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { SectionTogglerCtr, FruitCardCtr } from "../container";
import { switchFruits } from "../store/actions";

import w1 from "../assets/wallpaper/wallpaper1.jpg";
import w2 from "../assets/wallpaper/wallpaper2.jpg";
import w3 from "../assets/wallpaper/wallpaper3.jpg";
import w4 from "../assets/wallpaper/wallpaper4.jpg";
import w5 from "../assets/wallpaper/wallpaper5.jpg";
import w6 from "../assets/wallpaper/wallpaper6.jpg";
import w7 from "../assets/wallpaper/wallpaper7.jpg";
import w8 from "../assets/wallpaper/wallpaper8.jpg";
import w9 from "../assets/wallpaper/wallpaper9.jpg";
import w10 from "../assets/wallpaper/wallpaper10.jpg";
import w14 from "../assets/wallpaper/wallpaper14.jpg";

const setRandomBackgroundImage = (num) => {
  switch (num) {
    case 1:
      return w1;
    case 2:
      return w2;
    case 3:
      return w3;
    case 4:
      return w4;
    case 5:
      return w5;
    case 6:
      return w6;
    case 7:
      return w7;
    case 8:
      return w8;
    case 9:
      return w9;
    case 10:
      return w10;
    case 11:
      return w14;
    default:
      return w10;
  }
};

const FruitsComp = styled.div`
  position: relative;
  width: 100%;
  /* max-width: 100vw; */
  min-height: 100%;
  /* overflow-x: hidden; */
`;

const BackgroundImage = styled.img.attrs((props) => ({
  src: props.src || "",
}))`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -100;
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  /* background: #2a2a2a; */
  z-index: -50;
`;

const Container = styled.div`
  position: relative;
  width: 80%;
  height: 100%;
  margin: auto;
  padding-bottom: 20px;
  padding-top: 5vh;
  box-sizing: border-box;
`;

const Fruits = (props) => {
  const [bgImgSrc, setBgImgSrc] = useState(null);

  useEffect(() => {
    let randomNum = Math.round(Math.random() * 11);
    setBgImgSrc(setRandomBackgroundImage(randomNum));
    props.switchFruits();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <FruitsComp>
      <BackgroundImage src={bgImgSrc} />
      <Background />
      <Container>
        <SectionTogglerCtr />
        <FruitCardCtr />
      </Container>
    </FruitsComp>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    switchFruits: () => dispatch(switchFruits()),
  };
};

export default connect(null, mapDispatchToProps)(Fruits);
