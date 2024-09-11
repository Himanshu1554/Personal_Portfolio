// import React from "react";
// import Tilt from "react-parallax-tilt";
// import { motion } from "framer-motion";

// import { styles } from "../styles";
// import { fadeIn, textVariant } from "../utils/motion";
// import aboutImg from "../utils/myImage_Gen2.jpeg";

// import AwardIcon from "../assets/award-solid.svg?react";
// import GraduationIcon from "../assets/graduation-cap-solid.svg?react";

// import { SectionWrapper } from "../hoc";

// const About = () => {
//   return (
//     <>
//     <div className="w-full h-full bg-primary mx-auto">
//       <motion.div variants={textVariant()}>
//         <p className={styles.sectionSubText}>Introduction</p>
//         <h2 className={styles.sectionHeadText}>Overview</h2>
//       </motion.div>

//       <div className="flex flex-wrap gap-10 mt-4">
//         <Tilt className="max-w-[300px] max-h-[300px]">
//           <motion.div
//             variants={fadeIn("right", "spring", 0.5, 1)}
//             className="w-full green-pink-gradient p-[1px]
//             rounded-[20px] shadow-card"
//           >
//             <div
//               options={{
//                 max: 45,
//                 scale: 1,
//                 speed: 450,
//               }}
//               className="overflow-hidden rounded-[20px]"
//             >
//               <img
//                 src={aboutImg}
//                 alt="my_Image"
//                 className="object-cover"
//               />
//             </div>
//           </motion.div>
//         </Tilt>

//         <div className="flex flex-col gap-4 flex-wrap justify-center">
//           <div className="flex flex-row flex-wrap gap-10">
//             <motion.div
//               variants={fadeIn("down", "spring", 0.5, 1)}
//               className="rounded-[20px] border border-1 
//               py-4 flex flex-col flex-1 gap-1 justify-center items-center">
//               <AwardIcon width="25" height="25" fill="#ffffff" />
//               <p>Experience</p>
//               <p>0+ years</p>
//               <p>FrontEnd Development</p>
//             </motion.div>

//             <motion.div
//               variants={fadeIn("down", "spring", 0.5, 1)}
//               className="rounded-[20px] border border-1 
//               py-6 flex flex-col flex-1 gap-1 justify-center items-center">
//               <GraduationIcon width="25" height="25" fill="#ffffff" />
//               <p>Education</p>
//               <p>B.E. CSE</p>
//             </motion.div>
//           </div>

//           <motion.p
//             variants={fadeIn("", "", 0.1, 1)}
//             className="flex flex-wrap text-secondary text-[1.1rem] 
//             max-w-3xl leading-[30px]"
//           >
//             I'm a passionate Front-End Developer with a strong foundation in
//             creating interactive and responsive web applications. With a knack
//             for blending creativity with technical skills, Dive in to explore my
//             projects, skills, and journey in web development!
//           </motion.p>
//         </div>
//       </div>
//     </div>
//     </>
//   );
// };

// export default SectionWrapper(About, "about");

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
          Overview.
        </h2>
      </motion.div>

      <div className="flex flex-col items-center about_custom:flex-row xl:gap-10 gap-6 mt-8 lg:mt-4">
        <Tilt className="max-w-[300px] max-h-[300px]">
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
              <img
                src={aboutImg}
                alt="my_Image"
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>
        </Tilt>

        <div className="flex flex-col xl:gap-6 gap-4 sm:max-w-full xl:justify-center 
             xl:mt-0 justify-start mt-2 max-w-lg">
          <div className="flex flex-col sm:flex-row gap-6">
            <motion.div
              variants={fadeIn("down", "spring", 0.5, 1)}
              className="rounded-[20px] border border-1 flex flex-col py-2
              flex-1 justify-center items-center"
            >
              <AwardIcon width="25" height="25" fill="#ffffff" />
              <p className="text-white text-lg">Experience</p>
              <p className="text-secondary">0+ years</p>
              <p className="text-secondary">FrontEnd Development</p>
            </motion.div>

            <motion.div
              variants={fadeIn("down", "spring", 0.5, 1)}
              className="rounded-[20px] border border-1 flex flex-col
              flex-1 justify-center items-center"
            >
              <GraduationIcon width="25" height="25" fill="#ffffff" />
              <p className="text-white text-lg">Education</p>
              <p className="text-secondary">B.E. CSE</p>
            </motion.div>
          </div>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="text-secondary text-[1rem] sm:text-[1.1rem]
            leading-relaxed text-justify max-w-3xl mx-auto lg:mx-0
            xs:px-0 px-2"
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

