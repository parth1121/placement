import React from "react";
import { Redirect, Route } from "react-router-dom";

const AdminRoute = ({ component: Component, ...rest }) => {
  const user = JSON.parse(localStorage.getItem("User"));
  return (
    <Route
      {...rest}
      render={(props) =>
        user && user.UserType === 1 ? (
          <Component {...props} />
        ) : (
          <>
            {console.log("hello")}
            <Redirect
              to={{
                pathname: "/",
                state: { from: props.location },
              }}
            />
          </>
        )
      }
    />
  );
};

export default AdminRoute;
