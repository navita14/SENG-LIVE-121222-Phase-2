// Updated for Compliance with React v18

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App 
      title="Project"
      message="Bye"/>
  </React.StrictMode>  //remove these when you need it in dev mode. strict mode allows you to catch errors
);