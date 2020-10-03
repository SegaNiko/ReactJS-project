import React from "react";
import { render } from "react-dom";

import "./index.scss";

import App from "./app/components/App/App";

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
