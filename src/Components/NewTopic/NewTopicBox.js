import React from "react";

export default function NewTopicBox({title,date,time,}) {
  return (
    <li className="mt-3">
      <span className="list-icon"></span>
      <div>
        <a href="#">دوره مجازی اسکریپت نویسی php : جلسه اول - معرفی دوره</a>
      </div>
      <div className="post-publish-date ">
        <span className="hidden-xs">
          1396-09-21<i className="material-icons">date_range</i>
        </span>
        <span className="hidden-xs">
          32 دقیقه<i className="material-icons">alarm</i>
        </span>
      </div>
    </li>
  );
}
