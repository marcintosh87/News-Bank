import React from "react";
import "./modal.css";

export default function Modal({ children, handleClose }) {
  return (
    <div className="spotlight-modal-backdrop fade-in">
      <div className="spotlight-modal">{children}</div>
    </div>
  );
}
