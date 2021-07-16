import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Expensetracker from "./Expensetracker/index";
import Routes from "./Routes/Route";

function App() {
  return (
    <React.Fragment>
      <div id="wrapper">
        <BrowserRouter>
          <Switch>
            <Routes />
          </Switch>
        </BrowserRouter>
        {/* <Footer /> */}
      </div>
    </React.Fragment>
  );
}

export default App;
