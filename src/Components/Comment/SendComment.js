import React from 'react'

export default function SendComment() {
  return (
    <div className="send-comment">
                <div className="alert alert-danger text-center">
                  کاربر گرامی برای ارسال دیدگاه خود ابتدا باید در سایت{" "}
                  <a href="#">لاگین</a> نمایید
                </div>
                <div className="panel panel-primary">
                  <div className="panel-heading text-right">
                    <i className="material-icons">mode_comment</i>ارسال دیدگــاه
                  </div>
                  <div className="panel-body">
                    <p className='text-right'>
                      حسین علی محمدی عزیز، شما لاگین هستید و می توانید سوال و یا
                      دیدگاه خود را برای ما ارسال نمایید :
                    </p>
                    <form>
                      <textarea
                        className="form-control"
                        rows="8"
                        placeholder="متن دیدگاه شما...">
                        {" "}
                      </textarea>
                      <br />
                      <button className="btn btn-success comment-btn-send">
                        ارسال دیدگاه
                      </button>
                    </form>
                  </div>
                </div>
              </div>
  )
}
