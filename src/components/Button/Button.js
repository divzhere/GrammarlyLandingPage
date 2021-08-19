import React from "react";
import "./button.scss";
export default function Button({ title, disabled, width }) {
  return (
    <button
      className={`button ${disabled ? "disabled" : ""}`}
      style={{ width: `${width}` }}
    >
      {title}
    </button>
  );
}
