import React from "react";

export default function HeroItem({ title, icon }) {
  return (
    <div className="col-sm-4 col-md-4 col-lg-4">
      <i className="material-icons">{icon}</i>
      <span>{title}</span>
    </div>
  );
}
