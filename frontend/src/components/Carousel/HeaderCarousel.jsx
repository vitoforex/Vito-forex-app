import React, { useState } from "react";
import "./styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { GenericButton } from "..";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Images = [
  "https://cdn.pixabay.com/photo/2021/08/06/00/37/stock-trading-6525081_1280.jpg",
  "https://cdn.pixabay.com/photo/2020/11/24/04/13/finance-5771541_1280.jpg",
  "https://cdn.pixabay.com/photo/2015/10/09/20/37/meeting-979899_1280.jpg",
];

function Carousel() {
  const [currImg, setCurrImg] = useState(0);

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slider-container_1">
            <div className="">
              <h1 className="text-white lg:text-6xl text-3xl font-semibold py-4">
                Trade from anywhere
              </h1>
              <p className="text-gray-200 text-xl py-2">
                With forex trading, you can start trading from the comfort of
                your home and make big bunks!
              </p>
              <Link to={"/signals"}>
              <GenericButton
                text={"Start Trading"}
                classes={
                  " font-bold bg-gradient-to-r px-4 from-primary to-secondary text-white mx-2"
                }
              />
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-container_2">
            <div className="">
              <h1 className="text-white lg:text-6xl text-3xl font-semibold py-4">
                Trade from anywhere
              </h1>
              <p className="text-gray-200 text-xl py-2">
                With forex trading, you can start trading from the comfort of
                your home and make big bunks!
              </p>
              <Link to={"/signals"}>
              <GenericButton
                text={"Start Trading"}
                classes={
                  " font-bold bg-gradient-to-r px-4 from-primary to-secondary text-white mx-2"
                }
              />
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-container_3">
            <div className="">
              <h1 className="text-white lg:text-6xl text-3xl font-semibold py-4">
                Book a physical lesson now
              </h1>
              <p className="text-gray-200 text-xl py-2">
                Book a one on one session
              </p>
              <Link target="_blank" to={"https://selar.co/vito-forex-mentorship"}>
              <GenericButton
                text={"Book Physical Lesson"}
                classes={
                  " font-bold bg-gradient-to-r px-4 from-primary to-secondary text-white mx-2"
                }
              />
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Carousel;
