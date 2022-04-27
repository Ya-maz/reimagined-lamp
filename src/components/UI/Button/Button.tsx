import React, {FC} from "react";
import "./Button.scss";

const buttonSizeClassName: any = {
  sm: "button-size-sm",
  md: "button-size-md",
  lg: "button-size-lg",
};

const buttonVariantClassName: any = {
  primary: "button-type-primary",
  secondary: "button-type-secondary",
  success: "button-type-success",
  error: "button-type-error",
  info: "button-type-info",
};

export const Button: FC<any> = ({
  onClick,
  title,
  size = "sm",
  variant = "info",
  disabled = false,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`button ${buttonSizeClassName[size]} ${buttonVariantClassName[variant]}`}
    >
      <span className="button-title">{title}</span>
    </button>
  );
};
