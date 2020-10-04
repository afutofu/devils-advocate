import React from "react";
import styled from "styled-components";

import logoImg from "../assets/images/logo.png";

const Logo = styled.img.attrs((props) => ({
  src: props.src,
}))`
  height: 50px;
  padding: 0;
  cursor: pointer;
  box-sizing: border-box;
  transform: translateY(2px);
`;

const logo = () => {
  return <Logo src={logoImg} />;
};

export default logo;
