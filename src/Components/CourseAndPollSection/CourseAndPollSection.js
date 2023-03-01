import React from "react";
import Ads from "./Ads";
import CourseInfo from "./CourseInfo";
import Progress from "./Progress";
import RadioBTN from "./RadioBTN";

import './CourseAndPollSection.css';
export default function CourseAndPollSection() {
  return (
    <>
      <div className="container wrapper-margin-top">
        <div className="row">
          <div className="col-12 col-lg-8">
            <div className="col-12 main-wrapper box-shadow">
              <div className="section-title">
                <h5>دوره های آموزشی</h5>
              </div>
              <CourseInfo
                title="جامع ترین دوره آموزش اسکریپت نویسی PHP"
                img="/assets/img/php-course.jpg"
              />
              <CourseInfo
                title="جامع ترین دوره آموزش اسکریپت نویسی PHP"
                img="/assets/img/php-course.jpg"
              />
              <CourseInfo
                title="جامع ترین دوره آموزش اسکریپت نویسی PHP"
                img="/assets/img/php-course.jpg"
              />
              <CourseInfo
                title="جامع ترین دوره آموزش اسکریپت نویسی PHP"
                img="/assets/img/php-course.jpg"
              />

              <div className="text-center " id="more-course">
                <a href="#" className="btn btn-info">
                  موارد بیشتر...
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="col-12 main-wrapper box-shadow">
              <div className="section-title">
                <h5>نظرسنجی</h5>
              </div>
              <div className="vote">
                <div className="alert alert-danger text-center">
                  با برگزاری کدامیک از دورهای زیر موافقید؟
                </div>                
                <form className="text-right">
                  <RadioBTN title=" اسکریپت نویسی PHP"/>
                  <RadioBTN title=" برنامه نویس پایتون"/>
                  <RadioBTN title=" طراحی قالب وردپرس"/>
                  <RadioBTN title=" پلاگین نویسی وردپرس"/>
                  <RadioBTN title=" اصول طراحی قالب در فتوشاپ"/>                  
                  <div className="btn-vote text-center">
                    <input
                      type="submit"
                      className="btn btn-success btn-sm"
                      value="ثبت رای"
                    />
                  </div>
                </form>
              </div>
              <div className="section-title">
                <h5>پیشرفت دوره ها</h5>
              </div>
              <div className="tasks-progressbar text-right">
                <p> دوره آموزشی برنامه نویسی شی گرا </p>
                <Progress count={40}  striped className="progress-bar-success"/>     

                <p> دوره آموزشی فتوشاپ</p>
                <Progress count={20}  striped className="progress-bar-info"/>      
                
                <p>دوره آموزشی طراحی وب</p>
                <Progress count={60}  striped className="progress-bar-warning"/>      

                <p>دوره آموزشی فریم ورک بوت استرپ 4</p>
                <Progress count={55}  striped className="progress-bar-danger"/>      
                
                <p> دوره آموزشی Flex Box و CSS Grid</p>
                <Progress count={80}  striped/>      
              </div>
              <div className="section-title">
                <h5>تبلیــغــات</h5>
              </div>
              <div className="ads text-center">
                <Ads img="/assets/img/ads-banner.jpg" />             
                <Ads img="/assets/img/ads-banner.jpg" />             
                <Ads img="/assets/img/ads-banner.jpg" />             
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
