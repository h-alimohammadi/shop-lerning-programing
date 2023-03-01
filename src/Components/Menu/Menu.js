import React from "react";
import { NavLink } from "react-router-dom";

import "./Menu.css";
export default function Menu() {
  return (
    <>
      <nav className="navbar navbar-default" id="navbar-custom">
        <div className="container d-flex justify-content-start">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
              aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1">
            <ul className="d-flex flex-row nav navbar-nav">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active" : undefined
                  }
                  to="/">
                  صفحه اصلی
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active" : undefined
                  }
                  to="/courses">
                  دوره ها
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active" : undefined
                  }
                  to="/course">
                  اموزش react
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active" : undefined
                  }
                  to="/profile">
                  پروفایل کاربری
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
