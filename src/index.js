import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "assets/css/material-dashboard-react.css?v=1.10.0";
import App from "layouts/App.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/App" component={App} />
      {/* <Route path="/admin" component={Admin} /> */}
      {/* <Route path="/rtl" component={RTL} /> */}
      <Redirect from="/" to="/app" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
