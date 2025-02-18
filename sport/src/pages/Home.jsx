import React from "react";
import HeroSection from "../components/UI/HeroSection";
import AboutCountry from "./AboutCountry.jsx";
import AboutCricket from "./AboutCricket.jsx";

function Home() {
  return (
    <>
      <HeroSection />
      <AboutCountry />
      <AboutCricket />
    </>
  );
}

export default Home;
