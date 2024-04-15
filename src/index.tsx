import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { getCurrentLocaleStrings } from "./utilities/strings";
import { DataProvider } from "./utilities/DataContext";

getCurrentLocaleStrings(null);

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </StrictMode>
);
