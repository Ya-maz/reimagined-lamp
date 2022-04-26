import React, { Suspense } from "react";
import ReactDom from "react-dom";

import App from "./App.jsx";
import "./i18n";

ReactDom.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
