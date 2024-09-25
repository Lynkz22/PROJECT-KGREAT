import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Note from "../Components/Note";
import ServicesHome from "../Components/ServicesHome";
import Phrase from "../Components/Phrase";
import ProjectsHome from "../Components/ProjectsHome";
import GetInTouch from "../Components/GetInTouch";
import Footer from "../Components/Footer";
import MsHome from "../Components/MsHome";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Phrase />
      <Note />
      <ServicesHome />
      <MsHome />
      <ProjectsHome />
      <GetInTouch />
      <Footer />
    </>
  );
};

export default Home;
