import React from "react";
import Footer from "../../Components/Footer/Footer";
import Menu from "../../Components/Menu/Menu";
import Topbar from "../../Components/Topbar/Topbar";

import "./LoginRegister.css";
export default function LoginRegister() {
  return (
    <>
      <Topbar />
      <Menu />
      <div className="container wrapper-free-styles wrapper-margin-top">
        <div className="row">
            <div className="col-12 col-lg-6">
              <div className="panel panel-info wrapper-margin-top">
                <div className="panel-heading" id="panel-login-heading">
                  ورود به سایت
                </div>
                <div className="panel-body">
                  <form className="form-horizontal" id="login-register-form">
                    <div className="form-group input-container">
                      <div className="col-sm-10 col-sm-offset-1">
                        <input
                          type="email"
                          className="form-control input-lg"
                          placeholder="ایمیل خود را وارد نمایید..."
                        />
                        <i className="material-icons input-icon">email</i>
                      </div>
                    </div>
                    <div className="form-group input-container">
                      <div className="col-sm-10 col-sm-offset-1">
                        <input
                          type="password"
                          id="password"
                          data-toggle="password"
                          className="form-control input-lg"
                          placeholder="کلمه خود را وارد نمایید..."
                        />
                        <i className="material-icons input-icon">lock_open</i>
                      </div>
                    </div>
                    <div className="form-group input-container text-right">
                      <div className="col-sm-10 col-sm-offset-1">
                        <div className="checkbox">
                          <label className="checkbox-container">
                            مرا بخاطر بسپار
                            <input type="checkbox" />
                            <span className="checkmark-login"></span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="form-group input-container text-right">
                      <div className="col-sm-10 col-sm-offset-1">کد امنیتی</div>
                    </div>
                    <div className="form-group input-container">
                      <div className="col-sm-6 col-sm-offset-3 text-center">
                        <button type="submit" className="btn btn-info btn-block">
                          ورود
                        </button>
                      </div>
                    </div>
                    <div className="form-group input-container">
                      <div className="col-sm-6 col-sm-offset-3 text-center">
                        <a href="#" className="forget-password">
                          <i className="material-icons">lock</i>بازیابی کلمه عبور
                        </a>
                      </div>
                    </div>
                    <div className="google-login text-center">
                      <a href="#">
                        <span className="google-plus-btn">
                          ورود از طریق اکانت گوگل
                          <span>
                            <img src="assets/img/google-plus-login-icon.png" />
                          </span>
                        </span>
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="panel panel-info wrapper-margin-top">
                <div className="panel-heading" id="panel-register-heading">
                  ثبت نام در سایت
                </div>
                <div className="panel-body">
                  <form className="form-horizontal" id="login-register-form">
                    <div className="form-group input-container">
                      <div className="col-sm-10 col-sm-offset-1">
                        <input
                          type="text"
                          className="form-control input-lg"
                          placeholder="نام خود را وارد نمایید..."
                        />
                        <i className="material-icons input-icon">perm_identity</i>
                      </div>
                    </div>
                    <div className="form-group input-container">
                      <div className="col-sm-10 col-sm-offset-1">
                        <input
                          type="text"
                          className="form-control input-lg"
                          placeholder="نام خانوادگی خود را وارد نمایید..."
                        />
                        <i className="material-icons input-icon">
                          supervisor_account
                        </i>
                      </div>
                    </div>
                    <div className="form-group input-container">
                      <div className="col-sm-10 col-sm-offset-1">
                        <input
                          type="email"
                          className="form-control input-lg"
                          placeholder="نام کاربری خود را وارد نمایید..."
                        />
                        <i className="material-icons input-icon">face</i>
                      </div>
                    </div>
                    <div className="form-group input-container">
                      <div className="col-sm-10 col-sm-offset-1">
                        <input
                          type="email"
                          className="form-control input-lg"
                          placeholder="ایمیل خود را وارد نمایید..."
                        />
                        <i className="material-icons input-icon">email</i>
                      </div>
                    </div>
                    <div className="form-group input-container">
                      <div className="col-sm-10 col-sm-offset-1">
                        <input
                          type="email"
                          className="form-control input-lg"
                          placeholder="تکرار ایمیل..."
                        />
                        <i className="material-icons input-icon">email</i>
                      </div>
                    </div>
                    <div className="form-group input-container">
                      <div className="col-sm-10 col-sm-offset-1">
                        <input
                          type="password"
                          className="form-control input-lg"
                          id="password"
                          data-toggle="password"
                          placeholder="کلمه عبور  خود را وارد نمایید..."
                        />
                        <i className="material-icons input-icon">lock_open</i>
                      </div>
                    </div>
                    <div className="form-group input-container">
                      <div className="col-sm-10 col-sm-offset-1">
                        <input
                          type="password"
                          className="form-control input-lg"
                          id="password"
                          data-toggle="password"
                          placeholder="تکرار کلمه عبور..."
                        />
                        <i className="material-icons input-icon">lock_open</i>
                      </div>
                    </div>

                    <div className="form-group input-container">
                      <div className="col-sm-6 col-sm-offset-3 text-center">
                        <button type="submit" className="btn btn-success btn-block">
                          ثبت نام
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
