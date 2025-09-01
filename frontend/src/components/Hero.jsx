import React from "react";
import Slider from "react-slick";
import { HomeImg } from "../utils/utilsArray";
import base from "../assets/base.png";

const Hero = () => {
  const settings = {
    autoplay: true,
    dots: false,
    arrows: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
  };

  return (
    <div className="justify-end flex pr-5">
      <div className="slider-container left-[50%] right-[50%] top-10 sm:left-[50%] sm:right-[50%] md:left-auto md:right-[15%] md:top-40 lg:left-auto lg:right-[15%] lg:top-6 scale-[130%] relative">
        <div className="mt-[10%]">
          <img
            src={base}
            className="lg:w-[420px] w-[300px] lg:h-[670px] h-[550px]"
          />
        </div>
        <div className="absolute lg:top-[21%] top-[26%] left-[1px] w-full">
          <Slider {...settings}>
            {HomeImg.map((imgSrc, index) => (
              <div key={index} className=" flex flex-row">
                <div>
                  <img
                    src={imgSrc}
                    className="lg:w-[500px] w-[380px] h-[380px] lg:h-[500px]"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
