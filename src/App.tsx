import React from "react";

import {LoginForm} from "./components/LoginForm";
import { LanguageSwitch } from "./components/LanguageSwitchButtons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/app.scss";

function App() {
  return (
    <div className="app">
      <LanguageSwitch />
      <LoginForm />
    </div>
  );
}

export default App;
