import * as Auth0 from "../package/services/auth0-plugin";
import socket from "../package/api/fetch-server"


export default {
    install: (app) => {
        // Plugin code goes here
        app.provide('AuthenticationService', Auth0.useAuth0(Auth0.AuthState));
        app.provide('socket', socket);
    }
}