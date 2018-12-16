import { Route, Switch, Redirect } from "react-router-dom";
import * as React from "react";
import routes from "base/routes";

const { lazy, Suspense } = React;

const NotFound = lazy(() => import("pages/NotFound"));

export default () => (
  <Suspense fallback={<div>loading……</div>}>
    <Switch>
      <Redirect from="/" to="/index" exact={true} />
      {Object.entries(routes).map((item, index) => {
        return (
          <Route
            path={item[0]}
            exact={true}
            component={item[1]}
            key={index.toString()}
          />
        );
      })}
      <Route component={NotFound} />
    </Switch>
  </Suspense>
);
