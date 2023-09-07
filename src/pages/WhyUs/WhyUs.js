import React from "react";
import "./WhyUs.css";
import WhyUsBanner from "../../assets/Images/WhyUsPage/WhyUsBanner.webp";
import { WhyUsGridData } from "../../assets/Images/ImageExports";

const WhyUs = () => {
  return (
    <div className="why-us">
      <div className="why-us-banner" data-aos="zoom-out">
        <div className="why-us-banner-text">
          <h1>Discover the Magic of Our Special Chocolate Powder. </h1>
          <h2>Unparalleled Taste and Nourishing Excellence.</h2>
        </div>

        <img src={WhyUsBanner} alt="drink" />
      </div>
      <div data-aos="zoom-in" className="why-us-intro">
        <p>
          "At our company, we take immense pride in crafting chocolate powder
          that goes beyond ordinary. Our special chocolate powder is a result of
          careful selection, superior ingredients, and an unwavering commitment
          to quality. From the finest cocoa beans to a unique manufacturing
          process, our chocolate powder stands out as a premium blend that
          promises unparalleled taste and nourishing excellence."
        </p>
      </div>
      <div className="why-us-card-grid">
        {WhyUsGridData.map((r, i) => (
          <div data-aos="zoom-in" key={i} className="why-us-card">
            <img src={r.image} alt={r.title} className="why-us-card-image" />
            <div className="why-us-card-text-content">
              <h4>{r.title}</h4>
              <p>{r.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
