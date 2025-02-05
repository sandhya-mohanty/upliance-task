// src/components/PrivateRoute.tsx
import React from "react";
import { Route, Navigate } from "react-router-dom";

const PrivateRoute: React.FC<any> = ({ element, ...rest }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  return (
    <Route
      {...rest}
      element={isAuthenticated ? element : <Navigate to="/login" />}
    />
  );
};

export default PrivateRoute;
