import React from "react";
import "./LearnMore.css";

const LearnMore = () => {
  const infoData = [
    {
      title: "The Nutritional Powerhouse",
      desc: "Discover the Nutritional Advantages of Our Unique Chocolate Powder, Enriched with Antioxidants and Essential Minerals. Find Out How Our Meticulous Processing Techniques Preserve the Natural Goodness of Cocoa, Ensuring Each Serving Offers a Delightful and Nourishing Experience.",
      // desc: "Explore the nutritional benefits of our special chocolate powder, enriched with antioxidants and essential minerals. Learn how the precise processing techniques we employ preserve the cocoa's natural goodness, making each serving a delightful and nourishing experience.",
    },
    {
      title: "Behind the Scenes - The Craftsmanship",
      desc: "Reveal the Artistry and Craftsmanship Behind Crafting Our Unique Chocolate Powder. Get Acquainted with the Dedicated Artisans Behind its Production and Gain a Peek into the Meticulous Processes Enacted to Guarantee the Highest Quality and Unforgettable Flavor.",
      // desc: "Uncover the artistry and craftsmanship that goes into creating our special chocolate powder. Meet the passionate artisans behind its production, and gain insights into the meticulous steps taken to ensure the finest quality and unforgettable taste.",
    },
    {
      title: "Nourishment and Wellness",
      desc: "Unearth How Our Unique Chocolate Powder Not Only Pleases Your Palate but Also Enhances Your Overall Well-Being. Delve into the Health Advantages of Dark Cocoa and the Mindful Choice of Natural Brown Sugar for a Balanced Sweetness.",
      // desc: "Discover how our special chocolate powder not only indulges your taste buds but also contributes to your overall well-being. Explore the health benefits of dark cocoa and the thoughtful selection of natural brown sugar for balanced sweetness.",
    },
    {
      title: "Versatility Unleashed - Culinary Creations",
      desc: "Immerse Yourself in the Versatility of Our Chocolate Powder, Transforming It Beyond a Hot Beverage. Acquire Inspiring Recipes to Elevate Your Culinary Creations, from Decadent Desserts to Blissful Smoothies, Elevating Every Meal to a Heavenly Experience.",
      // desc: "Dive into the versatility of our chocolate powder as it goes beyond being just a hot beverage. Learn exciting recipes to elevate your culinary creations, from luscious desserts to delightful smoothies, making every meal a heavenly experience.",
    },
    {
      title: "Sustainability and Ethical Sourcing",
      desc: "Delve into Our Dedication to Sustainability and Ethical Sourcing, as We Endeavor to Create a Positive Influence on Cocoa Farming Communities and the Environment. Discover How Your Enjoyment of Our Unique Chocolate Powder Contributes to a Better World.",
      // desc: "Explore our commitment to sustainability and ethical sourcing, as we strive to make a positive impact on cocoa farming communities and the environment. Uncover how your indulgence in our special chocolate powder contributes to a better world.",
    },
    {
      title: "Customer Reviews - The Joyful Testimonials",
      desc: "Peruse Touching Testimonials from Our Esteemed Customers Who Have Personally Experienced the Enchantment of Our Chocolate Powder. Gain Insight into How Their Delightful Encounters Have Enhanced Their Moments of Indulgence.",
      // desc: "Read heartwarming testimonials from our valued customers who have experienced the magic of our chocolate powder firsthand. Learn how their delightful encounters have enriched their moments of indulgence.",
    },
    {
      title: "A Journey of Taste and Pleasure",
      desc: "Embark on a Sensory Journey as You Explore the Blissful Moments Shared by Chocolate Enthusiasts Who Have Delved into the Extraordinary Taste and Nourishing Excellence of Our Unique Chocolate Powder.",
      // desc: "Embark on a sensory journey as you read about the blissful moments experienced by chocolate enthusiasts who have explored the extraordinary taste and nourishing excellence of our special chocolate powder.",
    },
  ];
  return (
    <div className="learn-more">
      <div className="learn-more-header-content" data-aos="zoom-in">
        <h1>Experience the Fusion of Indulgence and Wellness</h1>
        {/* <h1>A Blend of Indulgence and Wellness</h1> */}
        <p>
          If the allure of our special chocolate powder captivates you, there's
          an abundance to explore! Dive deeper into the realm of indulgence and
          wellness as we unveil the mysteries behind our exquisite fusion of
          premium dark cocoa and natural brown sugar. From its healthful
          advantages to our commitment to sustainability, delving into the
          details of our special chocolate powder will ignite your enthusiasm
          for exceptional flavor and nourishing excellence.
        </p>
        {/* <p>
          If you're intrigued by the magic of our special chocolate powder,
          there's so much more to discover! Delve deeper into the world of
          indulgence and wellness as we unravel the secrets behind our exquisite
          blend of premium dark cocoa and natural brown sugar. From its
          nutritional benefits to the sustainable practices we embrace, learning
          more about our special chocolate powder will ignite your passion for
          extraordinary taste and nourishing goodness.
        </p> */}
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
