import React from "react";
import "./LearnMore.css";

const LearnMore = () => {
  const infoData = [
    {
      title: "The Nutritional Powerhouse",
      desc: "Discover the Nutritional Advantages of Our Unique Chocolate Powder, Enriched with Antioxidants and Essential Minerals. Find Out How Our Meticulous Processing Techniques Preserve the Natural Goodness of Cocoa, Ensuring Each Serving Offers a Delightful and Nourishing Experience.",
    },
    {
      title: "Behind the Scenes - The Craftsmanship",
      desc: "Reveal the Artistry and Craftsmanship Behind Crafting Our Unique Chocolate Powder. Get Acquainted with the Dedicated Artisans Behind its Production and Gain a Peek into the Meticulous Processes Enacted to Guarantee the Highest Quality and Unforgettable Flavor.",
    },
    {
      title: "Nourishment and Wellness",
      desc: "Unearth How Our Unique Chocolate Powder Not Only Pleases Your Palate but Also Enhances Your Overall Well-Being. Delve into the Health Advantages of Dark Cocoa and the Mindful Choice of Natural Brown Sugar for a Balanced Sweetness.",
    },
    {
      title: "Versatility Unleashed - Culinary Creations",
      desc: "Immerse Yourself in the Versatility of Our Chocolate Powder, Transforming It Beyond a Hot Beverage. Acquire Inspiring Recipes to Elevate Your Culinary Creations, from Decadent Desserts to Blissful Smoothies, Elevating Every Meal to a Heavenly Experience.",
    },
    {
      title: "Sustainability and Ethical Sourcing",
      desc: "Delve into Our Dedication to Sustainability and Ethical Sourcing, as We Endeavor to Create a Positive Influence on Cocoa Farming Communities and the Environment. Discover How Your Enjoyment of Our Unique Chocolate Powder Contributes to a Better World.",
    },
    {
      title: "Customer Reviews - The Joyful Testimonials",
      desc: "Peruse Touching Testimonials from Our Esteemed Customers Who Have Personally Experienced the Enchantment of Our Chocolate Powder. Gain Insight into How Their Delightful Encounters Have Enhanced Their Moments of Indulgence.",
    },
    {
      title: "A Journey of Taste and Pleasure",
      desc: "Embark on a Sensory Journey as You Explore the Blissful Moments Shared by Chocolate Enthusiasts Who Have Delved into the Extraordinary Taste and Nourishing Excellence of Our Unique Chocolate Powder.",
    },
  ];
  return (
    <div className="learn-more">
      <div className="learn-more-header-content" data-aos="zoom-in">
        <h1>Experience the Fusion of Indulgence and Wellness</h1>
        <p>
          If the allure of our special chocolate powder captivates you, there's
          an abundance to explore! Dive deeper into the realm of indulgence and
          wellness as we unveil the mysteries behind our exquisite fusion of
          premium dark cocoa and natural brown sugar. From its healthful
          advantages to our commitment to sustainability, delving into the
          details of our special chocolate powder will ignite your enthusiasm
          for exceptional flavor and nourishing excellence.
        </p>
      </div>
      <div className="info-section">
        {infoData.map((r, i) => (
          <div
            data-aos={(1 + i) % 2 === 0 ? "fade-right" : "fade-left"}
            key={i}
            className="info-section-text"
          >
            <h3>{r.title}</h3>
            <p>{r.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearnMore;
