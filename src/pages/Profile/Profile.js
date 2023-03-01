import Footer from "../../Components/Footer/Footer";
import Menu from "../../Components/Menu/Menu";
import Topbar from "../../Components/Topbar/Topbar";
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./Profile.css";
import TicketBox from "../../Components/TicketBox/TicketBox";
import ProfileCourseBox from "./ProfileCourseBox";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      className="w-100"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function Profile() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Topbar />
      <Menu />
      <div className="container wrapper-free-styles wrapper-margin-top">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12" id="profile-content">
            <h3>پروفایل کاربری</h3>
            <div className="col-12 col-lg-12" id="profile-menu">
              <Box
                sx={{
                  flexGrow: 1,
                  bgcolor: "background.paper",
                  display: "flex",
                  fontSize: "20px",
                }}>
                <Tabs
                  orientation="vertical"
                  value={value}
                  onChange={handleChange}
                  aria-label="Vertical tabs example"
                  sx={{ borderRight: 1, borderColor: "divider" }}>
                  <Tab
                    className="tab-profile"
                    label="شناسنامه شما"
                    {...a11yProps(0)}
                  />
                  <Tab
                    className="tab-profile"
                    label="دوره های شما"
                    {...a11yProps(1)}
                  />
                  <Tab
                    className="tab-profile"
                    label="ارسال تیکت"
                    {...a11yProps(2)}
                  />
                  <Tab
                    className="tab-profile"
                    label="پیام های شما"
                    {...a11yProps(3)}
                  />
                  <Tab
                    className="tab-profile"
                    label="تراکنش های شما"
                    {...a11yProps(3)}
                  />
                </Tabs>

                <TabPanel value={value} index={0}>
                  <div className="profile-img-holder text-center">
                    <img
                      width="130px"
                      height="150px"
                      className="img-circle"
                      src="assets/img/24333.jpg"
                    />
                  </div>
                  <form className="form-horizontal">
                    <div className="form-group input-container">
                      <div className="col-sm-10 col-sm-offset-1 input_container">
                        <input
                          type="email"
                          className="form-control input-lg"
                          placeholder="نام خود را وارد نمایید..."
                        />
                        <i className="material-icons input-icon">
                          perm_identity
                        </i>
                      </div>
                    </div>

                    <div className="form-group input-container">
                      <div className="col-sm-10 col-sm-offset-1 input_container">
                        <input
                          type="email"
                          className="form-control input-lg"
                          placeholder="نام خانوادگی خود را وارد نمایید..."
                        />
                        <i className="material-icons input-icon">
                          supervisor_account
                        </i>
                      </div>
                    </div>
                    <div className="form-group input-container">
                      <div className="col-sm-10 col-sm-offset-1 input_container">
                        <input
                          type="email"
                          className="form-control input-lg"
                          placeholder="نام کاربری خود را وارد نمایید..."
                        />
                        <i className="material-icons input-icon">face</i>
                      </div>
                    </div>
                    <div className="form-group input-container">
                      <div className="col-sm-10 col-sm-offset-1 input_container">
                        <input
                          type="email"
                          className="form-control input-lg"
                          placeholder="ایمیل خود را وارد نمایید..."
                        />
                        <i className="material-icons input-icon">email</i>
                      </div>
                    </div>

                    <div className="form-group input-container">
                      <div
                        className=" col-sm-12 text-center"
                        style={{ marginTop: "20px", marginBottom: "5px" }}>
                        <div className="col-sm-6 col-sm-offset-3">
                          <button
                            type="submit"
                            className="btn btn-success btn-block">
                            بروزرسانی
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <ul className="profile-topic list-group">
                    <ProfileCourseBox title=" دوره آموزش اسکریپت نویس PHP" />
                    <ProfileCourseBox title=" دوره آموزش اسکریپت نویس PHP" />
                    <ProfileCourseBox title=" دوره آموزش اسکریپت نویس PHP" />
                    <ProfileCourseBox title=" دوره آموزش اسکریپت نویس PHP" />
                    <ProfileCourseBox title=" دوره آموزش اسکریپت نویس PHP" />
                    <ProfileCourseBox title=" دوره آموزش اسکریپت نویس PHP" />
                    <ProfileCourseBox title=" دوره آموزش اسکریپت نویس PHP" />
                  </ul>
                </TabPanel>
                <TabPanel value={value} index={2}>
                  <form className="form-tiket">
                    <div className="row">
                      <div className="col-sm-8">
                        <div className="form-group">
                          <label>عنوان تیکت*</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="عنوان تیکت..."
                          />
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="form-group">
                          <label>اولویت*</label>
                          <select className="form-control">
                            <option value="0">عادی</option>
                            <option value="1">مهم</option>
                            <option value="2">بسیار مهم</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <div className="form-group">
                          <label>پـیام شما*</label>
                          <textarea
                            className="form-control"
                            rows="10"></textarea>
                        </div>
                      </div>
                      <div className="col-sm-12">
                      <button 
                            type="submit"
                            className="btn btn-success">
                            ارسال
                          </button>
                      </div>

                    </div>
                  </form>
                </TabPanel>
                <TabPanel value={value} index={3}>
                  <div className="alert alert-danger text-center">
                    در حال حاضر پیامی ندارید!
                  </div>
                  <div className="panel-group" id="accordion">
                    <div className="panel panel-info">
                      <div className="panel-heading" id="">
                        <a
                          href="#section1"
                          data-toggle="collapse"
                          data-parent="#accordion">
                          موضوع تیکت :درخواست راهنمایی در دور مورد کوئری استرینگ
                          ها
                        </a>
                        <span className="ticket-no">
                          شماره تیکت : 1234567890
                        </span>
                      </div>
                      <div
                        id="section1"
                        className="panel-collapse collapse in custom-panel-collapse">
                        <TicketBox
                          date="20-12-1396"
                          text="ممنون از شما بابت دوره های خوبتون خیلی عالی بود"
                        />
                        <TicketBox
                          date="20-12-1396"
                          text="ممنون از شما بابت دوره های خوبتون خیلی عالی بود"
                        />
                        <TicketBox
                          date="20-12-1396"
                          text="ممنون از شما بابت دوره های خوبتون خیلی عالی بود"
                        />
                        <TicketBox
                          date="20-12-1396"
                          text="ممنون از شما بابت دوره های خوبتون خیلی عالی بود"
                        />
                      </div>
                    </div>
                    <div className="panel panel-info">
                      <div className="panel-heading" id="">
                        <a
                          href="#section2"
                          data-toggle="collapse"
                          data-parent="#accordion">
                          موضوع تیکت : سوال در مورد نحوه شرکت در دوره
                        </a>
                      </div>
                      <div
                        id="section2"
                        className="panel-collapse collapse custom-panel-collapse">
                        dasdasdasdasdasdas
                      </div>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel value={value} index={4}>
                  <table
                    className="table table-bordered table-hover  orders"
                    id="user-transaction-table">
                    <tr>
                      <th>شماره سفارش</th>
                      <th>شماره تراکنش</th>
                      <th>تاریخ پرداخت</th>
                      <th>زمان پرداخت</th>
                      <th>تاریخ پرداخت</th>
                      <th>مبلغ</th>
                      <th>وضعیت</th>
                    </tr>
                    <tr>
                      <td>139609251228</td>
                      <td>12356982510</td>
                      <td>1396-09-28</td>
                      <td>12:21:23</td>
                      <td>1396-09-28</td>
                      <td>89000</td>
                      <td>پرداخت شده</td>
                    </tr>
                    <tr>
                      <td>139609251228</td>
                      <td>12356982510</td>
                      <td>1396-09-28</td>
                      <td>12:21:23</td>
                      <td>1396-09-28</td>
                      <td>89000</td>
                      <td>پرداخت شده</td>
                    </tr>
                    <tr>
                      <td>139609251228</td>
                      <td>12356982510</td>
                      <td>1396-09-28</td>
                      <td>12:21:23</td>
                      <td>1396-09-28</td>
                      <td>89000</td>
                      <td>پرداخت شده</td>
                    </tr>
                    <tr>
                      <td>139609251228</td>
                      <td>12356982510</td>
                      <td>1396-09-28</td>
                      <td>12:21:23</td>
                      <td>1396-09-28</td>
                      <td>89000</td>
                      <td>پرداخت نشده</td>
                    </tr>
                    <tr>
                      <td>139609251228</td>
                      <td>12356982510</td>
                      <td>1396-09-28</td>
                      <td>12:21:23</td>
                      <td>1396-09-28</td>
                      <td>89000</td>
                      <td>پرداخت شده</td>
                    </tr>
                  </table>
                </TabPanel>
              </Box>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
