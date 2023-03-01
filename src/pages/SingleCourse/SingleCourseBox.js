import React from 'react'
import { Link } from 'react-router-dom'

export default function SingleCourseBox({title}) {
  return (
    <li>
    <span className="list-icon"></span>
    <div>
      <Link to="/course">
       {title}
      </Link>
    </div>
  </li>
  )
}
