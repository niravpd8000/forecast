import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { authRoutes } from "../routes";

const LoggedInRoutes = user =>
  authRoutes.map((r, i) => (
    <Route
      key={i}
      path={r.path}
      exact={r.exact}
      render={props => <r.main {...props} user={user || {}} />}
    />
  ));

// const LoggedOutRoutes = unAuthRoutes.map((r, i) => (
//   <Route
//     key={i}
//     path={r.path}
//     exact={r.exact}
//     render={props => <r.main {...props} />}
//   />
// ));

const Main = React.memo(() => {
  return (
    <BrowserRouter>
      <Switch>{LoggedInRoutes({})}</Switch>
    </BrowserRouter>
  );
});

export default Main;
