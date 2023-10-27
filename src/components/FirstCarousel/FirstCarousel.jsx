import React from "react";
import "./FirstCarousel.css";
import Slider from "react-slick";
import NextArrow from "./CarouselArrows/NextArrow";
import PrevArrow from "./CarouselArrows/PrevArrow";
import { HomeFirstCarouseldata } from "../../assets/Images/ImageExports";

const FirstCarousel = () => {
  const settings = {
    infinite: true,
    speed: 800,
    autoplaySpeed: 5000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="carousel" data-aos="zoom-out" data-aos-duration="4000">
      <Slider {...settings}>
        {HomeFirstCarouseldata.map((r, i) => (
          <div key={i} className="slide-holder">
            {/* <div className="slide-left-text-content"> */}
            <div id={r.title}>
              <h1>{r.textHead}</h1>
              <h2>{r.textDesc}</h2>

              <a
                href="https://www.amazon.in/dp/B0CLVJ6DBQ?ref=myi_title_dp"
                target="_blank"
              >
                {" "}
                Shop now
              </a>
            </div>
            <img src={r.imageSource} alt={r.title} className="slide-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FirstCarousel;
