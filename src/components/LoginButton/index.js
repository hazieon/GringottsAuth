import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./index.css";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>ENTER VAULT</button>;
};

export default LoginButton;
