import React from 'react'

export default function Progress({count, striped, className}) {
  return (
    <div className="progress">
    <div
      className={`progress-bar ${className} ${striped && 'progress-bar-striped active'}`}
      style={{width : `${count}%`}}>
      <span>{count}% </span>
    </div>
  </div>
  )
}
