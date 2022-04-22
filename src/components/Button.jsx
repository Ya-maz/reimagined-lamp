import React from "react";

export const Button = ({onClick, title}) => (
  <button onClick={onClick}>
    <span>{title}</span>
  </button>)
