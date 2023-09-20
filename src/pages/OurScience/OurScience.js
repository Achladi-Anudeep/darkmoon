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
            Enjoy the Exquisite DARK MOON Hot Chocolate - A Scientifically
            Crafted Fusion of Premium Dark Cocoa and Natural Brown Sugar
          </h2>
          <p>
            Indulge in the Luxurious Experience of DARK MOON, an Exquisite Hot
            Chocolate Elixir Meticulously Crafted to Delight Your Taste Buds and
            Nourish Your Senses. Our Secret Resides in the Impeccable Fusion of
            Premium Dark Cocoa and Natural Brown Sugar, Creating a Harmonious
            Symphony of Flavors That Will Leave You Yearning for More. Prepare
            to Embark on a Journey of Pleasure and Uncover the Science-Backed
            Advantages of This Delightful Concoction. Numerous Studies and
            Research Papers Validate the Health Benefits of Dark Cocoa and the
            Nutritional Advantages of Natural Brown Sugar, Affirming the
            Extraordinary Flavor and Scientific Foundation of DARK MOON
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
          These articles present Scientific Evidence Affirming the Significance
          of DARK MOON's Key Ingredients, Strengthening the Elixir's Dedication
          to Fusing Flavor and Nourishment for an Unparalleled Hot Chocolate
          Experience. Embrace the Delight and Science-Backed Advantages of DARK
          MOON as You Savor Every Exquisite Sip
        </p>
      </section>
    </div>
  );
};

export default OurScience;
