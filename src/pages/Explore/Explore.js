import React from "react";
import "./Explore.css";
import Slider from "react-slick";
import { ExploreCarouselSlide } from "../../components";
import { ExploreCarouselData } from "../../assets/Images/ImageExports";
import DelightDrink from "../../assets/Images/ExplorePage/Delight-Drink.webp";

const Explore = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    speed: 400,
    arrows: false,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="explore">
      <section className="explore-first-section">
        <img data-aos="fade-right" src={DelightDrink} alt="delight-drink" />
        <div data-aos="fade-left" className="explore-first-sec-text-content">
          <h2>Heavenly Hot Chocolate Elixir: Nourishing Sensory Delight</h2>
          <p>
            Experience a Transformative Dark Moon Drink Journey! Our Heavenly
            Hot Chocolate Elixir Goes Beyond a Beverage; It's an Exceptional
            Creation Crafted to Delight Your Taste Buds and Nourish Your Body.
            Immerse Yourself in the Decadent Fusion of Flavors, Embrace
            Plant-Powered Goodness, and Enhance Your Well-Being with Every Sip.
            Bid Farewell to Ordinary Hot Chocolate and Embrace a New Level of
            Delight and Nourishment. Dive into a Hot Chocolate Experience Unlike
            Any Other with Our Heavenly Hot Chocolate Elixir. Elevate Your
            Indulgence and Nourish Your Body with a Symphony of Flavors and
            Wholesome Ingredients. The Journey to Extraordinary Begins with
            Every Cup. Pamper Yourself and Embark on a Transformative Hot
            Chocolate Adventure Today!
          </p>
        </div>
      </section>
      <div className="explore-carousel">
        <Slider {...settings}>
          {ExploreCarouselData.map((exploreData, i) => (
            <ExploreCarouselSlide key={i} data={exploreData} index={i} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Explore;
