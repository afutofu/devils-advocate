import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavItemComp = styled.div`
  position: relative;
  height: 100%;
  margin: ${(props) => (props.logo ? "0" : "0 20px")};
  text-transform: uppercase;
  font-size: 1rem;
  display: flex;
  align-items: center;
  overflow: hidden;
  box-sizing: border-box;

  :first-of-type {
    margin-left: 0;
  }

  :last-of-type {
    margin-right: 0;
  }

  a {
    color: ${(props) => (props.selected ? "#f50000 !important" : "white")};
    padding: 10px;
    cursor: pointer;
    font-weight: 700;
    box-sizing: border-box;
    transition: 0.2s;

    :hover {
      color: #f50000 !important;
    }
  }
`;

const NavItem = (props) => {
  const renderContent = () => {
    if (props.onLogout) {
      return (
        <NavItemComp onClick={() => props.onLogout()}>
          <Link to={props.to}>{props.children}</Link>
        </NavItemComp>
      );
    }

    return (
      <NavItemComp selected={props.selected} logo={props.logo}>
        <Link to={props.to}>{props.children}</Link>
      </NavItemComp>
    );
  };

  return renderContent();
};

export default NavItem;
