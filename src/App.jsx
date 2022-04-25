import React from "react";
import "./App.scss";
import {Button} from "./components/Button";
import {Button as StrapButton} from "reactstrap";
import {FormBox} from "./FormBox";

function App() {
  return (
    <div className="App">
      <div>
        <Button onClick={null} title="click" type="success" />
        <Button onClick={null} title="click" sizeau="md" type="error" />
        <Button onClick={null} title="click" size="lg" type="info" />
        <Button
          onClick={null}
          disabled={true}
          title="click"
          size="lg"
          type="info"
        />
      </div>
      <div>
        <StrapButton size="sm" color="warning">
          RU
        </StrapButton>
        <StrapButton size="lg" color="warning">
          EN
        </StrapButton>
      </div>
      <FormBox />
    </div>
  );
}

export default App;
