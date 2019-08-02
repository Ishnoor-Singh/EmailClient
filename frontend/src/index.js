import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import Login from "./Login";
import InboxView from "./InboxView";

ReactDOM.render(
  <Router>
    <Route exact path="/" render={() => <Login />} component={Login} />
    <Route
      exact
      path="/inbox/"
      render={() => <InboxView />}
      component={InboxView}
    />
  </Router>,

  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
