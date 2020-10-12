import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import styled from "styled-components";

import { Navbar } from "./container";
import { Home, Fruits, Fruit, Cart, Login, Register } from "./pages";
import ScrollToTop from "./shared/ScrollToTop";
import store from "./config/store";
import { fetchUser, fetchFruits } from "./store/actions";

const AppComp = styled.div`
  font-family: "Montserrat", sans-serif;
  letter-spacing: 2px;
  padding-top: 50px;
  height: 100vh;
  box-sizing: border-box;

  a {
    color: white;
    text-decoration: none;
  }
`;

const App = () => {
  useEffect(() => {
    store.dispatch(fetchUser());
    store.dispatch(fetchFruits());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <ScrollToTop>
          <AppComp>
            <Navbar />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/fruits" exact component={Fruits} />
              <Route path="/fruits/:id" exact component={Fruit} />
              <Route path="/cart" exact component={Cart} />
              <Route path="/login" exact component={Login} />
              <Route path="/register" exact component={Register} />
            </Switch>
          </AppComp>
        </ScrollToTop>
      </Router>
    </Provider>
  );
};

export default App;
