import React from "react";
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute(properties) {
  const isAuthenticated = true;
  return (
    <Route
      exact={properties.exact}
      path={properties.path}
      render={(props) => {
        if (isAuthenticated && properties.requiredRoles) {
          return <properties.component {...props} />;
        }
        if (!isAuthenticated) {
          return <Redirect to="/home" />;
        }
        return <Redirect to="/404" />;
      }}
    />
  );
}

export default ProtectedRoute;
