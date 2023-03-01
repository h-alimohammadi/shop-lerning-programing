import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import React from "react";

export default function CourseInfo({ title, img }) {
  return (
    <>
      <Accordion style={{ border: "none", boxShadow: "none" }}>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <div className="course-info">
            <div className="course-thumbnail">
              <img className="img-responsive" src={img} />
            </div>
            <div className="course-detail">
              <h3 className="text-center course-title">{title}</h3>
              <a
                href="#course-meta-section"
                data-toggle="collapse"
                className="course-info-tooltip">
                <i
                  className="material-icons"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="جزئیات بیشتر...">
                  more_horiz
                </i>
              </a>
            </div>
          </div>
          {/* <Typography>Accordion 1</Typography> */}
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="course-meta">
              <ul className="list-inline text-center">
                <li>
                  <i className="material-icons">person</i> مدرس :{" "}
                  <span>حسین علیمحمدی</span>
                </li>
                <li>
                  <i className="material-icons">alarm</i> طول دوره :{" "}
                  <span>35 ساعت</span>
                </li>
                <li>
                  <i className="material-icons">clear_all</i> وضعیت دوره :
                  <span>پیش ثبت نام</span>
                </li>
                <li>
                  <i className="material-icons">school</i> دانشجویان :{" "}
                  <span>
                    <span>124</span> نفر{" "}
                  </span>
                </li>
              </ul>
              <div className="text-center">
                <a href="#" className="btn btn-success">
                  خرید این دوره
                </a>
              </div>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
