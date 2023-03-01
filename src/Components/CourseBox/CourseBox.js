import React from 'react'
import { Link } from 'react-router-dom';


import './CourseBox.css';
export default function CourseBox({img,title,date,price,like,dislike,desc,view,comment,user,slide}) {
  return (
    <div className={`col-12 ${!slide && 'col-md-6 col-lg-4'}`}>
    <div className="panel panel-default">
      <div className="panel-post">
        <img
          className="img-responsive"
          src={img}
        />
        <span className="i-date">
          {date}<i className="material-icons">date_range</i>
        </span>
        <div className="overlay">
          <div className="text-ecxerpt">{desc}
          </div>
          <ul className="list-inline" id="post-detail">
            <li>
              <i className="material-icons">perm_identity</i>
              <span> {user.name}</span>
            </li>
            <li>
              <i className="material-icons">remove_red_eye</i>
              <span> {view} </span>
            </li>
            <li>
              <i className="material-icons">comment</i>{" "}
              <span> {comment} </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="post-link text-right">
        <Link to="/course/react">
         {title}
        </Link>
      </div>
      <div className="d-flex justify-content-between post-type-like">
        <span className="post-type">
          <i className="material-icons">view_headline</i>{price == 0 ? 'رایگان' : price}
        </span>
        <span className="like-btn">
          <span className="dislike">
            <a href="#">
              <i className="material-icons" id="dislike">
                thumb_down
              </i>
            </a>
           {dislike}
          </span>
          <span className="like">
          {like}
            <a href="#">
              <i className="material-icons" id="like">
                thumb_up
              </i>
            </a>
          </span>
        </span>
      </div>
    </div>
  </div>
  )
}
