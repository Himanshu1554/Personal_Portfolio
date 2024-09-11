import React, { useState } from "react";
import { motion } from "framer-motion";
import { textVariant, tooltipVariant, staggerContainer } from "../utils/motion";
import { styles } from "../styles";

import { technologies } from "../constants";

const Tech = () => {
  let [hoveredKey, setHoveredKey] = useState(null);

  return (
    <>
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="sm:px-14 px-6 sm:py-16 py-10 max-w-7xl
        mx-auto realtive z-0"
      >
        <span className="hash-span" id='tech'>
          &nbsp;
        </span>

        <div className="w-full h-full bg-primary">
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Tech Stack</p>
            <h2 className={styles.sectionHeadText}>Technologies.</h2>
          </motion.div>

          <ul
            className="list-none flex flex-wrap w-auto items-center 
            justify-center gap-6 gap-y-20 mt-20 mb-10"
          >
            {technologies.map((tech, index) => (
              <li
                key={tech.name}
                className="relative flex items-center justify-center"
                onMouseEnter={() => setHoveredKey(index)}
                onMouseLeave={() => setHoveredKey(null)}
              >
                <motion.img
                  src={`https://skillicons.dev/icons?i=${tech.icon}`}
                  alt={`${tech.name}`}
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  style={{
                    filter: `drop-shadow(0 2px 2px ${tech.shadowcolor})`,
                  }}
                />
                {hoveredKey === index && (
                  <motion.div
                    className="absolute bottom-full text-base px-4 py-2
               text-white rounded-lg border-b-2"
                    style={{ borderColor: `${tech.color}` }}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={tooltipVariant()}
                  >
                    {tech.name}
                  </motion.div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </motion.section>
    </>
  );
};

export default Tech;
