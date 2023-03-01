import React from "react";
import NewsLetter from "../NewsLetter/NewsLetter";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "./Footer.css";
export default function Footer() {
  return (
    <>
      <NewsLetter />

      <div className="container-fluid padding-reset" id="fooer-section">
        <div className="row" id="custom-footer-row">
          <div className="col-12 col-lg-4 padding-reset">
            <div id="aboutus-footer">
              <p>درباره ما</p>
            </div>
            <p className="aboutus-text">
              سایت ما مرجعی تخصصی برای یادگیری طراحی وب و برنامه نویسی است. ما
              در سایت ما با بهره گیری از نیروهای متخصص، باتجربه و با تحصیلات
              آکادمیک بالا، تمام تلاش خود را برای تهیه و تولید آموزش های با
              کیفیت و حرفه ای انجام می دهیم. پیشنهاد می کنیم تا حرفه ای شدن با
              سایت ما همراه باشید!
            </p>
          </div>
          <div className="col-12 col-lg-4 padding-reset">
            <div id="sign-footer">
              <p>نمادها</p>
            </div>
            <ul className="list-inline" id="nemad-style">
              <li>
                <a href="#">
                  <img src="/assets/img/b1.png" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/assets/img/b3.png" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/assets/img/b5.png" />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-lg-4 padding-reset">
            <div id="comment-fooer">
              <p>نظـرات کاربران</p>
            </div>
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              modules={[Autoplay]}
              // autoplay={{
              //   delay: 2000,
              //   disableOnInteraction: false,
              // }}
              // loop={true}
              >
              <SwiperSlide>
                <div className="item">
                  <img
                    className="img-circle user-avatar margin-center"
                    src="/assets/img/gravatar.png"
                    width="60"
                    height="60"
                  />
                  <p className="slider-random-comment">
                    دوره بسیار عالی و مورد نیاز برای طراحی سایت های واکنش گرا
                    واقعا دوره خوب و لازمی بود من خیلی استفاده کردم.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="item">
                  <img
                    className="img-circle user-avatar margin-center"
                    src="/assets/img/gravatar.png"
                    width="60"
                    height="60"
                  />
                  <p className="slider-random-comment">
                    دوره بسیار عالی و مورد نیاز برای طراحی سایت های واکنش گرا
                    واقعا دوره خوب و لازمی بود من خیلی استفاده کردم.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="item">
                  <img
                    className="img-circle user-avatar margin-center"
                    src="/assets/img/gravatar.png"
                    width="60"
                    height="60"
                  />
                  <p className="slider-random-comment">
                    دوره بسیار عالی و مورد نیاز برای طراحی سایت های واکنش گرا
                    واقعا دوره خوب و لازمی بود من خیلی استفاده کردم.
                  </p>
                </div>
              </SwiperSlide>
            </Swiper> 
          </div>
        </div>
        <div>
          <div className="col-sm-12 col-md-12 col-lg-12 padding-reset" style={{zIndex : '99'}}>
            <p className="copy-right-text">
              <i className="material-icons">copyright</i>کليه حقوق محصولات و
              محتوای اين سایت متعلق به سایت ما می باشد و هر گونه کپی برداری از
              محتوا و محصولات سایت غیر مجاز و بدون رضایت ماست.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
