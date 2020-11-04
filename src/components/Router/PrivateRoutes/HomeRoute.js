import React from "react";
import { Redirect, Route } from "react-router-dom";

const HomeRoute = ({ component: Component, ...rest }) => {
  const user = JSON.parse(localStorage.getItem("User"));
  return (
    <Route
      {...rest}
      render={(props) =>
        user && user.UserType === 1 ? (
          <Redirect
            to={{
              pathname: "/dashboard/",
              state: { from: props.location },
            }}
          />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default HomeRoute;
