import React from "react";
import Footer from "../../Components/Footer/Footer";
import Menu from "../../Components/Menu/Menu";
import Topbar from "../../Components/Topbar/Topbar";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./SingleCourse.css";
import CourseBox from "../../Components/CourseBox/CourseBox";
import Comment from "../../Components/Comment/Comment";
import TabNavigations from "../../Components/TabNavigations/TabNavigations";
import { Link } from "react-router-dom";
import SingleCourseBox from "./SingleCourseBox";
import styles from './SingleCourse.module.css';
export default function SingleCourse() {
  return (
    <>
      <Topbar />
      <Menu />
      <div className="container-fluid">
        <div className="row">
          <div className="col-12" id="single-landing-layer-container">
            <div className="single-landing-layer">
              <div className="col-12 col-lg-8">
                <img
                  className="img-responsive img-circle"
                  id="post-author-image"
                  src="/assets/img/24333.jpg"
                  width="120"
                  height="120"
                />
                <h1>
                  <a href="#">آموزش اسکریپت نویسی php - جلسه اول - مقدمات</a>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container wrapper-margin-top">
        <div className="row">
          <div className="col-12 col-lg-9 ">
            <div className="single-content wrapper-free-styles">
              <div className="single-post-meta">
                <ul className="list-inline">
                  <li>
                    <i className="material-icons">perm_identity</i> حسین علی
                    محمدی
                  </li>
                  <li>
                    <i className="material-icons">date_range</i> 1396-09-23
                  </li>
                  <li>
                    <i className="material-icons">remove_red_eye</i> 121
                  </li>
                  <li>
                    <i className="material-icons">comment</i> 32
                  </li>
                  <li>
                    <a href="#">
                      <i className="material-icons">border_color</i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="all-content">
                <p>
                  همونطور که اطلاع دارید در جلسه قبل بحث مربوط به Reflect API رو
                  پیش بردیم و توضیحات کاملی در مورد متدهای defineProperty و
                  getOwnPropertyDescriptor و deleteProperty و has دادیم. در این
                  جلسه میخوایم کار با Reflect API رو به اتمام برسانیم و تعدادی
                  از متدهای دیگر اون رو با هم بررسی کنیم. خب در اینجا میخوایم
                  دیگر متدهای مربوط به بازتاب رو آموزش بدیم. متد
                  Reflect.getPrototypeOf این متد همانند Object.getPrototypeOf
                  مقدار prototype شئ مورد نظرتون رو برگشت میده و میتونین از اون
                  استفاده کنید. این متد فقط یک ورودی رو دریافت میکنه و اون هم شئ
                  مورد نظر برای دریافت prototype می باشد. اگر شئ مورد نظر ویژگی
                  های به ارث برده شده نداشته باشد، مقدار null برگشت داده میشه.
                  همچنین اگر ورودی مورد نظر شئ نباشد یک ارور در Console نمایش
                  داده خواهد شد.
                </p>
                <img src="/assets/img/php.jpg" />
                <video
                  id="my-player"
                  className="video-js my-video-js-style"
                  controls
                  preload="auto"
                  data-setup="{}">
                  <source
                    src="//vjs.zencdn.net/v/oceans.mp4"
                    type="video/mp4"></source>
                  <p className="vjs-no-js">
                    To view this video please enable JavaScript, and consider
                    upgrading to a web browser that
                    <a
                      href="http://videojs.com/html5-video-support/"
                      target="_blank">
                      supports HTML5 video
                    </a>
                  </p>
                </video>
                <div className="text-center">
                  <a href="#" className="btn btn-info ml-3">
                    دانلود ویدئو
                  </a>
                  <a href="#" className="btn btn-info">
                    دانلود فایل
                  </a>
                </div>
              </div>
              <div className="tags-section">
                <ul className="list-inline tags text-right">
                  <li>
                    <a href="#" className="tag">
                      HTML
                    </a>
                  </li>
                  <li>
                    <a href="#" className="tag">
                      CSS
                    </a>
                  </li>
                  <li>
                    <a href="#" className="tag">
                      JavaScript
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="reated-post wrapper-free-styles wrapper-margin-top">
              <div className="related-post-section-title text-center">
                مطالب مرتبط
              </div>
              <Swiper
                modules={[Pagination]}
                slidesPerView={3}
                pagination={{ clickable: true }}>
                <SwiperSlide className="mt-2">
                  <CourseBox
                    slide
                    img="/assets/img/sample.png"
                    title="جلسه اول دوره اسکریپت نویسی php"
                    date="1396-09-15"
                    price={0}
                    like={15}
                    dislike={3}
                    desc="ر جلسه اول این دوره آموزشی می پردازیم به پیاده سازی موارد اولیه..."
                    user={{ name: "حسین علی محمدی" }}
                    view={1850}
                    comment={200}
                  />
                </SwiperSlide>
                <SwiperSlide className="mt-2">
                  <CourseBox
                    slide
                    img="/assets/img/sample.png"
                    title="جلسه اول دوره اسکریپت نویسی php"
                    date="1396-09-15"
                    price={0}
                    like={15}
                    dislike={3}
                    desc="ر جلسه اول این دوره آموزشی می پردازیم به پیاده سازی موارد اولیه..."
                    user={{ name: "حسین علی محمدی" }}
                    view={1850}
                    comment={200}
                  />
                </SwiperSlide>
                <SwiperSlide className="mt-2">
                  <CourseBox
                    slide
                    img="/assets/img/sample.png"
                    title="جلسه اول دوره اسکریپت نویسی php"
                    date="1396-09-15"
                    price={0}
                    like={15}
                    dislike={3}
                    desc="ر جلسه اول این دوره آموزشی می پردازیم به پیاده سازی موارد اولیه..."
                    user={{ name: "حسین علی محمدی" }}
                    view={1850}
                    comment={200}
                  />
                </SwiperSlide>
                <SwiperSlide className="mt-2">
                  <CourseBox
                    slide
                    img="/assets/img/sample.png"
                    title="جلسه اول دوره اسکریپت نویسی php"
                    date="1396-09-15"
                    price={0}
                    like={15}
                    dislike={3}
                    desc="ر جلسه اول این دوره آموزشی می پردازیم به پیاده سازی موارد اولیه..."
                    user={{ name: "حسین علی محمدی" }}
                    view={1850}
                    comment={200}
                  />
                </SwiperSlide>
                <SwiperSlide className="mt-2">
                  <CourseBox
                    slide
                    img="/assets/img/sample.png"
                    title="جلسه اول دوره اسکریپت نویسی php"
                    date="1396-09-15"
                    price={0}
                    like={15}
                    dislike={3}
                    desc="ر جلسه اول این دوره آموزشی می پردازیم به پیاده سازی موارد اولیه..."
                    user={{ name: "حسین علی محمدی" }}
                    view={1850}
                    comment={200}
                  />
                </SwiperSlide>
                <SwiperSlide className="mt-2">
                  <CourseBox
                    slide
                    img="/assets/img/sample.png"
                    title="جلسه اول دوره اسکریپت نویسی php"
                    date="1396-09-15"
                    price={0}
                    like={15}
                    dislike={3}
                    desc="ر جلسه اول این دوره آموزشی می پردازیم به پیاده سازی موارد اولیه..."
                    user={{ name: "حسین علی محمدی" }}
                    view={1850}
                    comment={200}
                  />
                </SwiperSlide>
              </Swiper>
            </div>
            <Comment />
          </div>

          <div className="col-12 col-lg-3">
            <div className="wrapper-free-styles">
              <TabNavigations
                tabclass="tab-courses"
                tabs={["محبوب تریین ها", "داغ ترین ها", "تصادفی"]}
                contents={[
                  <ul
                    className="list-group post-publish-list tab-courses text-right"
                    id="single-post-publish-list">
                    <SingleCourseBox title="دوره مجازی react" />
                    <SingleCourseBox title="دوره مجازی react" />
                    <SingleCourseBox title="دوره مجازی react" />
                    <SingleCourseBox title="دوره مجازی react" />
                  </ul>,
                  <ul
                    className="list-group post-publish-list tab-courses text-right"
                    id="single-post-publish-list">
                    <SingleCourseBox title="دوره مجازی react" />
                    <SingleCourseBox title="دوره مجازی react" />
                    <SingleCourseBox title="دوره مجازی react" />
                    <SingleCourseBox title="دوره مجازی react" />
                    <SingleCourseBox title="دوره مجازی react" />
                  </ul>,
                  <ul
                    className="list-group post-publish-list tab-courses text-right"
                    id="single-post-publish-list">
                    <SingleCourseBox title="دوره مجازی react" />
                    <SingleCourseBox title="دوره مجازی react" />
                    <SingleCourseBox title="دوره مجازی react" />
                    <SingleCourseBox title="دوره مجازی react" />
                  </ul>,
                ]}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
