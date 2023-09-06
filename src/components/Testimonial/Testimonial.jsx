import React from "react";
import "./Testimonial.css";

const Testimonial = ({ image, name, altTitle, review }) => {
  return (
    <div className="testimonial">
      <div className="testimonial-image-holder">
        <img src={image} alt={altTitle} />
      </div>
      <div className="testimonial-text">
        <h4>"{review}"</h4>
        <p>-{name}</p>
      </div>
    </div>
  );
};

export default Testimonial;
