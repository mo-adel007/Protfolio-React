import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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

const services = [
  {
    title: "Front-End Developer",
    icon: mobile,
  },
  {
    title: "Back-End Developer",
    icon: backend,
  },
  {
    title: "ICT Teacher",
    icon: web,
  },
  {
    title: "Front-End Instructor",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Astro Tech",
    // icon: starbucks,
    iconBg: "#383E56",
    date: "Sep 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "ICT Teacher",
    company_name: "British Modern School",
    // icon: tesla,
    iconBg: "#E6DEDD",
    date: "Sep 2023 - Present",
    points: [
      "Played a key role in developing and adapting the ICT curriculum to align with international standards.",
      "Developed and implemented engaging and innovative teaching methods to enhance students.",
      "Conducted ICT workshops for students while integrating computing and digital literacy skills.",
      "Maintained strong parent communication.",
    ],
  },
  {
    title: "Front-End Instructor",
    company_name: "Black Horse Courses",
    // icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2024 - Present",
    points: [
      "Instructed HTML, CSS, JavaScript, React, Bootstrap and jQuery with clarity and expertise.",
      "Developed task-driven learning to reinforce practical concepts and tackle real-world challenges",
    ],
  },
  {
    title: "Web Programming Instructor",
    company_name: "Mawaheb Academy",
    // icon: meta,
    iconBg: "#E6DEDD",
    date: "June 2023 - Sep 2023",
    points: [
      "Coaching and directing to improve flexibility and technical skills to the students while offering guidance.",
      "Creating fun learning environment using classroom management skills and engaging with different levels",
      " Designed practical tasks to reinforce hands on application of concepts.",
    ],
  },
  {
    title: "Artificial Intelligence Analyst",
    company_name: "IBM",
    // icon: IBM,
    iconBg: "#E6DEDD",
    date: "Sep 2019 - Oct 2019",
    points: [
      "Passing the IBM Academic Certificate Exam for Artificial Intelligence Analyst 2019 Mastery Award.",
      "Building Chatbots using IBMCloud.",
      " Working with IBM Knowledge studio to get insights from PDFs and Word Files.",
      "Working with IBM Watson Assistant to increase the intelligence of chatbots.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Mohamed does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Mohamed optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Social Media App",
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
    name: "Attendance App",
    description:
      "Web application that simplifies attendance tracking using advanced facial recognition technology. It accurately identifies people and records their attendance efficiently.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Flask",
        color: "green-text-gradient",
      },
      {
        name: "Redux",
        color: "pink-text-gradient",
      },
      {
        name: "OpenCV",
        color: "green-text-gradient",
      },
      {
        name: "TensorFlow",
        color: "pink-text-gradient",
      },
      {
        name: "SQL",
        color: "green-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Chatting App",
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
];

export { services, technologies, experiences, testimonials, projects };
