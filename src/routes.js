import React from "react"
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={() => <h1>Login</h1>} />
      <Route exact path="/signup" component={() => <h1>SignUp</h1>} />
      <Route exact path="/app" component={() => <h1>App</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes