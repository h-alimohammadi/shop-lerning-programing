import React from "react";
import CourseBox from "../CourseBox/CourseBox";

export default function MainContent() {
  return (
    <>
      <div className="container p-0  wrapper-margin-top ">
        <div className="row p-0 ">
          <div className="col-12 p-0">
            <div className="content-header">مطالب آموزشی</div>
            <div className="main-content wrapper-free-styles">
              <div className="dropdown text-right " id="custom-dropdown">
                {/* id="content-filter" */}
                <button
                  id="btn-filter-content"
                  className="btn btn-default dropdown-toggle"
                  type="button"
                  data-toggle="dropdown">
                  فیلتر عناوین آموزشی...
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a href="all-post">همه مطالب</a>
                  </li>
                  <li>
                    <a href="test">محبوب ترین مطالب</a>
                  </li>
                  <li>
                    <a href="#">پربازدید ترین مطالب</a>
                  </li>
                </ul>
                <img id="loading" src="assets/img/loader.gif" />
              </div>

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
                  />
                </div>
              </div>
              <div className="all-posts">
                <a href="#" className="btn btn-success">
                  همه مطالب<i className="material-icons">arrow_back</i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
