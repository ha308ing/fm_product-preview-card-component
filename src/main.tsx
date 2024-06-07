import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/app/app";
import "./index.css";
import "./pixel-glass";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
