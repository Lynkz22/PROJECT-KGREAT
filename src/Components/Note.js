import React from "react";
import "../Styles/Note.css";

// import { motion } from "framer-motion";

const Note = () => {
  return (
    <>
      <section className="sectionNote">
        <div className="divNote">
          <h1 className="noteHeading">What Sets Us Apart</h1>
          <p className="noteParagraph">
            At K-Great Engineering, we don't just construct buildings, we
            engineer comfort. Our mechanical and electrical engineering
            expertise ensures that every project we undertake is a testament to
            precision, innovation, and excellence. <br />
            <br />
            From cutting-edge HVAC systems to seamless electrical installations,
            our team of seasoned professionals delivers efficient and
            sustainable solutions. <br />
            <br />
            We build for your comfort because your satisfaction is our ultimate
            goal.
          </p>
        </div>
      </section>
    </>
  );
};

export default Note;
