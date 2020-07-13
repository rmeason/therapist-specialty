import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
    
    <Auth0Provider
    domain="dev-k1zbg078.us.auth0.com"
    clientId="Gf6uwUSPyQIJ7JrUA73Fzi62xHESfQOZ"
    redirectUri={window.location.origin}
    >

    <App />

    </Auth0Provider>,
    document.getElementById("root")
);
