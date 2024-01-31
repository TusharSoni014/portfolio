"use client"

import React from "react";
import "./neonbtn.css";

export default function NeonBtn({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button onClick={onClick} className="neon-btn">
      {children}
    </button>
  );
}
