// src/app/AppRouter.tsx
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useNavbar } from "../features/navigation/hooks/useNavbar";
import { routes } from "./routes";
import { navbarConstants } from "../shared/constants/navbarConstants";
import { Home, Login, Sales } from "../pages";
import { useEffect } from "react";

"use strict";

export default function AppRouter() {
  const location = useLocation();
  const { user, loading } = useAuth();
  const { setPageTitle } = useNavbar();

  const handleLocationChange = () => {
    switch (location.pathname) {
      case routes.HOME.path:
        setPageTitle(navbarConstants.UI_STR_HOME);
        break;
      case routes.SALES.path:
        setPageTitle(navbarConstants.UI_STR_SALES);
        break;
      default:
        break;
    }
  };

  useEffect(handleLocationChange, [location.pathname])

  if (loading)
    return;

  return (
    <Routes>
      <Route
        path={routes.LOGIN.path}
        element={
          user
          ? <Navigate to={routes.LOGIN.replacementPath} replace /> 
          : <Login />
        }
      />
      <Route
        path={routes.HOME.path}
        element={ 
          user
          ? <Home />
          : <Navigate to={routes.HOME.replacementPath} replace /> 
        }
      />
      <Route
        path={routes.SALES.path}
        element={ 
          user
          ? <Sales /> 
          : <Navigate to={routes.SALES.replacementPath} replace /> 
        }
      />
      <Route
        path="*"
        element={ <Navigate to={routes.LOGIN.path} replace /> }
      />
    </Routes>
  );
};
