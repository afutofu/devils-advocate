import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { FruitInfoBoxCtr } from "../container";
import { switchLogo } from "../store/actions";

const HomeComp = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #2a2a2a;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  overflow: hidden;
`;

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(switchLogo());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <HomeComp>
      <Background />
      <Container>
        <FruitInfoBoxCtr />
      </Container>
    </HomeComp>
  );
};

export default Home;
