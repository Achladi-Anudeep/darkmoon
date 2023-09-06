import React from "react";
import "./LearnMore.css";

const LearnMore = () => {
  const infoData = [
    {
      title: "The Nutritional Powerhouse",
      desc: "Explore the nutritional benefits of our special chocolate powder, enriched with antioxidants and essential minerals. Learn how the precise processing techniques we employ preserve the cocoa's natural goodness, making each serving a delightful and nourishing experience.",
    },
    {
      title: "Behind the Scenes - The Craftsmanship",
      desc: "Uncover the artistry and craftsmanship that goes into creating our special chocolate powder. Meet the passionate artisans behind its production, and gain insights into the meticulous steps taken to ensure the finest quality and unforgettable taste.",
    },
    {
      title: "Nourishment and Wellness",
      desc: "Discover how our special chocolate powder not only indulges your taste buds but also contributes to your overall well-being. Explore the health benefits of dark cocoa and the thoughtful selection of natural brown sugar for balanced sweetness.",
    },
    {
      title: "Versatility Unleashed - Culinary Creations",
      desc: "Dive into the versatility of our chocolate powder as it goes beyond being just a hot beverage. Learn exciting recipes to elevate your culinary creations, from luscious desserts to delightful smoothies, making every meal a heavenly experience.",
    },
    {
      title: "Sustainability and Ethical Sourcing",
      desc: "Explore our commitment to sustainability and ethical sourcing, as we strive to make a positive impact on cocoa farming communities and the environment. Uncover how your indulgence in our special chocolate powder contributes to a better world.",
    },
    {
      title: "Customer Reviews - The Joyful Testimonials",
      desc: "Read heartwarming testimonials from our valued customers who have experienced the magic of our chocolate powder firsthand. Learn how their delightful encounters have enriched their moments of indulgence.",
    },
    {
      title: "A Journey of Taste and Pleasure",
      desc: "Embark on a sensory journey as you read about the blissful moments experienced by chocolate enthusiasts who have explored the extraordinary taste and nourishing excellence of our special chocolate powder.",
    },
  ];
  return (
    <div className="learn-more">
      <div className="learn-more-header-content">
        <h1>A Blend of Indulgence and Wellness</h1>
        <p>
          If you're intrigued by the magic of our special chocolate powder,
          there's so much more to discover! Delve deeper into the world of
          indulgence and wellness as we unravel the secrets behind our exquisite
          blend of premium dark cocoa and natural brown sugar. From its
          nutritional benefits to the sustainable practices we embrace, learning
          more about our special chocolate powder will ignite your passion for
          extraordinary taste and nourishing goodness.
        </p>
      </div>
      <div className="info-section">
        {infoData.map((r, i) => (
          <div key={i} className="info-section-text">
            <h3>{r.title}</h3>
            <p>{r.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearnMore;
