import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./assets/scss/style.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter } from "react-router-dom";
import Loader from "./layouts/loader/Loader";

ReactDOM.render(
  <Suspense fallback={<Loader />}>
    <HashRouter>
      <App />
    </HashRouter>
  </Suspense>,

  document.getElementById("root")
);
reportWebVitals();
