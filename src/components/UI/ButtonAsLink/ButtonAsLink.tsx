import React from "react";
import "./ButtonAsLink.scss";

export const ButtonAsLink = ({
  onClick,
  title,
}: {
  onClick: () => void;
  title: string;
}) => {
  return (
    <button onClick={onClick} className={`button-as-link`}>
      <span className="button-as-link-title">{title}</span>
    </button>
  );
};
