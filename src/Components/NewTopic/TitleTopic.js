import React from 'react'

export default function TitleTopic({title,icon}) {
  return (
    <p className="align-items-center d-flex justify-content-start lesson-title">
    <i className="material-icons">{icon}</i>{title}</p>
  )
}
