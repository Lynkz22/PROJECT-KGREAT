import React from "react";
import "../Styles/ServicesAbout.css";
import { motion } from "framer-motion";

const ServicesAbout = () => {
  return (
    <>
      <section className="sectionServicesAbout">
        <motion.div
          className="divServicesAbout"
          initial={{ opacity: 0, y: "5rem" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
        >
          <h1>OUR SERVICES</h1>
        </motion.div>
        <div className="divServicesAbout-1">
          <p>Consulting</p>
          <p>Feasibility Studies</p>
          <p>Design Solutions</p>
          <p>Engineering Drawings</p>
          <p>Building information Modeling (BIM) and 3D Visualization</p>
          <p>Planning and Approval Applications</p>
          <p>Mechanical and Electrical Systems</p>
          <p>Project Supervision</p>
          <p>Engineering Drawings</p>
          <p>Project Management</p>
        </div>
      </section>
    </>
  );
};

export default ServicesAbout;
