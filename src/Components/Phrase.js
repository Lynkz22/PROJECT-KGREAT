import React from "react";
import "../Styles/Phrase.css";
import { motion } from "framer-motion";

const Phrase = () => {
  return (
    <>
      <section className="sectionPhrase">
        <div className="divPhrase">
          <motion.span
            class="material-symbols-outlined"
            initial={{ opacity: 0, x: "-100%" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 3 }}
            viewport={{ once: true }}
          >
            roofing
          </motion.span>

          <motion.div
            className="textPhrase"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 3 }}
            viewport={{ once: true }}
          >
            <p className="textPhrase-1">
              Building a better world, one brick at a time
            </p>
            <br />
            <p className="textPhrase-2">
              Building your visions. Creating reality
            </p>
            <br />
            <p className="textPhrase-3">Anything can be built</p>
            <br />
            <p className="textPhrase-4">K-GREAT ENGINEERING</p>
          </motion.div>

          <motion.span
            class="material-symbols-outlined"
            initial={{ opacity: 0, x: "100%" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 3 }}
            viewport={{ once: true }}
          >
            roofing
          </motion.span>
        </div>
      </section>
    </>
  );
};

export default Phrase;
