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
]