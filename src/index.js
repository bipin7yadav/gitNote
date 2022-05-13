import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { NotesContextProvider } from "./context/context";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom"
import {AuthProvider} from "./Authentication/authContext"

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <NotesContextProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </NotesContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
