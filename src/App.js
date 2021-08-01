import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { Component } from "react";
import Home from "./major/home/Home";

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
                      <Home></Home>
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
