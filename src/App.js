import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { Component } from "react";
import Home from "./major/home/Home";
import About from "./major/aboutus/About";
import Products from "./major/products/Products";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route
              path="/"
              exact={true}
              strict
              render={(props) => {
                return (
                  <div>
                    <main className="main-page">
                      <Home />
                    </main>
                  </div>
                );
              }}
            />
            <Route
              path="/about"
              exact={true}
              strict
              render={(props) => {
                return (
                  <div>
                    <main className="main-page">
                      <About />
                    </main>
                  </div>
                );
              }}
            />
            <Route
              path="/products"
              exact={true}
              strict
              render={(props) => {
                return (
                  <div>
                    <main className="main-page">
                      <Products />
                    </main>
                  </div>
                );
              }}
            />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
