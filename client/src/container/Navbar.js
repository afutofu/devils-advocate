import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import _ from "lodash";

import { NavItem, Logo } from "../components";
import { logout, clearCart } from "../store/actions";

const Navbar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  max-width: 100vw;
  width: 100%;
  height: 50px;
  background-color: #222;
  display: flex;
  justify-content: center;
  z-index: 100;
  margin: 0;
  border-bottom: 2px solid #111;
  box-sizing: border-box;
`;

const Container = styled.div`
  width: 90%;
  height: 100%;
  margin: 0;
  display: flex;
  justify-content: space-between;
`;

const NavGroup = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
`;

const navbar = (props) => {
  const navItem = props.navItem;

  const logout = () => {
    props.logout();
    props.clearCart();
  };

  const renderContent = () => {
    let authNavItems = (
      <React.Fragment>
        <NavItem to="/login" selected={navItem == "LOGIN" ? true : false}>
          login
        </NavItem>
        <NavItem to="/register" selected={navItem == "REGISTER" ? true : false}>
          register
        </NavItem>
      </React.Fragment>
    );

    if (props.isLoggedIn === true) {
      authNavItems = (
        <React.Fragment>
          <NavItem to="/fruits" onLogout={() => logout()}>
            logout
          </NavItem>
        </React.Fragment>
      );
    }

    return (
      <Navbar>
        <Container>
          <NavGroup>
            <NavItem logo to="/" selected={navItem == "LOGO" ? true : false}>
              <Logo />
            </NavItem>
            <NavItem to="/fruits" selected={navItem == "FRUITS" ? true : false}>
              fruits
            </NavItem>
          </NavGroup>
          <NavGroup>
            <NavItem to="/cart" selected={navItem == "CART" ? true : false}>
              cart
            </NavItem>
            {authNavItems}
          </NavGroup>
        </Container>
      </Navbar>
    );
  };

  return renderContent();
};

const mapStateToProps = (state) => {
  return {
    navItem: state.navItem,
    isLoggedIn: state.auth.isLogged,
    username: state.auth.user.username,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    clearCart: () => dispatch(clearCart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(navbar);
