import React from "react";
import "./App.scss";
import {FormBox} from "./FormBox";
import {LanguageSwitch} from "./components/LanguageSwitchButtons";

function App() {
  return (
    <div className="App">
      <LanguageSwitch />
      <FormBox />
    </div>
  );
}

export default App;
