import React from "react";

export default function TicketBox({text,date}) {
  return (
    <div className="ticket-details-wrapper">
      <img
        width="70px"
        height="70px"
        className="img-circle sender-ticket-image"
        src="/assets/img/24333.jpg"
      />
      <span>ارسال شده در تاریخ : {date}</span>
      <span>
        <a
          href="#ticket-answer1"
          className="btn btn-warning send-answer-ticket"
          data-toggle="collapse">
          ارسال پاسخ
        </a>
      </span>

      <div className="ticket-text">
        <p>
          {text}
        </p>
      </div>
      <div className="collapse ticket-answer" id="ticket-answer1">
        <form className="">
          <div className="alert alert-warning text-center">
            پیام شما با موفقیت ارسال شد پس از بررسی پاسخ داده خواهد شد...
          </div>
          <div className="form-group">
            <textarea className="form-control" rows="10">
              dadasdasdasdasdsad
            </textarea>
          </div>
          <div className="form-group text-left">
            <input type="submit" className="btn btn-success" value="ارسال پیام" />
          </div>
        </form>
      </div>
    </div>
  );
}
