import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import { Adbar, Footer, Navbar } from "./components";
import { useEffect } from "react";
import {
  Home,
  Explore,
  WhyUs,
  LearnMore,
  OurScience,
  ContactUs,
} from "./pages";
import { GlobalContextAPI } from "./contexts/Global/GlobalContextAPI";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <GlobalContextAPI>
      <Adbar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore-product" element={<Explore />} />
        <Route path="/why-us" element={<WhyUs />} />
        <Route path="/learn-more" element={<LearnMore />} />
        <Route path="/our-science" element={<OurScience />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </GlobalContextAPI>
  );
}

export default App;
