import { Code2, Database, Wrench, Palette } from 'lucide-react';
import { Project, Experience, Skill } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "C++ Chat Application",
    description: "Developed a chat application using C++ that allows real-time messaging between multiple users.",
    image: "https://ik.imagekit.io/ably/ghost/prod/2023/01/build-a-realtime-chat-app-from-scratch--1-.png?tr=w-1728,q-50", // Example image
    tags: ["C++", "Networking", "Multithreading"],
    github: "https://github.com/username/chat-application",
    link: "https://chat-application.com"
  },
  {
    id: 2,
    title: "Cloud Box using AWS",
    description: "Built a cloud storage solution using AWS that enables users to upload and manage their files securely.",
    image: "https://i0.wp.com/blog.richmond.edu/urtechsavvy/files/2015/08/Screen-Shot-2012-05-24-at-14.42.00-632x245.png?fit=632%2C245&ssl=1", // Example image
    tags: ["AWS", "Cloud Computing", "S3", "EC2"],
    github: "https://github.com/username/cloud-box",
    link: "https://cloud-box.com"
  },
  {
    id: 3,
    title: "Weather Forecasting App",
    description: "Developed a weather forecasting app using React that displays real-time weather information.",
    image: "https://www.analyticssteps.com/backend/media/thumbnail/6006173/6278986_1571298721_Weather_Forecoast_Graphics.jpg", // Example image
    tags: ["React", "API", "Weather"],
    github: "https://github.com/username/weather-app",
    link: "https://weather-app.com"
  },
  {
    id: 4,
    title: "COVID Simulation",
    description: "Created a COVID-19 simulation model to predict the spread of the virus and its impact on different regions.",
    image: "https://news.ki.se/sites/nyheter/files/styles/article_full_width/public/qbank/Corona_genetics_GettyImages-1312985523-custom20220112094822.jpg", // Example image
    tags: ["Python", "Simulation", "COVID-19"],
    github: "https://github.com/username/covid-simulation",
    link: "https://covid-simulation.com"
  }
];

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Python Full Stack Intern",
    company: "Brainovision Pvt Ltd",
    period: "June 2024 to August 2024",
    description: [
      "Developed a full-stack web application using Python, React, and AWS, improving system performance by 15%",
      "Implemented RESTful APIs with Node.js and PostgreSQL to handle database interactions.",
      "Led the migration of legacy code to a more efficient, scalable solution, reducing deployment time by 25%",
      "Worked closely with the front-end team to ensure seamless integration with React and AWS services."
    ]
  }
];

export const categories = [
  { id: 'frontend', label: 'Frontend', icon: Code2 },
  { id: 'backend', label: 'Backend', icon: Database },
  { id: 'tools', label: 'Tools', icon: Wrench },
  { id: 'other', label: 'Other', icon: Palette },
] as const;

export const skills: Skill[] = [
  {
    id: 1,
    name: "Python",
    icon: "python",
    category: "backend"
  },
  {
    id: 2,
    name: "JavaScript, TypeScript, HTML, CSS",
    icon: "code",
    category: "frontend"
  },
  {
    id: 3,
    name: "React/Next.js",
    icon: "react",
    category: "frontend"
  },
  {
    id: 4,
    name: "Node.js",
    icon: "server",
    category: "backend"
  },
  {
    id: 5,
    name: "C++",
    icon: "code",
    category: "backend"
  },
  {
    id: 6,
    name: "AWS",
    icon: "cloud",
    category: "tools"
  },
  {
    id: 7,
    name: "Docker/Kubernetes",
    icon: "container",
    category: "tools"
  },
  {
    id: 8,
    name: "GraphQL",
    icon: "database",
    category: "backend"
  },
  {
    id: 9,
    name: "DSA (Data Structures & Algorithms)",
    icon: "git",
    category: "other"
  },
  {
    id: 10,
    name: "Communication Skills",
    icon: "message-circle",
    category: "other"
  },
  {
    id: 11,
    name: "Leadership Skills",
    icon: "users",
    category: "other"
  }
];
