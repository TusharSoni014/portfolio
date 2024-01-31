import React from "react";
import "./neonbtnsecondary.css";

export default function NeonBtnSecondary({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button onClick={onClick} className="neon-btn-second">
      {children}
    </button>
  );
}
