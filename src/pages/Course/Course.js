import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";
import Footer from "../../Components/Footer/Footer";
import Menu from "../../Components/Menu/Menu";
import Topbar from "../../Components/Topbar/Topbar";

import "./Course.css";
import Media from "../../Components/Comment/Media";
import SendComment from "../../Components/Comment/SendComment";
import Comment from "../../Components/Comment/Comment";
import { Link } from "react-router-dom";
import CourseBox from "./CourseBox";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
export default function Course() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Topbar />
      <Menu />
      {/* single header section */}
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-sm-12 col-md-12 col-lg-12"
            id="course-landing-layer-container">
            <div className="course-landing-layer">
              <div className="col-sm-12 col-md-8 col-md-8 col-md-offset-2 col-lg-offset-2">
                <h1>
                  <a href="#">
                    <i className="material-icons">import_contacts</i>دوره آموزش جامع reactjs
                  </a>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* single content section */}
      <div className="container wrapper-margin-top">
        <div className="row">
          <div className="col-sm-12 col-md-8 col-lg-8 ">
            <div className="single-content wrapper-free-styles text-right">
              <p className="course-detail-title">
                <i className="material-icons">ondemand_video</i>دموی دوره
              </p>
              <div className="all-content" style={{ fontFamily: "isans" }}>
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
                <Box sx={{ width: "100%" }}>
                  <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <Tabs
                      value={value}
                      onChange={handleChange}
                      aria-label="basic tabs example">
                      <Tab
                        className="tab-style"
                        label="جلسات منتشر شده"
                        {...a11yProps(0)}
                      />
                      <Tab
                        className="tab-style"
                        label="سرفصل های دوره"
                        {...a11yProps(1)}
                      />
                      <Tab
                        className="tab-style"
                        label=" دانشجویان دوره"
                        {...a11yProps(2)}
                      />
                    </Tabs>
                  </Box>
                  <TabPanel value={value} index={0}>
                    <ol className="course-parts tab-content-style">
                      <CourseBox title="آموزش react : جلسه اول - معرفی دوره" time="22" />                                         
                      <CourseBox title="آموزش react : جلسه دوم - معرفی دوره" time="22" />                                         
                      <CourseBox title="آموزش react : جلسه سوم - معرفی دوره" time="22" />                                         
                      <CourseBox title="آموزش react : جلسه چهارم - معرفی دوره" time="22" />                                         
                      <CourseBox title="آموزش react : جلسه چنجم - معرفی دوره" time="22" />                                         
                      <CourseBox title="آموزش react : جلسه ششم - معرفی دوره" time="22" />                                         
                      <CourseBox title="آموزش react : جلسه هفتم - معرفی دوره" time="22" />                                         
                    </ol>
                  </TabPanel>
                  <TabPanel
                    className="tab-content-style"
                    value={value}
                    index={1}>
                    <p className="tab-content-style">سرفصل ها</p>
                  </TabPanel>
                  <TabPanel
                    className="tab-content-style"
                    value={value}
                    index={2}>
                    <ul
                      className="list-inline tab-content-style"
                      id="students-name">
                      <li>حسین علی محمدی</li>
                      <li>حسین علی محمدی</li>
                      <li>حسین علی محمدی</li>
                      <li>حسین علی محمدی</li>
                      <li>حسین علی محمدی</li>
                      <li>حسین علی محمدی</li>
                      <li>حسین علی محمدی</li>
                      <li>حسین علی محمدی</li>
                    </ul>
                  </TabPanel>
                </Box>
              </div>
            </div>
            <Comment />
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="wrapper-free-styles" id="course-detail-sidebar">
              <p>جزئیات دوره</p>
              <ul className="list-group text-right">
                <li>
                  <i className="material-icons">timelapse</i>طول دوره
                  <span>30 ساعت</span>
                </li>
                <li>
                  <i className="material-icons">supervisor_account</i>دانشجویان
                  <span>99 نفر</span>
                </li>
                <li>
                  <i className="material-icons">widgets</i>وضعیت دوره
                  <span className="course-status">پیش ثبت نام</span>
                </li>
                <li>
                  <i className="material-icons">done</i>شروع دوره{" "}
                  <span className="course-start-time">1 دی ماه 1396</span>
                </li>
              </ul>
              <div className="course-discount">تخفیف 30%</div>
              <span className="course-price">
                شهریه دوره :<strike className="main-price">150</strike>
                <span>135</span>
                هزار تومان
              </span>
              <form>
                <input type="hidden" value="1290000" />
                <input
                  type="submit"
                  className="btn btn-success btn-block"
                  value="ثبت نام"
                />
              </form>
            </div>
            <div className="wrapper-free-styles" id="teacher-resume">
              <p>مدرس دوره</p>
              <div className="course-teacher">
                <img
                  src="assets/img/24333.jpg"
                  className="img-responsive img-circle"
                  height="100"
                  width="100"
                />
              </div>
              <div className="course-teacher-name text-center">حسین علی محمدی</div>
              <span className="about-teacher">
                طراح و برنامه نویس وب 4 سال سابقه برنامه نویسی بک اند php و
                لاراول . 4سال سابقه برنامه نویسی فراند js-react
              </span>
            </div>
            <div className="wrapper-free-styles" id="prerequisite-course">
              <p>پیشنیازها</p>
              <span className="prerequisite">
                پیش نیاز این دوره آشنایی مقدماتی با php و همچنین CSS و HTML می
                باشد.{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
