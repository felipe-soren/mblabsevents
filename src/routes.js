import React from "react"
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"

import SignUp from "./pages/SignUp";

import SignIn from "./pages/SignIn";

import Main from "./pages/Main"

import EventDetail from "./pages/EventDetail"

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
    <Route exact path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/app" component={Main} />
      <Route exact path="/" component= {() => (<Redirect to={{ pathname: "/App" }} />) }/>
      <Route path="/event/:name" component={EventDetail} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes