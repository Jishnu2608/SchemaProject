import React from 'react'
import ReactDOM from 'react-dom'
import App from './App';
import './index.css';
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
    <Auth0Provider domain="dev-ivfw-bjb.us.auth0.com"
        clientId="6NuLEgyrN8A8UHKtZ5An8ea92sFzN3rF"
        redirectUri={window.location.origin}
        >
        <App />
    </Auth0Provider>
    , document.getElementById("root")
);