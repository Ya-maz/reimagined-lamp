import React from "react";
import "./App.scss";
import {Button} from "./components/Button";

function App() {
  return (
    <div className="App">
      <Button onClick={null} title="click" type="success" />
      <Button onClick={null} title="click" size="md" type="error" />
      <Button onClick={null} title="click" size="lg" type="info" />
      <Button
        onClick={null}
        disabled={true}
        title="click"
        size="lg"
        type="info"
      />
    </div>
  );
}

export default App;
