import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Introduction from "../Components/Introduction";
import Mvpm from "../Components/Mvpm";
import Phrase from "../Components/Phrase";
import ServicesAbout from "../Components/ServicesAbout";
import GetInTouch from "../Components/GetInTouch";
import Footer from "../Components/Footer";
import TeamMembers from "../Components/TeamMembers";

const About = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Introduction />
      <Mvpm />
      <Phrase />
      <ServicesAbout />
      <TeamMembers />
      <GetInTouch />
      <Footer />
    </>
  );
};

export default About;
