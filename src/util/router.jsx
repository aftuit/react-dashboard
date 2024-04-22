import React from "react";
import Loader from "../components/Loader";
const Dashboard = React.lazy(() => import("../views/Dashboard"));
const BlankPage = React.lazy(() => import("../views/BlankPage"));

export const routes = [
  {
    id: 1,
    element: (
      <React.Suspense
        fallback={
          <React.Fragment>
            <Loader />
          </React.Fragment>
        }>
        <Dashboard />
      </React.Suspense>
    ),
    path: "/dashboard",
  },
  {
    id: 2,
    element: (
      <React.Suspense
        fallback={
          <React.Fragment>
            <Loader />
          </React.Fragment>
        }>
        <BlankPage />
      </React.Suspense>
    ),
    path: "/blank",
  },
];
