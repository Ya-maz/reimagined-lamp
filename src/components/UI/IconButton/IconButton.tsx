import React from "react";
import "./IconButton.scss";

interface IIconButtonProps {
  onclick?: any;
  children?: React.ReactNode;
  [key:string]:any
}
export const IconButton = ({onClick,  children, ...props}:IIconButtonProps) => (
  <button {...props} onClick={onClick} className="button">
    {children}
  </button>
);
