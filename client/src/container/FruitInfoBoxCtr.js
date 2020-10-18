import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { LogiaBox, ParameciaBox, ZoanBox } from "../components";

import { switchLogia, switchParamecia, switchZoan } from "../store/actions";

const FruitInfoBoxCtrComp = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const FruitInfoBoxCtr = () => {
  const [logiaHide, setLogiaHide] = useState(false);
  const [parameciaHide, setParameciaHide] = useState(false);
  const [zoanHide, setZoanHide] = useState(false);

  const [logiaShow, setLogiaShow] = useState(false);
  const [parameciaShow, setParameciaShow] = useState(false);
  const [zoanShow, setZoanShow] = useState(false);

  const dispatch = useDispatch();

  const clear = () => {
    setLogiaShow(false);
    setParameciaShow(false);
    setZoanShow(false);

    setLogiaHide(false);
    setParameciaHide(false);
    setZoanHide(false);
  };

  const onLogiaClick = () => {
    if (logiaHide === true || logiaShow === false) {
      setLogiaShow(true);
      setParameciaShow(false);
      setZoanShow(false);

      setLogiaHide(false);
      setParameciaHide(true);
      setZoanHide(true);
    } else {
      clear();
    }
  };

  const onParameciaClick = () => {
    if (parameciaHide === true || parameciaShow === false) {
      setLogiaShow(false);
      setParameciaShow(true);
      setZoanShow(false);

      setLogiaHide(true);
      setParameciaHide(false);
      setZoanHide(true);
    } else {
      clear();
    }
  };

  const onZoanClick = () => {
    if (zoanHide === true || zoanShow === false) {
      setLogiaShow(false);
      setParameciaShow(false);
      setZoanShow(true);

      setLogiaHide(true);
      setParameciaHide(true);
      setZoanHide(false);
    } else {
      clear();
    }
  };

  return (
    <FruitInfoBoxCtrComp>
      <LogiaBox
        onClick={onLogiaClick}
        onButtonClick={() => dispatch(switchLogia())}
        show={logiaShow}
        hide={logiaHide}
      />
      <ParameciaBox
        onClick={onParameciaClick}
        onButtonClick={() => dispatch(switchParamecia())}
        show={parameciaShow}
        hide={parameciaHide}
      />
      <ZoanBox
        onClick={onZoanClick}
        onButtonClick={() => dispatch(switchZoan())}
        show={zoanShow}
        hide={zoanHide}
      />
    </FruitInfoBoxCtrComp>
  );
};

export default FruitInfoBoxCtr;
