import React from "react";
import { Link } from "react-router-dom";

export default function InfoBox({ title, icon, date }) {
  return (
    <div className="info-box">    
      <div className="info-text">
        <Link to="/" >
          {title}
        </Link>
        <span className="info-date">
          {date}<i className="material-icons">{icon}</i>
        </span>
      </div>
    </div>
  );
}
