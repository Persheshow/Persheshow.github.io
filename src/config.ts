export const siteConfig = {
  name: "Lorenzo",
  title: "Junior Software Developer | Computer Science Student | AI Enthusiast",
  description: "Portfolio website of Lorenzo Napolitano",
  accentColor: "#a81111",
  social: {
    //email: "napolitanolorenz93@gmail.com",
    linkedin: "https://www.linkedin.com/in/lorenzo-napolitano-439271275/",
    //twitter: "https://x.com/rfitzio",
    github: "https://github.com/Persheshow",
  },
  aboutMe:
    "I'm a Final-year Computer Science student (Università Degli Studi di Firenze) with Erasmus+ exchange experience at Universidad Carlos III de Madrid, specialized in software development and applied AI, with hands-on experience architecting and deploying backend systems and web apps.",
  skills: ["Javascript", "React", "Python", "Java", "MySQL"],
  projects: [
    {
      name: "Real-Time Kinematic Analysis via Computer Vision",
      description:
        "Engineered a client-side web app using MediaPipe Pose to track body landmarks in real time during weightlifting exercises, providing instant feedback on form and technique.",
      link: "https://github.com/Persheshow/appMediaPipe",
      skills: ["React", "MediaPipe", "JavaScript", "Tailwind CSS", "Vite"],
    },
    {
      name: "Readar – Backend Architecture",
      description:
        "Architected and built the Python (FastAPI) backend for an Android reading-tracker app, deploying to Google Firebase.",
      link: "https://github.com/PietroPalandrani/Readar_BackEnd",
      skills: ["Python", "FastAPI", "Google Firebase", "Kotlin"],
    },
    {
      name: "Reactor Power Control via MDP",
      description:
        "Built a Python reactor power control simulation using pymdptoolbox, modeling states/actions/transition probabilities with custom control modules and demand generators.",
      link: "https://github.com/PietroPalandrani/Nuclear_Reactor_MDP",
      skills: ["Python", "pymdptoolbox", "NumPy", "Matplotlib"],
    },
    {
      name: "Expression Evaluator in RISC-V Assembly",
      description:
        "Developed a full expression evaluator in RISC-V assembly, handling recursive-descent parsing, operator precedence, and manual register-level memory management without high-level language abstractions.",
      link: "https://github.com/Persheshow/Assembly-RISCV-Project",
      skills: ["RISC-V Assembly", "Recursive-Descent Parsing", "Manual Memory Management"],
    },
    {
      name: "Supermarket Database Management System",
      description:
        "Designed and implemented a comprehensive database management system for a local supermarket, optimizing data storage and retrieval for efficient inventory management.",
      link: "https://github.com/PietroPalandrani/Supermarket_DB",
      skills: ["Python", "SQL", "MySQL", "Database Design", "ER Modeling"],
    },
        {
      name: "Room Booking System",
      description:
        "Built a Java-based room booking system following SOLID principles, and using Design Patterns like Strategy, Observer, Visitor and Facade.",
      link: "https://github.com/Persheshow/OOP-Java-project",
      skills: ["Java", "Design Patterns", "SOLID Principles", "Object-Oriented Programming"],
    },
        {
      name: "Help Desk Ticketing System in C",
      description:
        "Built a concurrent, client-server Help Desk Ticketing System written in C. It features multiprocess concurrency, TCP socket networking, user authentication with roles, and JSON-based ticket storage.",
      link: "https://github.com/PietroPalandrani/Help_Desk_Ticketing_System",
      skills: ["C", "TCP Sockets", "Multiprocessing", "JSON", "Client-Server Architecture"],
    }
  ],
  experience: [
    {
      company: "TaxiLeader",
      title: "IT Specialist",
      dateRange: "Sept 2022 - Sept 2023",
      bullets: [
        "Managed and maintained 5 company websites on WordPress and Joomla CMS platforms, including hosting configuration and uptime monitoring.",
        "Managed and maintained multiple company websites on WordPress and Joomla CMS platforms, including hosting configuration and uptime monitoring.",
        " Designed and deployed new CMS-based websites from initial design through launch, ensuring responsive design and cross-browser compatibility.",
        "Facilitated client and internal communication in English and Spanish.",
      ],
    },
  ],
  education: [
    {
      school: "Universidad Carlos III de Madrid",
      degree: "Erasmus+ Exchange Program in Computer Science",
      dateRange: "2026",
      achievements: [
        "Completed 5 different courses in Computer Science and Software Engineering, all English-taught.",
      ],
    },
    {
      school: "Università Degli Studi di Firenze",
      degree: "Bachelor in Computer Science",
      dateRange: "2023 - 2026",
      achievements: [
        "Graduated with 26.5/30 GPA.",
        "Excepted to graduate in october 2026 with a final grade of 109/110.",
      ],
    },
    {
      school: "I.I.S.S. Giuseppe Peano",
      degree: "High School Diploma in Computer Science and Economics",
      dateRange: "2017 - 2022",
      achievements: [
        "Graduated with 99/100 GPA.",
        "Top 1% of the class in mathematics, economics and computer science.",
        "Won for two consecutive years the scholarship for academic excellence #TUTTOMERITOMIO awarded by the Tuscany Region.",
      ],
    },
  ],
};
