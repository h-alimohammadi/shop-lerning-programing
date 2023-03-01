import React from "react";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./NewTopic.css";
import NewTopicBox from "./NewTopicBox";
import RandomTopicBox from "./RandomTopicBox";
import TitleTopic from "./TitleTopic";
export default function NewTopic() {
  return (
    <>
      <div className="container p-0 wrapper-margin-top">
        <div className="row">
          <div className="col-12 wrapper-free-styles main-wrapper ">
            <div className="col-12  col-lg-6">
              <TitleTopic title="جدید ترین مطالب آموزشی" icon="library_books" />
              <div className="post-publish">
                <ul className="new-topic list-group text-right post-publish-list">
                  <NewTopicBox
                    title=" دوره مجازی اسکریپت نویسی php : جلسه اول - معرفی دوره"
                    time="32 دقیقه"
                    date="1396-09-21"
                  />
                  <NewTopicBox
                    title=" دوره مجازی اسکریپت نویسی php : جلسه اول - معرفی دوره"
                    time="32 دقیقه"
                    date="1396-09-21"
                  />
                  <NewTopicBox
                    title=" دوره مجازی اسکریپت نویسی php : جلسه اول - معرفی دوره"
                    time="32 دقیقه"
                    date="1396-09-21"
                  />
                  <NewTopicBox
                    title=" دوره مجازی اسکریپت نویسی php : جلسه اول - معرفی دوره"
                    time="32 دقیقه"
                    date="1396-09-21"
                  />
                  <NewTopicBox
                    title=" دوره مجازی اسکریپت نویسی php : جلسه اول - معرفی دوره"
                    time="32 دقیقه"
                    date="1396-09-21"
                  />
                </ul>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <TitleTopic title="مطالب تصادفی" icon="refresh" />
              <div className="post-random">
                <ul
                  className="list-group text-right"
                  style={{ height: "400px" }}
                  id="vertical-ticker">
                  <Swiper
                    direction={"vertical"}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Autoplay]}
                    loop={true}
                    slidesPerView={4}
                    // autoplay={{
                    //   delay: 2000,
                    //   disableOnInteraction: false,
                    // }}
                    className="mySwiper">
                    <SwiperSlide>
                      <RandomTopicBox
                        image="/assets/img/php.jpg"
                        title="دوره طراحی تجربه کاربری (جلسه یازدهم)"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <RandomTopicBox
                        image="/assets/img/php.jpg"
                        title="دوره طراحی تجربه کاربری (جلسه یازدهم)"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <RandomTopicBox
                        image="/assets/img/php.jpg"
                        title="دوره طراحی تجربه کاربری (جلسه یازدهم)"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <RandomTopicBox
                        image="/assets/img/php.jpg"
                        title="دوره طراحی تجربه کاربری (جلسه یازدهم)"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <RandomTopicBox
                        image="/assets/img/php.jpg"
                        title="دوره طراحی تجربه کاربری (جلسه یازدهم)"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <RandomTopicBox
                        image="/assets/img/php.jpg"
                        title="دوره طراحی تجربه کاربری (جلسه یازدهم)"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <RandomTopicBox
                        image="/assets/img/php.jpg"
                        title="دوره طراحی تجربه کاربری (جلسه یازدهم)"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <RandomTopicBox
                        image="/assets/img/php.jpg"
                        title="دوره طراحی تجربه کاربری (جلسه یازدهم)"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <RandomTopicBox
                        image="/assets/img/php.jpg"
                        title="دوره طراحی تجربه کاربری (جلسه یازدهم)"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <RandomTopicBox
                        image="/assets/img/php.jpg"
                        title="دوره طراحی تجربه کاربری (جلسه یازدهم)"
                      />
                    </SwiperSlide>
                  </Swiper>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
