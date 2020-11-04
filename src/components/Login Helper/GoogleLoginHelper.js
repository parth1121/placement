import React from "react";
import GoogleLogin from "react-google-login";
import { ClientSecret } from "./ClientSecret";

const GoogleLoginHelper = () => {
  const responseGoogle = (response) => {
    console.log(response);
  };
  return (
    <GoogleLogin
      clientId={ClientSecret}
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
    />
  );  
};
export default GoogleLoginHelper;
