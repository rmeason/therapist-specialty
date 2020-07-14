import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Button.css"

const LogoutButton = () => {
  const { logout } = useAuth0();

  return <button onClick={() => logout()}>Log Out</button>;
};

export default LogoutButton;