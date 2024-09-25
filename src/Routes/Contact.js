import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import ContactIntro from "../Components/ContactIntro";
import ContactMain from "../Components/ContactMain";
import Footer from "../Components/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://r4.wallpaperflare.com/wallpaper/943/325/116/car-bmw-m3-bmw-race-cars-wallpaper-e9e0b8adf1aa0d1b3627c8af00a1e6ed.jpg"
        title="Amnon. Is. Me."
      />
      <ContactIntro />
      <ContactMain />
      <Footer />
    </>
  );
};

export default Contact;
