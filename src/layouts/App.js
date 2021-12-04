import { BrowserRouter, Route, Switch } from "react-router-dom";
// import './App.css';
import React, { useState } from "react";
import Admin from "./Admin";
import Login from "./Login";
// import Admin from "./Admin";
// import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

function App() {
  const [token, setToken] = useState();

  if (!token) {
    return <Login setToken={setToken} />;
  }
  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/admin">
            <Admin />
          </Route>
          {/* <Route path="/preferences">
            <Preferences />
          </Route> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
