import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Register from "./pages/register";
import { BrowserRouter, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <App />
        </Route>
      </Switch>
      <Switch>
        <Route exact path={"/profile"}>
          <Profile />
        </Route>
      </Switch>
      <Switch>
        <Route exact path={"/login"}>
          <Login />
        </Route>
      </Switch>
      <Switch>
        <Route exact path={"/register"}>
          <Register />
        </Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
