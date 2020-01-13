import React from "react"
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"

import SignUp from "./pages/SignUp";

import SignIn from "./pages/SignIn";

import Main from "./pages/Main"

import { isAuthenticated } from "./services/auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
    <Route exact path="/sigin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/app" component={Main} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes