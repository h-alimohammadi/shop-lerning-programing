import React from "react";
import Footer from "../../Components/Footer/Footer";
import Menu from "../../Components/Menu/Menu";
import Topbar from "../../Components/Topbar/Topbar";
import CourseBox from "../../Components/CourseBox/CourseBox";

import "./Courses.css";
export default function Courses() {
  return (
    <>
      <Topbar />
      <Menu />
      <div className="container wrapper-margin-top ">
        <div className="row">
          <div className="col-12">
            <div className="content-header" id="content-header-all-post">
              <span className="count-topics">کل مطالب منتشر شده : 20</span>
            </div>
            <div className="main-content wrapper-free-styles">
              <div className="load-content ">
                <div className="row">
                  <CourseBox
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
                  <CourseBox
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
                  />{" "}
                  <CourseBox
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
                  />{" "}
                  <CourseBox
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
                  />{" "}
                  <CourseBox
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
                  />{" "}
                  <CourseBox
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
                  />{" "}
                  <CourseBox
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
                  />{" "}
                  <CourseBox
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
                  />{" "}
                  <CourseBox
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
                  />{" "}
                  <CourseBox
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
                </div>
              </div>
              <nav className="text-center">
                <ul className="pagination list-inline page">
                  <li className="active">
                    <a href="#">1</a>
                  </li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">4</a>
                  </li>
                  <li>
                    <a href="#">5</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
