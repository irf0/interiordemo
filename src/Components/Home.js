import React from "react";
import Header from "./Header";
import HomeCarousel from "./HomeCarousel";
import HomeVideo from "./HomeVideo";
import HighlightSection from "./HighlightSection";
import KeyPointsSection from "./KeyPointsSection";
import Gallery from "./Gallery";
import Testimonials from "./Testimonials";
import BottomBanner from "./BottomBanner";
import Footer from "./Footer";
import SiteFooter from "./SiteFooter";

function Home() {
  return (
    <div>
      <HomeCarousel />
      <HighlightSection />
      <KeyPointsSection />
      <Gallery />
      <Testimonials />
      <BottomBanner />
    </div>
  );
}

export default Home;
