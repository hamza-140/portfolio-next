import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import cryptoCrowdImg from "@/public/cryptocrowd2.png";

import ozdevsImg from "@/public/ozdevs.png";
import assetTradingImg from "@/public/asset-trading.jpg";
import euphorusImg from "@/public/euphorus-two.png";
import euphorusBackendImg from "@/public/euphorus-backend.png";
import techprowlImg from "@/public/techprowl-two.png";
import taskManagerImg from "@/public/task-manager.png";
import familyTreeImg from "@/public/bfsproject.jpg";
import binaryGameImg from "@/public//binary-game.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Freelancer",
    location: "Remote",
    description:
      "Engaged by Assign Project International for a high-level transcription project, leveraging the Datacompute platform to deliver exceptional results. Demonstrated advanced linguistic skills by accurately transcribing a variety of audio formats, including complex speech patterns and multilingual content. Adhered to rigorous quality standards, consistently exceeding the 90% accuracy threshold. Managed tight deadlines with precision, showcasing a commitment to excellence and meticulous attention to detail in all deliverables.",
    icon: React.createElement(CgWorkAlt),
    date: "July 2022 - Present",
  },
  {
    title: "Angular Internee",
    location: "CyberSilo PVT Ltd",
    description:
      "At CyberSilo, I played a key role in managing and enhancing the company's project service, ThreatHawk. Utilizing AngularJS for front-end development, I collaborated on designing and implementing user interfaces that were both intuitive and efficient. My most significant achievement was identifying and resolving a critical issue in the ticketing system, where unlimited network requests were being generated due to a malfunction. By optimizing the system, I successfully reduced these unnecessary requests by 95%, significantly improving system efficiency and reducing server load. My contributions highlighted my proficiency in AngularJS, problem-solving, and technical innovation, ensuring a more stable and reliable service.",
    icon: React.createElement(CgWorkAlt),
    date: "February 2024 - March 2024",
  },
  {
    title: "Ruby on Rails Internee",
    location: "TwinSpider Technologies",
    description:
      "At TwinSpider Technologies, I gained valuable hands-on experience in full-stack development, working primarily with Ruby on Rails. I contributed to the development and optimization of several key projects, including a project management tool with MVC architecture and role-based authorization. My responsibilities included debugging and refining existing code.",
    icon: React.createElement(CgWorkAlt),
    date: "March 2024 - May 2024",
  },
] as const;

export const projectsData = [
  {
    title: "Tinytot Learners",
    description:
      "Tinytot Learners is an educational platform designed to enhance early childhood learning experiences through interactive, engaging, and personalized content. The platform focuses on fostering foundational skills in young learners by games, quizzes, and multimedia content tailored to various learning levels.",
    tags: ["JavaScript", "React", "Express.js", "AWS"],
    icons: [
      "logos:firebase",
      "tabler:brand-react-native",
      "logos:react",
      "logos:bootstrap",
      "devicon:tailwindcss",
    ],
    imageUrl: cryptoCrowdImg,
    githubLink: "https://github.com/hamza-140/tinytot-fyp",
    // demoLink: "https://www.youtube.com/watch?v=uhyC0M4WIl4",
  },
  {
    title: "Job Portal",
    description:
      "Developed a full-stack web application using the MERN stack (MongoDB, Express, React, Node.js) that enables users to post job listings, apply for jobs, and manage applications efficiently. The platform features seamless API integration and robust database management, offering a user-friendly experience for both job seekers and employers.",
    tags: ["React", "MongoDB", "Express", "Tailwind", "Node"],
    icons: [
      "logos:react",
      "devicon:mongodb-wordmark",
      "logos:bootstrap",
      "logos:express",
      "devicon:nodejs",
    ],
    imageUrl: ozdevsImg,
    // urlLink: "https://clownfish-app-48u2r.ondigitalocean.app/",
    // githubLink: "https://github.com/ben04rogers/ozdevs-v2",
  },
  {
    title: "Bugzilla",
    description:
      "Developed a comprehensive Bugzilla Web App using Ruby on Rails, streamlining bug tracking and issue management. The application enhanced project efficiency by allowing for seamless bug reporting, tracking, and resolution, contributing to improved collaboration and overall product quality.",
    tags: ["Ruby on Rails", "Sidekiq"],
    icons: ["mdi:language-ruby-on-rails", "logos:sidekiq"],
    imageUrl: assetTradingImg,
    // githubLink: "https://github.com/ben04rogers/organisation-asset-trading",
  },
  // {
  //   title: "Euphorus",
  //   description:
  //     "React application for viewing country happiness data collected from the World Happiness Report initiative. Users can filter by year, country and search limit. AG Grid and Chart.js were used to present the data.",
  //   tags: ["JavaScript", "React", "Bootstrap"],
  //   icons: ["logos:javascript", "logos:react", "logos:bootstrap"],
  //   imageUrl: euphorusImg,
  //   githubLink: "https://github.com/ben04rogers/cab230assignment1",
  // },
  // {
  //   title: "Country Happiness API",
  //   description:
  //     "Developed and deployed an Express API to support the front-end of the Euphorus Happiness Data web application. Routes support query parameters and authorization using JWT. Includes endpoints for countries, rankings, factors, registration, login, and profile. Tested software extensively with Jest and created Swagger documentation for the API as well.      ",
  //   tags: ["JavaScript", "Node.js", "Express.js", "Swagger", "MySQL"],
  //   icons: ["logos:javascript", "logos:express", "logos:swagger", "cib:mysql"],
  //   imageUrl: euphorusBackendImg,
  //   githubLink: "https://github.com/ben04rogers/cab230assignment2",
  // },
  {
    title: "Helmet Detection",
    description:
      "Developed a Helmet Detection system leveraging Artificial Intelligence with YOLOv7, a PyTorch framework. The project involved creating a specialized environment using Anaconda, dataset annotation with labelimg, and dataset splitting for training, validation, and testing. The model was trained using transfer learning with pre-trained YOLOv7 weights, focusing on detecting two classes: 'With Helmet' and 'Without Helmet.'",
    tags: ["Python", "YOLOv7", "PyTorch", "TensorBoard"],
    icons: [
      "logos:python",
      "logos:pytorch",
      "logos:tensorflow",
      "devicon:anaconda-wordmark",
    ],
    imageUrl: techprowlImg,
    // githubLink: "https://github.com/ben04rogers/computer-auction",
    // urlLink: "https://techprowl.herokuapp.com",
  },
  // {
  //   title: "Task Manager Console App",
  //   description:
  //     "Console app that manages tasks in a project. Users can load projects from a file and generate a seqeuence to complete them in, based on each task's dependencies. Users can also find earliest possible commencement time of each task, add new tasks, update tasks, remove tasks, and save the results to a text file.",
  //   tags: ["C#"],
  //   icons: ["devicon:csharp"],
  //   imageUrl: taskManagerImg,
  //   githubLink: "https://github.com/ben04rogers/task-manager",
  // },
  // {
  //   title: "Family Tree Shortest Path",
  //   description:
  //     "Python program that implements a breadth-first search algorithm to generate a minimal spanning tree. Problem was to calculate a shortest path from a starting vertex in a graph to each other vertex. The vertices represent people and each person is related to every other person through parent-child relationships. A person can see how they are related to each other person in the tree",
  //   tags: ["Python"],
  //   icons: ["logos:python"],
  //   imageUrl: familyTreeImg,
  //   githubLink: "https://github.com/ben04rogers/breadth-first-search",
  //   demoLink: "https://www.youtube.com/watch?v=VXCZKsqupxA",
  // },
  // {
  //   title: "Arduino Binary Game",
  //   description:
  //     "Binary game written in C that runs on an Arduino Uno using Tinkercad. The game aims to help users learn binary by challenging them to input different integers in their binary form within a time limit.",
  //   tags: ["C"],
  //   icons: ["devicon:c"],
  //   imageUrl: binaryGameImg,
  //   githubLink: "https://github.com/ben04rogers/binary-game-microcontroller",
  //   demoLink: "https://www.youtube.com/watch?v=A6n6XDk4Unw&feature=youtu.be",
  // },
] as const;

export const skillsData = [
  {
    name: "JavaScript",
    icon: "logos:javascript",
  },
  {
    name: "React Native",
    icon: "tabler:brand-react-native",
  },
  {
    name: "TypeScript",
    icon: "logos:typescript-icon",
  },
  {
    name: "React",
    icon: "logos:react",
  },
  {
    name: "Node.js",
    icon: "logos:nodejs-icon",
  },
  {
    name: "Ruby on Rails",
    icon: "mdi:language-ruby-on-rails",
  },
  {
    name: "Sidekiq",
    icon: "logos:sidekiq",
  },
  {
    name: "Angular Js",
    icon: "logos:angular-icon",
  },
  {
    name: "Python",
    icon: "logos:python",
  },
  {
    name: "ElasticSearch",
    icon: "logos:elasticsearch",
  },
  {
    name: "HTML",
    icon: "vscode-icons:file-type-html",
  },
  {
    name: "CSS",
    icon: "vscode-icons:file-type-css",
  },
  {
    name: "Ruby",
    icon: "devicon:ruby",
  },
  {
    name: "Git",
    icon: "logos:git-icon",
  },
  {
    name: "MongoDB",
    icon: "logos:mongodb-icon",
  },
  {
    name: "Linux",
    icon: "flat-color-icons:linux",
  },
  {
    name: "Firebase",
    icon: "logos:firebase",
  },
  {
    name: "Docker",
    icon: "logos:docker-icon",
  },
  {
    name: "Flask",
    icon: "skill-icons:flask-light",
  },
] as const;
