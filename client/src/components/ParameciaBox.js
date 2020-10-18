import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";

// import whitebeard from "../assets/images/whitebeard.jpg";
import whitebeard2 from "../assets/images/whitebeard2.jpg";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to{
    opacity:1;
  }
`;

const scaleOut = keyframes`
  from {transform: scaleX(0)}
  to {transform: scaleX(1)}
`;

const fadeInFromBottom = keyframes`
  from{
    opacity:0;
    transform: translateY(50%);
  }
  to{
    opacity:1;
    transform: translateY(0%);
}
`;

// const slideIn = keyframes`
//   from{transform: translateY(-100%); pointer-events: none}
//   to{transform:translateY(0%); pointer-events: auto }
// `;

const slideInStretchOut = keyframes`
  0%{
    transform: translateY(-101%) scaleX(0.5); 
    pointer-events: none
  }
  50%{
    transform:translateY(0%) scaleX(0.5); 
    pointer-events: none
  }
  100%{
    transform:translateY(0%) scaleX(1); 
    pointer-events: auto 
  }
`;

const OuterContainer = styled.div`
  position: relative;
  min-width: 50px;
  height: 100%;
  margin: 0 10px;
  overflow: hidden;
  flex-basis: 0;
  flex: ${(props) => (props.hide ? 0.1 : 1)};
  transition: flex 0.5s, background-color 0.2s;

  @media only screen and (max-width: 600px) {
    margin: 0;
    margin: 10px 0;
    width: 100%;
  }
`;

const ParameciaBoxComp = styled.div`
  transform: translateY(-101%) scaleX(0.5);
  width: 100%;
  height: 100%;
  /* background-color: #a3a3a3; */
  animation: ${slideInStretchOut} 1s 0.9s forwards;
  cursor: pointer;

  @media only screen and (max-width: 600px) {
    animation: ${scaleOut} 1s 0.9s ease forwards;
  }
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0);
  /* background: #2a2a2a; */
  z-index: -50;
  transition: 0.5s;
  ${ParameciaBoxComp}:hover & {
    background: ${(props) =>
      props.show ? "rgba(0,0,0, 0.5)" : "rgba(0,0,0, 0.3)"};
  }
`;

const BackgroundImage = styled.img.attrs((props) => ({
  src: props.src || "",
}))`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -100;
`;

const Container = styled.div`
  display: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 50px;
  box-sizing: border-box;

  opacity: 0;
  transition: 0.5s;
  ${ParameciaBoxComp}:hover & {
    opacity: 1;
  }
`;

const getFontSize = (props) => {
  if (props.hide === false && props.show === false) {
    return "2rem";
  } else if (props.hide === false && props.show === true) {
    return "2rem";
  } else if (props.hide === true && props.show === false) {
    return "0.5rem";
  }
};

const Name = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  text-transform: uppercase;
  color: white;
  box-sizing: border-box;

  transition: 0.2s;
  opacity: ${(props) => (props.hide || props.show ? 0 : 1)};
  font-size: ${(props) => getFontSize(props)};
`;

const ShowInfo = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  margin: 0;
  width: 100%;
  font-size: 1.5rem;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const ShowName = styled.h1`
  position: relative;
  opacity: 0;
  text-align: center;
  margin: 0;
  width: 100%;
  max-width: 500px;
  font-size: 3rem;
  color: white;
  text-transform: uppercase;
  margin-bottom: 30px;
  animation: ${fadeIn} 0.3s 0.5s linear forwards;

  @media only screen and (max-width: 600px) {
    font-size: 30px;
  }
`;

const Underline = styled.div`
  width: 40%;
  height: 3px;
  background-color: #fff;
  transform: scaleX(0);
  border-radius: 50px;
  margin-bottom: 40px;

  animation: ${scaleOut} 1s 0.8s ease forwards;
`;

const Info = styled.div`
  text-align: center;
  margin: 0;
  width: 100%;
  max-width: 700px;
  letter-spacing: 0px;
  font-size: 1.7rem;
  color: white;
  margin-bottom: 40px;
  padding: 0 30px;
  box-sizing: border-box;
  opacity: 0;
  animation: ${fadeInFromBottom} 0.8s 1.3s ease forwards;

  @media only screen and (max-width: 600px) {
    font-size: 25px;
  }
`;

const Button = styled.button`
  outline: none;
  text-transform: uppercase;
  background: #222;
  font-weight: 600;
  font-size: 0.9rem;
  padding: 10px 15px;
  border: 3px solid #222;
  cursor: pointer;
  border-radius: 20px;
  box-sizing: border-box;
  color: #fff;
  letter-spacing: 2px;

  transition: 0.2s;
  :hover {
    border: 3px solid #fff;
  }

  opacity: 0;
  transform: translateY(50%);
  animation: ${fadeInFromBottom} 1s 2s ease forwards;
`;

const ParameciaBox = (props) => {
  // const fruitType = useSelector((state) => state.fruitType);
  // const dispatch = useDispatch();

  const renderContent = () => {
    let showInfo = null;

    if (props.show) {
      showInfo = (
        <ShowInfo>
          <ShowName>Paramecia</ShowName>
          <Underline />
          <Info>
            Paramecia is one of the three Devil Fruit types, being the most
            common out of them. Paramecia fruits grant a large variety of
            abilities that enable their consumers to become superhuman or
            perform a superhuman feat
          </Info>
          <Link to="/fruits">
            <Button onClick={() => props.onButtonClick()}>
              Browse Paramecias
            </Button>
          </Link>
        </ShowInfo>
      );
    }

    return (
      <OuterContainer
        onClick={props.onClick}
        show={props.show}
        hide={props.hide}
      >
        <ParameciaBoxComp show={props.show}>
          <BackgroundImage src={whitebeard2} />
          <Background show={props.show} />
          <Container>
            <Name show={props.show} hide={props.hide}>
              Paramecia
            </Name>
            {showInfo}
          </Container>
        </ParameciaBoxComp>
      </OuterContainer>
    );
  };

  return renderContent();
};

export default ParameciaBox;
