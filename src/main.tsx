import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "./index.css";
import { NotehubProvider } from "./contexts/NotehubContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NotehubProvider>
      <App />
    </NotehubProvider>
  </React.StrictMode>
);
