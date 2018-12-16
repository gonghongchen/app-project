import * as React from "react";
import { Link } from "react-router-dom";

const { lazy } = React;

const Mobx = lazy(() => import("pages/mobx"));
const Detail = lazy(() => import("pages/detail"));
const Test = lazy(() => import("pages/test"));
const Index: React.SFC<{}> = () => {
  return (
    <div>
      <Link to="/mobx">to mobx</Link>
    </div>
  );
};

export default {
  "/index": Index,
  "/mobx": Mobx,
  "/detail": Detail,
  "/test": Test
};
