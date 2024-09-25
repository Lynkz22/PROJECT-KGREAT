import React from "react";
import "../Styles/ServicesHome.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ServiceImage1 from "../Components/Assets/LandingPageBcg/CAD3.png";
import ServiceImage2 from "../Components/Assets/LandingPageBcg/EED2.avif";
import ServiceImage3 from "../Components/Assets/LandingPageBcg/BIM.webp";
import ServiceImage4 from "../Components/Assets/LandingPageBcg/SH.avif";
import ServiceImage5 from "../Components/Assets/LandingPageBcg/BCG6.jpg";
import { TiArrowRight } from "react-icons/ti";

export const ServicesHome = () => {
  return (
    <>
      <motion.section
        className="sectionServicesHome"
        // initial={{ opacity: 0, y: "+30vh" }}
        // whileInView={{ opacity: 1, y: 0 }}
        // transition={{ duration: 3 }}
        // viewport={{ once: true }}
      >
        <div className="divServicesHome">
          <img
            className="servicesImage"
            alt="ServicesImage"
            src={ServiceImage1}
          />
          <div className="divservicesHomeText">
            <p className="servicesHomeText">
              Computer <br />
              Aided <br />
              Design
            </p>
          </div>
        </div>
        <div className="divServicesHome">
          <img
            className="servicesImage"
            alt="ProjectsImage"
            src={ServiceImage2}
          />
          <div className="divservicesHomeText">
            <p className="servicesHomeText">
              Engineering <br />
              Drawing
            </p>
          </div>
        </div>
        <div className="divServicesHome">
          <img
            className="servicesImage"
            alt="ProjectsImage"
            src={ServiceImage3}
          />
          <div className="divservicesHomeText">
            <p className="servicesHomeText">
              Building <br />
              Information <br />
              Modeling
            </p>
          </div>
        </div>
        <div className="divServicesHome">
          <img
            className="servicesImage"
            alt="ProjectsImage"
            src={ServiceImage4}
          />
          <div className="divservicesHomeText">
            <p className="servicesHomeText">
              Smart <br />
              Homes
            </p>
          </div>
        </div>
        <div className="divServicesHome-1">
          <div>
            <img
              className="servicesImage"
              alt="ServiceImage-5"
              src={ServiceImage5}
            />
          </div>
          <div>
            <Link to="/Projects" className="divServicesLink">
              <p className="servicesLink">
                View All Services <TiArrowRight className="linkArrow" />
              </p>
            </Link>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default ServicesHome;
