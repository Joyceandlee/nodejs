import React from "react";
import { Router } from "dva/router";
import RouterView from "../router/RouterView";
import { routes } from "../router/routes";

export default function ({ history }) {
  return (
    <Router history={history}>
      <RouterView routes={routes} />
    </Router>
  );
}
