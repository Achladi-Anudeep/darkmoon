import React, { useState } from "react";
import "./Home.css";
import { FirstCarousel, Testimonial, NTable } from "../../components";
import ChoclateDrink from "../../assets/Images/GlassOfDrink.webp";
import UniversityData from "../../assets/Jsons/Universities.json";
import Slider from "react-slick";
import { GiBrain } from "react-icons/gi";
import { GiBiceps } from "react-icons/gi";
import { MdHealthAndSafety, MdTagFaces } from "react-icons/md";
import {
  HomeFirstSecData,
  HomeHealthBenefitsData,
  HomeTestimonials,
} from "../../assets/Images/ImageExports";

const Home = () => {
  const settingsTestimonials = {
    autoplaySpeed: 5000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
  };

  const [temp, setTemp] = useState(0);
  const changeDetails = (i) => {
    setTemp(i);
  };
  return (
    <div className="home">
      <FirstCarousel />
      <div className="first-section">
        <h1>What Sets Dark Moon Apart?</h1>
        <div className="first-section-b">
          {HomeFirstSecData.map((r, i) => (
            <div
              key={i}
              className="fi-sec-b-card"
              data-aos="flip-down"
              data-aos-duration={(i + 1) * 1000}
            >
              <div className="fi-sec-b-card-img">
                <img src={r.imageSource} alt={r.title} />
              </div>
              <div className="fi-sec-b-card-text">
                <h2>{r.heading}</h2>
                <p>{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={`second-section ${HomeHealthBenefitsData[temp].class}`}>
        <div className="second-section-a">
          <h1>Discover the Health Benefits</h1>
        </div>
        <div className="second-section-b">
          <div className="s-s-b-buttons">
            {HomeHealthBenefitsData.map((r, i) => (
              <button
                onClick={() => changeDetails(i)}
                className="cat-btn"
                key={i}
              >
                {r.title}
              </button>
            ))}
          </div>
          <div className="s-s-b-content">
            <div className="container">
              <div
                className="container-one"
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-dely="1000"
              >
                <h1>{HomeHealthBenefitsData[temp].title}</h1>
                <h3>{HomeHealthBenefitsData[temp].subtitle}</h3>
                <p>{HomeHealthBenefitsData[temp].desc}</p>
                <button>Get Started</button>
              </div>
              <div className="container-two" data-aos="zoom-in">
                <img src={HomeHealthBenefitsData[temp].image} alt="random" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fourth-section">
        <h1>Research About our ingredients</h1>
        <div className="fourth-sec-content">
          {UniversityData.map((r, i) => (
            <div className="fourth-sec-card" key={i}>
              <img src={r.imageSource} alt={r.altTitle} />
              <p>{r.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="fifth-section">
        <h1>Don't take our word for it</h1>
        <div className="fifth-sec-carousel">
          <Slider {...settingsTestimonials}>
            {HomeTestimonials.map((r, i) => (
              <Testimonial
                key={i}
                image={r.profilePic}
                name={r.name}
                altTitle={r.altTitle}
                review={r.review}
              />
            ))}
          </Slider>
        </div>
      </div>
      <div className="sixth-section">
        <div className="sixth-sec-container">
          <div className="sixth-sec-img-holder">
            <img src={ChoclateDrink} alt="glass" />
          </div>
          <div className="sixth-content">
            <div className="sixth-content-title">
              <h1>What Dark Moon Makes You</h1>
            </div>
            <div className="sixth-description">
              <div className="sixth-description-left">
                <div className="sixth-description-content">
                  <GiBrain className="sixth-sec-icon" />
                  <h1>Better Focus</h1>
                  <p>Boost Alertness, Cognition, and Mental Focus</p>
                </div>
                <div className="sixth-description-content">
                  <MdHealthAndSafety className="sixth-sec-icon" />
                  <h1>Anti Inflamatory</h1>
                  <p>
                    Strengthen Your Immune System to Prevent the Common Cold
                  </p>
                </div>
              </div>
              <div />
              <div className="sixth-description-right">
                <div className="sixth-description-content">
                  <GiBiceps className="sixth-sec-icon" />
                  <h1>Energy Booster</h1>
                  <p>Enhance Muscle Health with Our Protein Punch</p>
                </div>
                <div className="sixth-description-content">
                  <MdTagFaces className="sixth-sec-icon" />
                  <h1>Skin Glow</h1>
                  <p>Anti-oxidants on drid ensure your skin radiance</p>
                </div>
              </div>
            </div>
            <div className="sixth-content-title">
              <h1>The Science behind the DarkMoon</h1>
            </div>
            <div className="sixth-description">
              <div className="sixth-description-left">
                <div className="sixth-description-content">
                  <h1>Anti Oxidants</h1>
                  <p>
                    Experience Glowing Skin with Our Power-Packed Antioxidants
                  </p>
                </div>
                <div className="sixth-description-content">
                  <h1>Vitamins</h1>
                  <p>
                    Fortify Your Immune System with Vitamins B1, B2, B3, B6, B9,
                    K, and E
                  </p>
                </div>
              </div>
              <div />
              <div className="sixth-description-right">
                <div className="sixth-description-content">
                  <h1>Polyphenols</h1>
                  <p>Balance LDL and Increase HDL with Our Assistance</p>
                </div>
                <div className="sixth-description-content">
                  <h1>Energy Booster</h1>
                  <p>Accelerate and Enhance Muscle Recovery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="nutrition-table">
        <h1>Why it is a Miracle drink ?</h1>
        <NTable />
      </div>
    </div>
  );
};

export default Home;
