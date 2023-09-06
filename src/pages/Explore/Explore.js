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
          <h2>
            Heavenly Hot Chocolate Elixir - Nourishing Indulgence for Your
            Senses
          </h2>
          <p>
            Welcome to the ultimate destination for a transformative Dark Moon
            drink experience. Our Heavenly Hot Chocolate Elixir is more than
            just a beverage; it's an extraordinary elixir meticulously crafted
            to take your taste buds on a journey of bliss while nourishing your
            body with essential nutrients. Indulge in the decadent fusion of
            flavors, embrace plant-powered goodness, and elevate your well-being
            with every sip. Say goodbye to ordinary hot chocolate and embrace a
            new level of deliciousness and nourishment. Indulge in a hot
            chocolate experience like no other with our Heavenly Hot Chocolate
            Elixir. Elevate your indulgence and nourish your body with a
            symphony of flavors and wholesome ingredients. The journey to
            extraordinary begins with each cup. Treat yourself and embark on a
            transformative hot chocolate adventure today!
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