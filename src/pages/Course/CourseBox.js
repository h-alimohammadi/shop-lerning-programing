import React from "react";
import { Link } from "react-router-dom";

export default function CourseBox({ title, time }) {
  return (
    <li>
      <Link to="/course/react">{title}</Link>
      <span className="part-duration">{time} دقیقه</span>
    </li>
  );
}
