import React from 'react'

export default function RandomTopicBox({title,image}) {
  return (
    <li className='w-100'>
    <a href="#">
      <span>
        <img
          className="img-thumbnail"
          src={image}
          height="60"
          width="60"
        />
      </span>
    {title}
    </a>
  </li>
  )
}
