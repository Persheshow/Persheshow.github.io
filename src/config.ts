export const siteConfig = {
  name: "Lorenzo Napolitano",
  title: "Junior Software Engineer",
  description: "Portfolio website of Lorenzo Napolitano",
  accentColor: "#a81111",
  social: {
    email: "napolitanolorenzo39@gmail.com",
    linkedin: "https://www.linkedin.com/in/lorenzo-napolitano-439271275/",
    //twitter: "https://x.com/rfitzio",
    github: "https://github.com/Persheshow",
  },
  aboutMe:
    "Final-year Computer Science student (Università Degli Studi di Firenze) with Erasmus+ exchange experience at Universidad Carlos III de Madrid, specialized in software development and applied AI. Hands-on experience architecting and deploying backend systems and web apps.",
  skills: ["Javascript", "React", "Python", "Java", "MySQL", "Git", "HTML", "CSS"],
  projects: [
    {
      name: "Real-Time Kinematic Analysis via Computer Vision",
      description:
        "Client-side web app using MediaPipe Pose to track body landmarks in real time during weightlifting exercises, providing instant feedback on form and technique.",
      link: "https://github.com/Persheshow/appMediaPipe",
      skills: ["React", "MediaPipe", "JavaScript", "Tailwind CSS"],
    },
    {
      name: "Chrome Extension Mastery: Build Full-Stack Extensions with React & Node.js",
      description:
        "Master the art of building production-ready, full-stack Chrome Extensions using modern web technologies and best practices",
      link: "https://fullstackextensions.com/?ref=devportfolio",
      skills: ["React", "Node.js", "AWS"],
    },
    {
      name: "ExtensionKit",
      description:
        "Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates & examples",
      link: "https://extensionkit.io/?ref=devportfolio",
      skills: ["React", "Node.js", "AWS"],
    },
  ],
  experience: [
    {
      company: "Tech Company",
      title: "Senior Software Engineer",
      dateRange: "Jan 2022 - Present",
      bullets: [
        "Led development of microservices architecture serving 1M+ users",
        "Reduced API response times by 40% through optimization",
        "Mentored team of 5 junior developers",
      ],
    },
    {
      company: "Startup Inc",
      title: "Full Stack Developer",
      dateRange: "Jun 2020 - Dec 2021",
      bullets: [
        "Built and launched MVP product from scratch using React and Node.js",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Collaborated with product team to define technical requirements",
      ],
    },
    {
      company: "Digital Agency",
      title: "Frontend Developer",
      dateRange: "Aug 2018 - May 2020",
      bullets: [
        "Developed responsive web applications for 20+ clients",
        "Improved site performance scores by 35% on average",
        "Introduced modern JavaScript frameworks to legacy codebases",
      ],
    },
  ],
  education: [
    {
      school: "University Name",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "2014 - 2018",
      achievements: [
        "Graduated Magna Cum Laude with 3.8 GPA",
        "Dean's List all semesters",
        "President of Computer Science Club",
      ],
    },
    {
      school: "Online Platform",
      degree: "Full Stack Development Certificate",
      dateRange: "2019",
      achievements: [
        "Completed 500+ hours of coursework",
        "Built 10+ portfolio projects",
        "Specialized in React and Node.js",
      ],
    },
  ],
};
