import { motion } from "framer-motion";
import { styles } from "../styles";

import heroImg from "../utils/myImage_Gen3-removebg.png";
import { fadeIn } from "../utils/motion";

import GithubIcon from "../assets/github-brands-solid.svg?react";
import LinkedinIcon from "../assets/linkedin-brands-solid.svg?react";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0
        top-[120px] max-w-7xl mx-auto flex flex-row 
        lg:items-start lg:mt-18 lg:mb-0 sm:items-center 
        sm:mt-20 sm:mb-0 items-center mt-32 gap-5 z-10 `}
      >
        <motion.div
          variants={fadeIn("down", "tween", 0, 1)}
          initial="hidden"
          animate="show"
          className="flex flex-col justify-center
          items-center sm:mb-0 mb-6"
        >
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </motion.div>

        <motion.div
          variants={fadeIn("up", "swing", 0, 1)}
          initial="hidden"
          animate="show"
        >
          <p className={`${styles.heroSubText}`}>Hello, It's me</p>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Himanshu Prajapati
          </h1>
          <h1 className={`${styles.heroHeadText}`}>
            I'm a &nbsp;
            <span className="text-[#915eff]">Front End Developer</span>
          </h1>
          <p className="flex flex-wrap max-w-xl text-[#dfd9ff] font-medium 
            lg:text-[16px] sm:text-[16px] xs-text[14px] text-[14px]">
            I craft visually engaging, responsive web interfaces that bring
            ideas to life. I transform concepts into interactive, dynamic
            digital products.
          </p>

          <div className="flex flex-row gap-4 mt-3 sm:mt-6">
            <motion.a
              href="https://github.com/Himanshu1554"
              target="_blank"
              whileHover={{ scale: 1.15, background: "#ffffff"  }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex justify-center items-center 
              w-[45px] h-[45px] sm:w-[50px] sm:h-[50px] 
              rounded-full 
              bg-gradient-to-r from-[#6e40c9] to-[#915eff] 
              shadow-lg cursor-pointer group"
            >
              <GithubIcon
                className="fill-white group-hover:fill-[#915eff] transition-all duration-300 
                w-9 h-9 md:w-10 md:h-10"
              />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/himan1554"
              target="_blank"
              whileHover={{ scale: 1.15, background: "#ffffff" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex justify-center items-center 
              w-[45px] h-[45px] sm:w-[50px] sm:h-[50px] 
              rounded-full 
              bg-gradient-to-r from-[#6e40c9] to-[#915eff] 
              shadow-lg cursor-pointer group"
              >
              <LinkedinIcon
                className="fill-white group-hover:fill-[#915eff] transition-all duration-300 
                w-8 h-8 md:w-9 md:h-9"   
              />
            </motion.a>
          </div>
        </motion.div>
      </div>
      <div>
        <img
          src={heroImg}
          alt="Hero_Image"
          className="w-auto h-[100vh] fixed
          top-0 right-0 lg:object-cover left-auto object-cover object-custom"
        />
      </div>

      <div
        className="absolute sm:bottom-12 bottom-8 
      w-full flex justify-center items-center z-[20]"
      >
        <a href="#about">
          <div
            className="xs:w-[35px] xs:h-[64px] w-[30px] h-[50px] 
            rounded-3xl border-4 border-secondary flex 
            justify-center items-start p-2 cursor-pointer"
          >
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="xs:w-3 xs:h-3 w-2 h-2 rounded-full bg-secondary"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
