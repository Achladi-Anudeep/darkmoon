import React from "react";
import "./ExploreCarouselSlide.css";

const ExploreCarouselSlide = ({ data, index }) => {
  return (
    <div
      data-aos="flip-up"
      data-aos-duration={(index + 1) * 500}
      className="explore-car-slide"
    >
      <div className="explore-car-slide-image-holder">
        <img src={data.image} alt={data.title} />
      </div>
      <div className="explore-car-slide-text-content">
        <h3>{data.title}</h3>
        <p>{data.desc}</p>
      </div>
    </div>
  );
};

export default ExploreCarouselSlide;
