import React from "react";

import "./SideMenu.css";
export default function SideMenu() {
  return (
    <>
      <div id="slide-nav">
        <div className="user">
          <img
            className="img-circle user-avatar-side-nav"
            src="assets/img/cccccc.webp"
            width="100"
            height="100"
          />
          <div className="welcome">
            <div className="text-center">
              خوش آمدید : <span> حسین علی محمدی</span>
            </div>
            <div className="text-center">
              آخرین بازدید شما : <span> 1396/09/15</span>
            </div>
          </div>
        </div>
        <ul className="list-group" id="slide-list">
          <li>
            <i className="material-icons">dashboard</i>
            <a href="admin/index.html">پنل کاربری</a>
          </li>
          <li>
            <i className="material-icons">person</i>
            <a href="profile.html">پروفایل کاربری</a>
          </li>
          <li>
            <i className="material-icons">border_color</i>
            <a href="#">ارسال مطلب</a>
          </li>
          <li>
            <i className="material-icons">forum</i>
            <a href="#">نظرات</a>
            <span className="badge badge-slide-nav">5</span>
          </li>
          <li>
            <i className="material-icons">school</i>
            <a href="#">آموزش های من</a>
            <span className="badge badge-slide-nav">5</span>
          </li>
          <li>
            <i className="material-icons" id="exit-icon">
              power_settings_new
            </i>
            <a href="#">خروج</a>
          </li>
        </ul>
      </div>
    </>
  );
}
