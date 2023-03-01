import React from "react";
import { Link } from "react-router-dom";
import "./Topbar.css";
export default function Topbar() {
  return (
    <>
      <div className="container-fluid" id="social-container">
        <div className="row">
          <div className="col-12 col-md-6 align-items-center d-flex hidden-xs">
            <p>آيا مي دانيد تا کنون ۱۰۶۲۲ نفر در ۲۳ دوره آموزشي سایت ما ثبت
                  نام کرده اند !</p>
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-center justify-content-lg-end ">
            <ul className="list-inline text-left social-icon">
              <li>
                <a href="#">
                  <img src="/assets/img/telegram.png" height="30" width="30" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/assets/img/instagram.png" height="30" width="30" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="/assets/img/google-plus.png"
                    height="30"
                    width="30"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/assets/img/facebook.png" height="30" width="30" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/assets/img/twitter.png" height="30" width="30" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container-fluid" id="topbar-link-container">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4 justify-content-center d-flex justify-content-lg-start">
              <Link to="/">
                <img
                  src="/assets/img/cccccc.webp"
                  height="50"
                  width="120"
                  alt="logo"
                />
              </Link>
            </div>
            <div className="col-12 col-md-8 justify-content-center d-flex justify-content-lg-end">
              <ul className="list-inline text-left" id="topbar-link">
                <li>
                  <i className="material-icons">perm_identity</i>
                  <Link to="/login">ورود</Link> | <Link to="/register">عضویت</Link>
                </li>
                <li>
                  <i className="material-icons">contact_mail</i>{" "}
                  <a href="#">تماس با ما</a>
                </li>
                <li>
                  <i className="material-icons">phone</i>0938-702-9274
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
