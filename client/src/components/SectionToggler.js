import React from "react";
import styled from "styled-components";

const SectionToggler = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  margin: 0 20px;
`;

const Name = styled.h3`
  position: relative;
  width: 100%;
  margin: 10px 0px;
  margin-bottom: 6px;
  text-transform: uppercase;
  color: white;
  font-weight: 600;
  transition: 0.25s;
  transform: ${props =>
    props.selected ? "translateY(-15%)" : "translateY(0%)"};

  ${SectionToggler}:hover & {
    /* color: #f50000; */
    transform: translateY(-15%);
  }
`;

const Underline = styled.div`
  width: 70%;
  height: 5px;
  background-color: white;
  transform: ${props => (props.selected ? "scaleX(1)" : "scaleX(0)")};
  border-radius: 50px;
  transition: 0.25s;
  ${SectionToggler}:hover & {
    transform: scaleX(1);
  }
`;

const sectionToggler = props => {
  return (
    <SectionToggler onClick={() => props.onClick()}>
      <Name selected={props.selected}>{props.name}</Name>
      <Underline selected={props.selected} type={props.type} />
    </SectionToggler>
  );
};

export default sectionToggler;
