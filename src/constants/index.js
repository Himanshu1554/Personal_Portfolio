import {
    carrent,
    jobit,
    tripguide,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const technologies = [
    {
      name: "HTML",
      icon: "html",
      color: "rgb(225, 78, 29)",
      shadowcolor: "rgb(233, 233, 233)"
    },
    {
      name: "CSS",
      icon: "css",
      color: "rgb(2, 119, 189)",
      shadowcolor: "rgb(233, 233, 233)"
    },
    {
      name: "JavaScript",
      icon: "js",
      color: "rgb(240, 219, 79)",
      shadowcolor: "rgb(233, 233, 233)"
    },
    {
      name: "React",
      icon: "react",
      color: "rgb(0, 216, 255)",
      shadowcolor: "rgb(0, 216, 255)"
    },
    {
      name: "Redux",
      icon: "redux",
      color: "rgb(118, 74, 188)",
      shadowcolor: "rgb(233, 233, 233)"
    },
    {
      name: "Tailwind",
      icon: "tailwind",
      color: "rgb(30, 189, 187)",
      shadowcolor: "rgb(30, 189, 187)"
    },
    {
      name: "Git",
      icon: "git",
      color: "rgb(240, 60, 46)",
      shadowcolor: "rgb(233, 233, 233)"
    },
    {
      name: "Github",
      icon: "github",
      color: "rgb(233, 233, 233)",
      shadowcolor: "rgb(233, 233, 233)"
    }
  ];
  
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
    {
      name: "Admin DashBoard",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { technologies, projects };