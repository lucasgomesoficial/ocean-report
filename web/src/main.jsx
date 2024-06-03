import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.css";
import { Route } from "./routes/routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Route />
  </React.StrictMode>
);
