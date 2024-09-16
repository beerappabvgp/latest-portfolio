import syncfusion from "../../public/syncfusion.jpeg"
import etherscale from "../../public/etherscale.jpeg"
import teachnook from "../../public/teachnook.jpeg"

export const experiences = [
    {
        title: "Software Engineer",
        company_name: "EtherScale",
        icon: etherscale,
        iconBg: "#accbe1",
        date: "June 2024 - Present",
        location: "Banglore, India",
        points: [
            "Reduced backend system latency from 15s to under 5s by optimising APIs, significantly improving performance and user experience during high traffic loads.",
            "Developing scalable blockchain services by utilizing Go for backend components and next.js for frontend Dapps, ensuring seamless integration and performance.",
            "Implemented and deployed Layer 2 scaling solutions using both ZK-Rollups and Optimistic Rollups with Rollup as a Service (RaaS), significantly enhancing blockchain scalability and transaction throughput.",
            "Developed entire web application using Next.js for frontend, and Node.js and Go for backend, ensuring seamless integration and efficient system architecture which led to increase of user traffic."
        ],
        skills: ["Javascript" , "Typescript" , "Node.js" , "React.js" , "PostgreSQL" , "Next.js" , "Ethereum" , "Solidity" , "Solana" , "Go" , "mongoDB" , "rollups" , "docker" , "kubernetes" , "Rust"]
    },
    {
        title: "Software Engineer",
        company_name: "Syncfusion Software",
        icon: syncfusion,
        iconBg: "#accbe1",
        date: "Sept 2023 - April 2024",
        location: "Remote, India",
        points: [
            "Implemented features in both front-end and back-end components using the MERN stack, significantly improving user interface and functionality, which led to a notable increase in user demand and customer satisfaction.",
            "Optimized backend API endpoints, reducing system latency significantly improving overall system performance, resulting in faster load times and a smoother end-user experience.",
            "Resolved critical issues and improved processes, cutting response time from 15+ seconds to 5 seconds while reducing costs by 50%.",
        ],
        skills: ["Javascript" , "Typescript" , "Node.js" , "PostgreSQL" , "Next.js" , "prisma" , "docker" , "Express.js","Next.js", "React.js" , "MongoDB"]
    },
    {
        title: "Full Stack Developer Intern",
        company_name: "Teachnook",
        icon: teachnook,
        iconBg: "#fbc3bc",
        date: "Feb 2023 - July 2023",
        location: "Remote, India",
        points: [
            "Developed both front-end and back-end systems using the MERN stack for various projects.",
            "Gained hands-on practical experience with HTML, CSS, JavaScript, and popular web development frameworks such as React.js, Node.js, and Express.js and Next.js.",
            "Contributed to projects that laid a strong foundation for my career in full-stack development.",
        ],
        skills: ["Javascript" , "Typescript" , "Node.js" , "PostgreSQL" , "Next.js" , "prisma" , "docker" , "Express.js", "React.js" , "python" , "Django"]
    },
];