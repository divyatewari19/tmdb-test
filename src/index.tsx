import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
// import '../styles/globals.css';
// import { BrowserRouter } from "react-router-dom";
import "./index.css";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
// const root = ReactDOM.render(<App />, document.getElementById("root"));
// root.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );
