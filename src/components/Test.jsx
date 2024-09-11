import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import aboutImg from "../utils/myImage_Gen2.jpeg";

import AwardIcon from "../assets/award-solid.svg?react";
import GraduationIcon from "../assets/graduation-cap-solid.svg?react";

import { SectionWrapper } from "../hoc";

const About = () => {
  return (
    <div className="w-full h-full bg-primary mx-auto">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>
          Introduction
        </p>
        <h2 className={`${styles.sectionHeadText}`}>
          Overview
        </h2>
      </motion.div>

      {/* Content Section */}
      {/* Changed flex direction to flex-col for small screens, flex-row for large */}
      <div className="flex flex-col lg:flex-row gap-10 mt-8 lg:mt-4">
        {/* Image Section */}
        {/* Changed width and height to full for small screens */}
        <Tilt className="lg:max-w-[300px] lg:max-h-[300px] max-w-[300px] max-h-[300px]">
          <motion.div
            variants={fadeIn("right", "spring", 0.5, 1)}
            className="w-full green-pink-gradient p-[1px]
            rounded-[20px] shadow-card"
          >
            <div
              options={{
                max: 45,
                scale: 1,
                speed: 450,
              }}
              className="overflow-hidden rounded-[20px]"
            >
              {/* Adjusted image to be responsive with w-full and h-full */}
              <img
                src={aboutImg}
                alt="my_Image"
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>
        </Tilt>

        {/* Text and Info Section */}
        {/* Added w-full to ensure text section takes full width on small screens */}
        <div className="flex flex-col gap-6 justify-center w-full">
          {/* Icons and Details */}
          {/* Changed flex direction to flex-col for small screens, flex-row for larger */}
          <div className="flex flex-col sm:flex-row gap-6">
            {/* Experience Section */}
            <motion.div
              variants={fadeIn("down", "spring", 0.5, 1)}
              className="rounded-[20px] border border-1 p-6 flex flex-col
              flex-1 justify-center items-center"
            >
              <AwardIcon width="25" height="25" fill="#ffffff" />
              <p className="text-white text-lg">Experience</p>
              <p className="text-secondary">0+ years</p>
              <p className="text-secondary">FrontEnd Development</p>
            </motion.div>

            {/* Education Section */}
            <motion.div
              variants={fadeIn("down", "spring", 0.5, 1)}
              className="rounded-[20px] border border-1 p-6 flex flex-col
              flex-1 justify-center items-center"
            >
              <GraduationIcon width="25" height="25" fill="#ffffff" />
              <p className="text-white text-lg">Education</p>
              <p className="text-secondary">B.E. CSE</p>
            </motion.div>
          </div>

          {/* About Text */}
          {/* Adjusted text size for small screens and centered it */}
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="text-secondary text-[1rem] sm:text-[1.1rem]
            leading-relaxed max-w-3xl mx-auto lg:mx-0"
          >
            I'm a passionate Front-End Developer with a strong foundation in
            creating interactive and responsive web applications. With a knack
            for blending creativity with technical skills, dive in to explore my
            projects, skills, and journey in web development!
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");

