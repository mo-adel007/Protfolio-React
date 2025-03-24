import {
  mobile,
  backend,
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
  carrent,
  jobit,
  tripguide,
  github,
  firebase,
  realestate,
  chatting,
  sociolo,
  agco,
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
    title: "MERN Stack Developer",
    icon: backend,
  },
  {
    title: "Front-End Developer",
    icon: backend,
  },
  {
    title: "Back-End Developer",
    icon: backend,
  },
  {
    title: "Programming Instructor",
    icon: web,
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
    name: "git",
    icon: git,
  },
  {
    name: "github",
    icon: github,
  },
  {
    name: "firebase",
    icon: firebase,
  },
];

const experiences = [
  {
    title: "MERN Full Stack Developer",
    company_name: "AGCO Properties",
    // icon: starbucks,
    iconBg: "#383E56",
    points: [
      "Built and deployed a secure, role-based real estate platform and its accompanying website, integrate Firebase for image uploads, and configured NGINX for reverse proxy to ensure seamless communication between the MERN stack dashboard and the front-end application.",
      "Ensuring robust data security and controlled access to services according to the roles of the users.",
      "Implement visual designs from Figma into web pages using React.js & Tailwind CSS.",
      "A high-performance, structured frontend application built with Next.js, designed to seamlessly consume and display real estate data from the MERN stack dashboard.",
    ],
  },
  {
    title: "English Course Presenter",
    company_name: "iSchool",
    // icon: starbucks,
    iconBg: "#383E56",
    points: [
      "Presented engaging web development sessions focused on JavaScript, tailored for students.",
      "Delivered interactive educational content and simplifying complex web development concepts.",
    ],
  },
  {
    title: "English Computer Science Instructor",
    company_name: "iSchool",
    // icon: starbucks,
    iconBg: "#383E56",
    points: [
      "Accredited courses for kids in AI & ML & Game & Web & Mobile development & coding with blocks",
      "Using practical examples to teach coding that helps students create software applications.",
      "Delivered accredited STEM courses on early concept-building in computational thinking.",
    ],
  },
  {
    title: "Front-End Instructor",
    company_name: "Egyptian Council Training & Development",
    // icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2024 - Present",
    points: [
      "Preparing Egyptian women for the professional market with high-quality and affordable education.",
      "Instructed HTML, CSS, Bootstrap, JavaScript and React.js to control and create dynamic web applications.",
      "Enhance technical thinking and academic knowledge in the web development track.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Astro Tech",
    // icon: starbucks,
    iconBg: "#383E56",
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
    points: [
      "Played a key role in developing and adapting the ICT curriculum to align with international standards.",
      "Developed and implemented engaging and innovative teaching methods to enhance students.",
      "Conducted ICT workshops for students while integrating computing and digital literacy skills.",
      "Maintained strong parent communication.",
    ],
  },
  {
    title: "Web Programming Instructor",
    company_name: "Mawaheb Academy",
    // icon: meta,
    iconBg: "#E6DEDD",
    points: [
      "Coaching and directing to improve flexibility and technical skills to the students while offering guidance.",
      "Creating fun learning environment using classroom management skills and engaging with different levels",
      "Designed practical tasks to reinforce hands on application of concepts.",
    ],
  },
  {
    title: "Artificial Intelligence Analyst",
    company_name: "IBM",
    // icon: IBM,
    iconBg: "#E6DEDD",
    points: [
      "Passing the IBM Academic Certificate Exam for Artificial Intelligence Analyst 2019 Mastery Award.",
      "Building Chatbots using IBMCloud.",
      "Working with IBM Knowledge studio to get insights from PDFs and Word Files.",
      "Working with IBM Watson Assistant to increase the intelligence of chatbots.",
    ],
  },
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Mohamed does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Mohamed optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  {
    name: "AGCO Properties",
    description:
      "Developed a structured Next.js-based designed to seamlessly and display data from the MERN stack dashboard Integrated Google Maps API to provide interactive property visualization and location-based filtering. Implemented an intelligent search and filtering system for dynamic, real-time property listings.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: agco,
    source_code_link: "https://github.com/mo-adel007/agco-properties-mern.git",
    liveUrl: "https://agcoproperties.com/",
  },
  {
    name: "Real Estate Platform",
    description:
      "Developed a secure web application incorporating role-based authentication and authorization to manage distinct user roles effectively with proper redundant for the load on the server.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "pink-text-gradient",
      },
      {
        name: "NodeJS",
        color: "green-text-gradient",
      },
      {
        name: "ExpressJS",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "tailwindCSS",
        color: "pink-text-gradient",
      },
      {
        name: "Firebase",
        color: "blue-text-gradient",
      },
    ],
    image: realestate,
    source_code_link: "https://github.com/mo-adel007/agco-properties-mern.git",
    liveUrl: "https://dashboard.agcoproperties.com/",
  },
  {
    name: "Social Media Application",
    description:
      "Social media application show casing dynamic features such as user posts, image likes, comments, friend management, and a customizable dark/light mode UI. Implemented secure user registration, authentication, and token-based route protection for robust user interactions.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "pink-text-gradient",
      },
      {
        name: "NodeJS",
        color: "green-text-gradient",
      },
      {
        name: "ExpressJS",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
    ],
    image: sociolo,
    source_code_link: "https://github.com/mo-adel007/MERN-Sociolo-APP.git",
    liveUrl:
      "https://www.linkedin.com/posts/muhamed-adel-fahmy-548a431b1_fullstackdevelopment-webdevelopment-reactjs-ugcPost-7110307993769930752-l6Nt?utm_source=share&utm_medium=member_desktop&rcm=ACoAADF0I0gBX1jtjmRcTldGgKCTCs5BrofzgRw",
  },
  {
    name: "Chatting Application",
    description:
      "Chatting application, featuring real time messaging, typing indicators, secure OAuth Authentication,group chats, user & admin authorizations, search for initiating conversations.",
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
    image: chatting,
    source_code_link: "https://github.com/mo-adel007/MERN-ChatApp.git",
    liveUrl:
      "https://www.linkedin.com/posts/muhamed-adel-fahmy-548a431b1_chatapplication-react-chakraui-activity-7109161494654726144-kq1s?utm_source=share&utm_medium=member_desktop&rcm=ACoAADF0I0gBX1jtjmRcTldGgKCTCs5BrofzgRw",
  },
];

export { services, technologies, experiences, projects };
