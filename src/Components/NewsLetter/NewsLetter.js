import React from "react";

import "./NewsLetter.css";
export default function NewsLetter() {
  return (
    <>
      <div className="container-fluid wrapper-margin-top" id="newsletter-section">
        <div className="align-items-center d-flex justify-content-center row">
          <div className="col-12 d-flex flex-column justify-content-center">
            <p className="newletter-title">
              با اشتراک در خبرنامه از آخرین عناوین آموزشی مطلع شوید...
            </p>
            <form className="d-flex form-inline justify-content-center">
              <div className="input-group input-group-lg">
                <input
                  type="text"
                  className="form-control"
                  placeholder="ایمیل خود را وارد نمایید..."
                />
                <span className="input-group-btn">
                  <button className="btn btn-info" type="button">
                    اشتراک
                  </button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
