import React from "react";

import {LoginForm} from "./components/LoginForm/LoginForm";
import { LanguageSwitch } from "./components/LanguageSwitchButtons";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <LanguageSwitch />
      <LoginForm />
    </div>
  );
}

export default App;
