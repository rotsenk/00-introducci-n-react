import React from "react";
import ReactDOM from "react-dom/client";
import CompA from "./components/CompA.jsx";
import "./index.css";
import { DataContextProvider } from "./contexts/dataContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataContextProvider>
      <CompA />
    </DataContextProvider>
  </React.StrictMode>
);
