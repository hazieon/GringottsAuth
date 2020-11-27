import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../Home";
import Bank from "../Bank";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/bank">
            <Bank />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
