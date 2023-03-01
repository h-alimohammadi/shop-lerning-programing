import React from 'react'
import Media from './Media'
import SendComment from './SendComment'

export default function Comment() {
  return (
    <div className="comment-section wrapper-free-styles wrapper-margin-top">
    <div className="comment-section-title text-center">
      دیدگاه کاربران
    </div>

    <Media
      user="حسین علی محمدی"
      date="1396-09-23"
      text="آموزش اسکریپت نویسی php چه زمانی برگزار خواهد شد؟"
    />
    <Media
      answer
      user="حسین علی محمدی"
      date="1396-09-23"
      text="آموزش اسکریپت نویسی php چه زمانی برگزار خواهد شد؟"
    />
    <Media
      answer
      user="حسین علی محمدی"
      date="1396-09-23"
      text="آموزش اسکریپت نویسی php چه زمانی برگزار خواهد شد؟"
    />

    <SendComment />
  </div>
  )
}
