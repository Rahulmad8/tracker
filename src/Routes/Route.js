import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { public_url } from "../Constant";
import { withRouter } from "react-router-dom";
import Expensetracker from "../Expensetracker/index";

export class Routes extends Component {
  render() {
    return (
      <React.Fragment>
        <Route
          exact
          path={public_url.landing_page}
          component={Expensetracker}
        />
        <Route
          exact
          path={public_url.expanse_tracker}
          component={Expensetracker}
        />
      </React.Fragment>
    );
  }
}

export default Routes;
