import React from "react";

export default function Modal({ children }) {
  return (
    <div className="spotlight-modal-backdrop fade-in">
      <div className="spotlight-modal">{children}</div>
    </div>
  );
}
