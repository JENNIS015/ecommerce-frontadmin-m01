import React from "react";
import { Provider } from "react-redux";
import { setCurrentUser } from "./store/auth";
import setAuthorizationToken from "./utils/setAuthorizationToken";
import jwtDecode from "jwt-decode";
import ReactDOM from "react-dom";
import store from "./store/rootReducer";
import reportWebVitals from "./reportWebVitals";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";

import "./index.css";
import App from "./App";
import getTokenTimeRemaining from "./utils/getTokenTimeRemaing";

//Authorizes if user token is valid on page.
if (localStorage.token) {
  const decodedToken = jwtDecode(localStorage.token);
  if (decodedToken.exp < new Date().getTime() / 100000) {
    // console.log("EXPIRED");
  } else {
    setAuthorizationToken(localStorage.token);
    store.dispatch(setCurrentUser(decodedToken));
    getTokenTimeRemaining(decodedToken);
  }
}
 
 ReactDOM.render(
   <Provider store={store}>
     <StyledEngineProvider injectFirst>
       <App />
     </StyledEngineProvider>
   </Provider>,
   document.getElementById("root")
 );

reportWebVitals();
