import React, { useEffect } from "react";
import "./OurScience.css";
import AOS from "aos";
import { OurScienceArticlesData } from "../../assets/Images/ImageExports";
import OurScienceGlass from "../../assets/Images/OurSciencePage/OurScienceGlass.webp";
const OurScience = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="our-science">
      <section className="science-first-sec">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="science-first-sec-text-content"
        >
          <h2>
            Indulge in the Exquisite DARK MOON Hot Chocolate - A Scientifically
            Crafted Blend of Premium Dark Cocoa and Natural Brown Sugar
          </h2>
          <p>
            Experience the indulgence of DARK MOON, an exquisite hot chocolate
            elixir meticulously crafted to delight your taste buds and provide a
            nourishing experience. Our secret lies in the perfect blend of
            premium dark cocoa and natural brown sugar, creating a symphony of
            flavors that will leave you craving more. Prepare to embark on a
            journey of pleasure and discover the science-backed benefits of this
            delightful concoction. Numerous studies and research papers attest
            to the health benefits of dark cocoa and the nutritional advantages
            of natural brown sugar, validating the exceptional taste and science
            behind DARK MOON.
          </p>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="science-first-image-holder"
        >
          <img src={OurScienceGlass} alt="jar of grains" />
        </div>
      </section>
      <section className="science-second-sec">
        <h1>Suggested Articles</h1>
        {OurScienceArticlesData.map((r, i) => (
          <div
            key={i}
            // className="article-box"
            className={
              r.articleNumber % 2 ? "article-box" : "article-box reverse-row"
            }
          >
            <img
              className="article-image"
              data-aos={r.articleNumber % 2 ? "flip-left" : "flip-right"}
              dat-aos-duration="10"
              src={r.articleImage}
              alt="dark-cocoa"
            />
            <div className="article-text-content">
              <h2>{r.articleHeader}</h2>
              <p>{r.articleDesc}</p>
              <button>
                <a href={r.articleLink} target="_blank">
                  Learn More
                </a>
              </button>
            </div>
          </div>
        ))}
        <p>
          These articles provide scientific evidence supporting the key
          ingredients of DARK MOON, reinforcing the elixir's commitment to
          combining taste and nourishment for an exceptional hot chocolate
          experience. Embrace the pleasure and science-backed benefits of DARK
          MOON as you indulge in each delightful sip.
        </p>
      </section>
    </div>
  );
};

export default OurScience;
