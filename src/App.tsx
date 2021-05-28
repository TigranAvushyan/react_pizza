import React, { FC } from "react";
import "./assets/css/app.css";
import { Route, Switch } from "react-router-dom";

import Cart from "./view/Cart";
import Home from "./view/Home";
import Header from "./components/Header";


const App: FC = () => {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <Switch>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default App;
