// ===== DATA =====
const DATA = {
    skills: [
        { name: "HTML5", icon: "H5", category: "frontend", level: 95 },
        { name: "CSS3", icon: "CS", category: "frontend", level: 92 },
        { name: "JavaScript", icon: "JS", category: "frontend", level: 90 },
        { name: "React JS", icon: "Re", category: "frontend", level: 85 },
        { name: "Next JS", icon: "Nx", category: "frontend", level: 78 },
        { name: "Bootstrap", icon: "Bs", category: "frontend", level: 90 },
        { name: "Tailwind", icon: "Tw", category: "frontend", level: 88 },
        { name: "jQuery", icon: "jQ", category: "frontend", level: 85 },
        { name: "Node JS", icon: "No", category: "backend", level: 82 },
        { name: "Express JS", icon: "Ex", category: "backend", level: 80 },
        { name: "MongoDB", icon: "Mg", category: "backend", level: 78 },
        { name: "PHP", icon: "Ph", category: "backend", level: 80 },
        { name: "MySQL", icon: "Sq", category: "backend", level: 82 },
        { name: "WordPress", icon: "Wp", category: "backend", level: 88 },
        { name: "Python", icon: "Py", category: "backend", level: 65 },
        { name: "Go", icon: "Rs", category: "backend", level: 45 },
        { name: "Linux", icon: "Lx", category: "tools", level: 80 },
        { name: "Bash", icon: "Sh", category: "tools", level: 75 },
        { name: "Photoshop", icon: "Ps", category: "tools", level: 70 },
        { name: "SEO", icon: "Se", category: "tools", level: 78 },
        { name: "C", icon: "C_", category: "tools", level: 60 },
        { name: "Git", icon: "Gt", category: "tools", level: 85 },
    ],

    projects: [
        {
            id: "01",
            name: "CODEWORM Platform",
            desc: "Founded and built a full-featured online training center empowering aspiring developers with structured courses, live sessions, and community support.",
            tags: ["React", "Node.js", "MongoDB", "Express"],
            status: "live",
            year: "2022",
            link: "#"
        },
        {
            id: "02",
            name: "E-Commerce Suite",
            desc: "A scalable e-commerce solution with real-time inventory management, payment gateway integrations, and an admin dashboard.",
            tags: ["Next.js", "MySQL", "PHP", "Tailwind"],
            status: "live",
            year: "2023",
            link: "#"
        },
        {
            id: "03",
            name: "SaaS Analytics App",
            desc: "Multi-tenant SaaS application providing real-time analytics and data visualization dashboards for SMB clients.",
            tags: ["React", "Node.js", "MongoDB", "Chart.js"],
            status: "shipped",
            year: "2023",
            link: "#"
        },
        {
            id: "04",
            name: "WordPress Agency Theme",
            desc: "Pixel-perfect custom WordPress theme with Elementor integration, SEO optimization, and performance scores of 95+ on Lighthouse.",
            tags: ["WordPress", "PHP", "CSS3", "SEO"],
            status: "shipped",
            year: "2021",
            link: "#"
        },
        {
            id: "05",
            name: "REST API Microservices",
            desc: "Designed and deployed a microservices architecture with JWT auth, rate limiting, and full documentation for a fintech client.",
            tags: ["Node.js", "Express", "MongoDB", "Docker"],
            status: "shipped",
            year: "2024",
            link: "#"
        },
        {
            id: "06",
            name: "Portfolio v1 → v2",
            desc: "Redesigned personal portfolio from scratch — PWA, SPA, terminal aesthetic, AI-powered chatbot. The one you're looking at right now.",
            tags: ["HTML5", "CSS3", "JavaScript", "PWA"],
            status: "live",
            year: "2025",
            link: "#"
        },
    ],

    experience: [
        {
            year: "2020 — present",
            role: "Senior Fullstack Developer",
            org: "Learn Computer Academy",
            desc: "Architecting scalable web applications, consulting on tech stack decisions, and delivering end-to-end product builds for global clients.",
            commit: "feat: scaled to senior fullstack scope"
        },
        {
            year: "2017 — present",
            role: "Founder & Lead Instructor",
            org: "CODEWORM",
            desc: "Founded an online training center. Designed curriculum, built the platform, mentored 100+ students in modern web development.",
            commit: "init: launched codeworm training"
        },
        {
            year: "2016 — 2017",
            role: "Frontend Developer",
            org: "Diligence Digital India Pvt. Ltd.",
            desc: "Crafted responsive, high-performance websites for agencies and direct clients using React, WordPress, and custom PHP solutions.",
            commit: "add: frontend expertise, wordpress, php"
        },
        {
            year: "2014 — 2016",
            role: "Electrical Engineer",
            org: "Industry",
            desc: "Began career in electrical engineering before pivoting to web development — bringing an engineer's problem-solving mindset to code.",
            commit: "chore: career pivot electrical → web"
        },
    ]
};