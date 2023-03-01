import React from "react";
import CounterTime from "../CounterTime/CounterTime";

import "./HeroHeader.css";
import HeroItem from "./HeroItem";
export default function HeroHeader() {



  return (
    <>
      <div className="container-fluid" id="hero-header">
        <div className="d-flex flex-column row">
          <h2>خودساختگی ، کسب تجربه ، ورود به بازار کار</h2>
          <h2>با اساتید مجرب و کارآزموده در خودآموز سایت ما</h2>
          <h2 className="pulsate">
            تخفیف ویژه به مناسب ولادت حضرت محمد (ص) آغاز شد
          </h2>
        </div>
        <div className="d-flex justify-content-center row">
          <div className="bounce text-center">
            <i className="material-icons">keyboard_arrow_down</i>
          </div>
        </div>
        <div className="d-flex justify-content-around row">
         <CounterTime time={2} />
        </div>
        <div
          className="row d-flex justify-content-center "
          id="custom-row-search-filed">
          <div className="col-sm-6 col-md-6 clo-lg-6 w-100">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="دنبال چی می گردی؟"
              />
              <span className="input-group-btn">
                <button type="submit" className="btn btn-info">
                  بگــرد
                </button>
              </span>
            </div>
          </div>
        </div>
        <div className="row hidden-xs" id="custom-row-statictis">
          <div className="col-sm-6 col-md-6 col-lg-6 col-sm-offset-3 col-md-offset-3 col-lg-offset-3 ">
            <HeroItem title="110 مقالات آموزشی" icon="library_books" />
            <HeroItem title="دانشجوها" icon="supervisor_account" />
            <HeroItem title="400 دقیقه آموزش" icon="access_time" />
          </div>
        </div>
      </div>
    </>
  );
}
