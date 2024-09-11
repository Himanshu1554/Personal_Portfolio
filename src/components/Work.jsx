import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { projects } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import LiveIcon from "../assets/eye-solid.svg?react"
import GithubIcon from "../assets/square-github-brands-solid.svg?react"

import styled from 'styled-components'

const CustomVerticalTimelineElement = styled(VerticalTimelineElement)`
  margin-bottom: -30px;
  
  @media (max-width: 1169px) {
    margin-bottom: 20px;
  }

  .vertical-timeline-element-date {
    display: none; 
  }

  && .vertical-timeline-element-content{
    padding: 15px;

    @media (min-width: 723px) and (max-width: 854px){
      padding: 20px;
    }
    @media (min-width: 854px) and (max-width : 1169px){
      padding: 30px;
    }
  }
  .relative.flex {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media (min-width: 600px) {
      flex-direction: row;
    }
  }
  h3 {
    font-size: 1.25rem;
    font-weight: bold;

    @media (max-width: 854px) {
      font-size: 1rem;
    }
  }

  p {
    font-size: 0.875rem;

    @media (max-width: 854px) {
      font-size: 0.75rem;
    }
  }

  .motion-button {
    font-size: 1rem;
    padding: 0.5rem 1rem;

    @media (max-width: 854px) {
      font-size: 0.875rem;
      padding: 0.4rem 0.8rem;
    }
  }
`;

const CustomVerticalTimeline = styled(VerticalTimeline)`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media(min-width: 769px) and (max-width : 1024px){
    gap: 20px;
    width: 90%;
  }
  @media (min-width: 1025px) and (max-width : 1169px){
    gap: 20px;
    width: 80%;
  }
`;


const ProjectCard = ({ project }) => (
  <CustomVerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{
      background: "#1d1836",
      color: "#fff",
    }}
    contentArrowStyle={{ borderRight: "8px solid #fff" }}
    iconStyle={{ 
    background: `radial-gradient(circle at 50% 50%, 
                 rgba(0, 0, 0, 1) 0%, rgba(29, 24, 54, 1) 0%, 
                 rgba(29, 24, 54, 1) 21%, rgba(64, 73, 117, 1) 100%)` 
    }}
  >
    <div className="relative flex gap-6">
      <Tilt className="flex flex-1 aspect-auto">
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="overflow-hidden rounded-lg h-full w-full"
        >
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-"
          />
        </div>
      </Tilt>

      <div className="flex flex-1 flex-col items-start">
        <h3 className="text-white font-bold text-[1.25rem]">{project.name}</h3>
        <p className="text-secondary"
        style={{fontSize: '12px'}}
        >{project.description}</p>

        <div className="flex flex-row gap-4 items-center mt-4">
          <motion.button
          whileHover={{ scale: 1.1, fontColor: "#40367d" }}
          whileTap={{ scale: 0.95 }} 
          className="flex flex-row gap-1 items-center 
          justify-center text-[#4c408a] text-[18px] 
          font-semibold border-none bg-slate-200 rounded-xl
          px-2 py-2">
            <LiveIcon width="20" height="20" fill="#291e61"/>
            Demo
          </motion.button>
          <motion.button
          whileHover={{ scale: 1.1, fontColor: "#40367d" }}
          whileTap={{ scale: 0.95 }}
          className="flex flex-row gap-1 items-center 
          justify-center text-[#4c408a] text-[18px] 
          font-semibold border-none bg-slate-200 rounded-xl
          px-2 py-2">
            <GithubIcon width="20" height="20" fill="#291e61"/>
            Code
          </motion.button>
        </div>
      </div>
    </div>
  </CustomVerticalTimelineElement>
);

const Work = () => {
  return (
    <>
    <div className="w-full h-full bg-primary">
      <motion.div variants={textVariant(0)}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <motion.div variants={fadeIn("top", "spring", 0.1, 1)}>
        <p
          className="mt-3 text-secondary text-[16px]
           leading-[30px] max-w-3xl"
        >
          Discover a curated selection of my work, where creativity meets
          functionality. Every project awakens this zeal in me to solve complex
          challenges through thoughtful design and intuitive user experiences.
        </p>
      </motion.div>

      <div className="mt-10">
        <CustomVerticalTimeline
        animate= {true}>
          {projects.map((project, index) => (
            <ProjectCard
              key={`project-${index}`}
              index={index}
              project={project}
            />
          ))}
        </CustomVerticalTimeline>
      </div>
    </div>
    </>
  );
};

export default SectionWrapper(Work, "work");
