import React, {FC} from "react";
import "./Button.scss";

const buttonSizeClassName:any = {
  sm: "button-size-sm",
  md: "button-size-md",
  lg: "button-size-lg",
};

const buttonTypeClassName: any = {
  success: "button-type-success",
  error: "button-type-error",
  info: "button-type-info",
};

export const Button: FC<any> = ({
  onClick,
  title,
  size = "sm",
  type = "info",
  disabled = false,
}) => (
  <button
    disabled={disabled}
    onClick={onClick}
    className={`button ${buttonSizeClassName[size]} ${buttonTypeClassName[type]}`}
  >
    <span className="button-title">{title}</span>
  </button>
);
