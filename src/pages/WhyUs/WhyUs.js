import React from "react";
import "./WhyUs.css";
import WhyUsBanner from "../../assets/Images/WhyUsPage/WhyUsBanner.webp";
import { WhyUsGridData } from "../../assets/Images/ImageExports";

const WhyUs = () => {
  return (
    <div className="why-us">
      <div className="why-us-banner" data-aos="zoom-out">
        <div className="why-us-banner-text">
          <h1>Unveil the Enchantment of Our Unique Chocolate Powder.</h1>
          <h2>Exceptional Flavor and Nourishing Excellence.</h2>
        </div>
        <img src={WhyUsBanner} alt="drink" />
      </div>
      <div data-aos="zoom-in" className="why-us-intro">
        <p>
          "At our company, we are dedicated to producing chocolate powder that
          transcends the ordinary. Our unique chocolate powder is the outcome of
          meticulous ingredient selection, the use of superior components, and
          an unwavering commitment to quality. From selecting the finest cocoa
          beans to employing a distinct manufacturing process, our chocolate
          powder distinguishes itself as a premium blend, ensuring incomparable
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
