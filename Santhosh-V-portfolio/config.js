import { FaDiscord, FaGithub, FaMapPin } from "react-icons/fa";
import { HiCode, HiCube, HiDatabase, HiMail, HiBriefcase } from "react-icons/hi";

export const config = {
    developer: {
        name: "Santhosh V",
    },
    social: {
        github: "Santhosh Vahmedz",
        discord: "#"
    },
    NAV_ITEMS: [
        { href: '/projects', label: 'Projects' },
        { href: '/contact', label: 'Contact' }
    ],
    recentTracks: true, // Enable/disable Spotify recent tracks
    projects: [
        {
            id: 1,
            title: "AI-Powered Code Review Assistant",
            description: "An intelligent code review platform that uses machine learning to analyze pull requests, detect bugs, suggest optimizations, and enforce coding standards. Features real-time collaboration, automated testing integration, and comprehensive security scanning.",
            image: "/projects/project-1.webp",
            technologies: ["Python", "TensorFlow", "React", "FastAPI", "PostgreSQL", "Docker"],
            github: "#",
            demo: "#"
        },
        {
            id: 2,
            title: "Real-time Collaborative Whiteboard",
            description: "A next-generation collaborative whiteboard platform with infinite canvas, real-time synchronization, and advanced drawing tools. Supports video conferencing, screen sharing, and export to multiple formats. Built for remote teams and educators.",
            image: "/projects/project-2.webp",
            technologies: ["TypeScript", "WebRTC", "Socket.io", "Canvas API", "Node.js", "Redis"],
            github: "#",
            demo: "#"
        },
        {
            id: 3,
            title: "Blockchain Voting System",
            description: "A secure, transparent, and decentralized voting platform built on Ethereum. Features smart contract-based voting, anonymous ballots, real-time result tracking, and immutable audit trails. Ensures election integrity through cryptographic verification.",
            image: "/projects/project-3.webp",
            technologies: ["Solidity", "Web3.js", "React", "Ethereum", "IPFS", "MetaMask"],
            github: "#",
            demo: "#"
        },
        {
            id: 4,
            title: "Cloud Infrastructure Dashboard",
            description: "A comprehensive cloud management platform for monitoring, managing, and optimizing multi-cloud infrastructure. Features real-time metrics, cost analysis, automated scaling, and security compliance monitoring across AWS, Azure, and GCP.",
            image: "/projects/project-4.webp",
            technologies: ["Go", "Kubernetes", "Grafana", "Prometheus", "Terraform", "React"],
            github: "#",
            demo: "#"
        },
        {
            id: 5,
            title: "Neural Network Visualizer",
            description: "An interactive web application for visualizing, training, and experimenting with neural networks. Features drag-and-drop architecture builder, real-time training visualization, model comparison tools, and export capabilities for production deployment.",
            image: "/projects/project-5.webp",
            technologies: ["Python", "TensorFlow.js", "D3.js", "Next.js", "WebGL", "TypeScript"],
            github: "#",
            demo: "#"
        }
 
    ],
    skills: [
        {
            title: "Frontend",
            icon: <HiCode />,
            description: "Modern web interfaces",
            bgClass: "bg-blue-500/10",
            iconClass: "text-blue-500",
            skills: [
                { name: "Next.js 15", level: "Advanced", hot: true },
                { name: "React", level: "Advanced" },
                { name: "TailwindCSS", level: "Expert" },
                { name: "JavaScript", level: "Advanced" },
                { name: "Framer Motion", level: "Intermediate" }
            ]
        },
        {
            title: "Backend",
            icon: <HiDatabase />,
            description: "Server & Database",
            bgClass: "bg-emerald-500/10",
            iconClass: "text-emerald-500",
            skills: [
                { name: "Node.js", level: "Advanced", hot: true },
                { name: "MongoDB", level: "Advanced" },
                { name: "Express.js", level: "Advanced", hot: true }
            ]
        },
        {
            title: "Programs & Tools",
            icon: <HiCube />,
            description: "Development & Productivity Tools",
            bgClass: "bg-orange-500/10",
            iconClass: "text-orange-500",
            skills: [
                { name: "VS Code", level: "Expert", hot: true },
                { name: "Postman", level: "Advanced" },
                { name: "Photoshop", level: "Intermediate" },
                { name: "Git", level: "Advanced" }
            ]
        }
    ],
    experiences: [
        {
            position: "Frontend Developer",
            company: "SelectSkillSet",
            period: "2025 - Present",
            location: "Remote",
            description: "Developing modern, responsive frontend applications with focus on user experience and performance. Working with cutting-edge technologies to build scalable web solutions.",
            responsibilities: [
                "Building responsive and interactive user interfaces using React and Next.js",
                "Implementing modern UI/UX designs with TailwindCSS",
                "Developed and maintained full-stack web applications using React, Node.js, and MongoDB",
                "Collaborating with design and backend teams to deliver high-quality features"
            ],
            technologies: ["React", "Next.js", "TailwindCSS", "JavaScript", "MongoDB", "Node.js"]
        },
        {
            position: "Software Development Intern",
            company: "Selectskillset",
            period: "2024 - 2025",
            location: "Remote/Self-Learning",
            description: "Focused on strengthening core computer science fundamentals and building foundational projects while learning modern development practices.",
            responsibilities: [
                "Learned and applied OOP principles (encapsulation, inheritance, polymorphism, abstraction)",
                "Studied Data Structures (arrays, stacks, queues, linked lists, trees, hash maps, graphs)",
                "Explored database fundamentals (SQL, relational models, schemas, CRUD operations)",
                "Built several low-level beginner projects to practice logic and problem-solving",
                "Practiced designing small modules using clean code principles",
                "Gained familiarity with version control using Git and GitHub",
                "Improved understanding of how backend systems store, process, and structure data"
            ],
            technologies: ["JavaScript", "Python", "MySql", "Git", "PostgreSQL", "GitHub"]
        }
    ],
    contactInfo: [
     
        {
            icon: <FaGithub className="w-5 h-5" />,
            label: "GitHub",
            value: "@Santhosh Vahmedz",
            link: `https://github.com/Santhosh Vahmedz`
        },
        {
            icon: <HiMail className="w-5 h-5" />,
            label: "Email",
            value: "santhosh.vivekusha@gmail.com",
            link: "mailto:santhosh.vivekusha@gmail.com"
        },
        {
            icon: <FaMapPin className="w-5 h-5" />,
            label: "Location",
            value: "India",
            link: null
        }
    ]
}