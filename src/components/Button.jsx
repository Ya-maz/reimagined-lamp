import React from "react";
import "./Button.scss";

export const Button = ({onClick, title}) => (
  <button onClick={onClick} className="button">
    <span className="button-title">{title}</span>
  </button>
);
