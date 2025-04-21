// src/app/AppRouter.tsx
import { Routes, Route, Navigate } from "react-router-dom";
import { Home, Login } from "../pages";
import { useAuth } from "../hooks/useAuth";
import { routeConstants } from "../shared/constants";

"use strict";

export default function AppRouter() {
  const { user } = useAuth();

  return (
    <Routes>
      <Route
        path={routeConstants.UI_ROUTE_LOGIN}
        element={ user ? <Navigate to={routeConstants.UI_ROUTE_HOME} replace /> : <Login /> }
      />
      <Route
        path={routeConstants.UI_ROUTE_HOME}
        element={ user ? <Home /> : <Navigate to={routeConstants.UI_ROUTE_LOGIN} replace /> }
      />
      <Route
        path="*"
        element={ <Navigate to={routeConstants.UI_ROUTE_LOGIN} replace /> }
      />
    </Routes>
  );
};
