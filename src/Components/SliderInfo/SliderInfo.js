import React from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./SliderInfo.css";
import InfoBox from "./InfoBox";
export default function SliderInfo() {
  return (
    <>
      <div className="container p-0" id="custom-slider-info-container">
        <div className="row">
          <div className="col-12 col-lg-4" id="info-section">
            <div className="wrapper-free-styles ">
            <div className="info-title-section">
                  <i className="material-icons">info_outline</i>اطلاعیه ها
                </div>
              <InfoBox
                icon="date_range"
                title="ثبت نام دوره ی جامع آموزش برنامه نویسی ربات تلگرام با PHP آغاز شد! برای شد"
                data="1396-09-15"
              />
              <InfoBox
                icon="date_range"
                title="ثبت نام دوره ی جامع آموزش برنامه نویسی ربات تلگرام با PHP آغاز شد! برای شد"
                data="1396-09-15"
              />
              <InfoBox
                icon="date_range"
                title="ثبت نام دوره ی جامع آموزش برنامه نویسی ربات تلگرام با PHP آغاز شد! برای شد"
                data="1396-09-15"
              />                     
            </div>
          </div>
          <div className="col-12 col-lg-8">
            <Swiper
              modules={[Pagination]}
              slidesPerView={1}
              pagination={{ clickable: true }}>
              <SwiperSlide>
                <img
                  className="img-fluid w-100"
                  src="assets/img/slider1.png"
                  width="60"
                  height="60"
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img
                  className="img-fluid w-100"
                  src="assets/img/slider2.jpg"
                  width="60"
                  height="60"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="img-fluid w-100"
                  src="assets/img/slider3.jpg"
                  width="60"
                  height="60"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
