import React from "react";

export default function ProjectCard({ img, title, desc }) {
  return (
    <div className="project-card">
      <img src={img} alt="" />
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}
