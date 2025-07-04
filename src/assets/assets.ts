import heroImg from "./hero-img.png"
import developerImg from "./software-developer.jpg"
import techSackImg from "./stack.png"
import collabImg from "./collaboration.png"
import apiImg from "./api.png"
import optimizationImg from "./optimization.png"
import aboutHeroImg from "./about-hero.jpg" 

export const assets = {
    heroImg,
    developerImg,
    aboutHeroImg
};

export const services = [
    {
        id: 1,
        title: "UI/UX Design",
        desc: "Crafting clean, intuitive, and responsive user interfaces."
    },
    {
        id: 2,
        title: "Frontend Development",
        desc: "Building fast, modern websites with React and JavaScript."
    },
    {
        id: 3,
        title: "Web Animation",
        desc: "Adding life to interfaces with smooth, interactive animations."
    },
    {
        id: 4,
        title: "API Integration",
        desc: "Connecting apps to real data using RESTful APIs."
    },
    {
        id: 5,
        title: "Performance Optimization",
        desc: "Improving site speed, accessibility, and mobile responsiveness."
    }
];


export const projects = [
    {
        id: 1,
        img: developerImg,
        title: "SmartBank",
        desc: "A modern banking dashboard with smooth UI and secure features.",
        location: "owerri"
    },
    {
        id: 2,
        img: developerImg,
        title: "SwiftDrop",
        desc: "A delivery tracking app with real-time updates and interactive maps.",
        location: "owerri"
    },
    {
        id: 3,
        img: developerImg,
        title: "TaskZen",
        desc: "Adding life to interfaces with smooth, interactive animations.",
        location: "owerri"
    },
    {
        id: 4,
        img: developerImg,
        title: "DevXHub",
        desc: "A portfolio-style dev community hub showcasing dev profiles and skills.",
        location: "owerri"
    },
    {
        id: 5,
        img: developerImg,
        title: "FitTrack",
        desc: "A fitness tracker for logging workouts, setting goals, and viewing stats.",
        location: "owerri"
    }
];

 export const skills = [
    {
        id: 1,
        title: "Frameworks & Libraries",
        skillOne: "React.js",
        skillTwo: "Next.js",
        skillThree: "Tailwind CSS",
        skillFour: "Redux (or Zustand)",
        img: techSackImg,
    },
    {
        id: 2,
        title: "Tools & Workflow",
        skillOne: "Git & GitHub",
        skillTwo: "VS Code",
        skillThree: "Chrome DevTools",
        skillFour: "Vite / Webpack",
        img: collabImg,
    },
    {
        id: 3,
        title: "API & Data",
        skillOne: "RESTful APIs",
        skillTwo: "JSON",
        skillThree: "Axios / Fetch",
        skillFour: "LocalStorage / SessionStorage",
        img: apiImg,
    },
    {
        id: 4,
        title: "Optimization",
        skillOne: "Lazy Loading",
        skillTwo: "Code Splitting",
        skillThree: "Lighthouse Testing",
        skillFour: "SEO Basics",
        img: optimizationImg,
    },
];

export const jobExperiences = [
    {
        id: 1,
        job_title: "Frontend Developer – Personal Projects",
        job_role: "Self-Taught | Remote | 2023 – Present",
        job_desc: "Built multiple responsive web applications using React, JavaScript, and Tailwind CSS. Focused on performance, accessibility, and user-friendly UI/UX design."
    },
    {
        id: 2,
        job_title: "UI Engineer – SmartBank (Portfolio Project)",
        job_role: "Remote | 2024",
        job_desc: "Designed and developed a modern banking dashboard UI with React and Framer Motion. Integrated interactive charts, responsive layouts, and state management using Zustand."
    },
    {
        id: 3,
        job_title: "Web Developer – SwiftDrop Delivery App",
        job_role: "Remote | 2024",
        job_desc: "Created a delivery tracking interface with real-time order updates, map integration, and smooth animations. Focused on mobile-first design and clean component architecture."
    },
    {
        id: 4,
        job_title: "JavaScript Developer – TaskZen To-Do App",
        job_role: "Remote | 2023",
        job_desc: "Built a fully functional to-do app with CRUD operations, localStorage, dark mode, and smooth transitions. Applied modular JS practices and scalable CSS architecture."
    },
    {
        id: 5,
        job_title: "React Developer – DevXHub Community App",
        job_role: "Remote | 2024",
        job_desc: "Developed a dev portfolio/community hub featuring user profiles, project showcases, and tag-based filtering. Emphasized reusable components, performance, and UI consistency."
    },
];

export const eduAndCert = [
    {
        id: 1,
        name: " Certificate in Front-End Web Development",
        src: "Alison – Global Online Learning",
        completed: "March 2024",
    },
    {
        id: 2,
        name: "Responsive Web Design Certification",
        src: "freeCodeCamp.org",
        completed: "January 2024",
    },
    {
        id: 3,
        name: "JavaScript Algorithms and Data Structures",
        src: "freeCodeCamp.org",
        completed: "April 2024",
    }
]