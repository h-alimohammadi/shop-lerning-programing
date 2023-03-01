import React from 'react'

export default function Media({user,date,text,answer}) {
  return (
    <div className={`media text-right  ${answer && 'comment-answer-section'}`}>
                <div className="media-right" id="custom-media-right">
                  <img
                    className="media-object img-circle"
                    id="custom-media-object"
                    src="/assets/img/24333.jpg"
                    width="50"
                    height="50"
                    alt="commenter"
                  />
                  <div className="comment-line"></div>
                </div>
                <div className="media-body user-comment" id="comment-question">
                  <div className="user-comment-title">
                    <ul className="list-inline">
                      <li>
                        <i className="material-icons">perm_identity</i>{user}
                      </li>
                      <li>
                        <i className="material-icons">date_range</i>{date}
                      </li>
                      <li className="comment-answer">
                        <a href="#">پاسخ</a>
                      </li>
                      <li className="comment-edit">
                        <a href="#">ویرایش</a>
                      </li>
                      <li></li>
                    </ul>
                  </div>
                  <p>{text}</p>
                </div>
              </div>
  )
}
