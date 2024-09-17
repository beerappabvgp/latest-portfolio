import syncfusion from "../../public/syncfusion.jpeg";
import etherscale from "../../public/etherscale.jpeg";
import teachnook from "../../public/teachnook.jpeg";

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
      "Developed entire web application using Next.js for frontend, and Node.js and Go for backend, ensuring seamless integration and efficient system architecture which led to increase of user traffic.",
    ],
    skills: [
      "Javascript",
      "Typescript",
      "Node.js",
      "React.js",
      "PostgreSQL",
      "Next.js",
      "Ethereum",
      "Solidity",
      "Solana",
      "Go",
      "mongoDB",
      "rollups",
      "docker",
      "kubernetes",
      "Rust",
    ],
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
    skills: [
      "Javascript",
      "Typescript",
      "Node.js",
      "PostgreSQL",
      "Next.js",
      "prisma",
      "docker",
      "Express.js",
      "Next.js",
      "React.js",
      "MongoDB",
    ],
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
    skills: [
      "Javascript",
      "Typescript",
      "Node.js",
      "PostgreSQL",
      "Next.js",
      "prisma",
      "docker",
      "Express.js",
      "React.js",
      "python",
      "Django",
    ],
  },
];

export const projects = [
  {
    name: "Chainlink Powered Decentralized Lottery",
    description:
      "Built a decentralized lottery system on Ethereum, using Chainlink VRF for random winner selection. Developed smart contracts for user entries, periodic draws, and automatic payouts, enhancing user trust and engagement.",
    link: "https://github.com/beerappabvgp/hardhat-decentralized-lottery",
    skills: ["Solidity", "web3.js", "Ethereum", "React.js"],
  },
  {
    name: "Full Stack Blog Application",
    description:
      "Developed a feature-rich blog app using the MERN stack, with Cloudflare Workers and Hono for serverless backend. Integrated advanced features for a seamless blogging experience.",
    link: "https://serverless-blog-rho.vercel.app/",
    skills: [
      "TypeScript",
      "PostgreSQL",
      "Hono",
      "Cloudflare Workers",
      "Tailwind",
    ],
  },
  {
    name: "Full Stack Real Estate Website",
    description:
      "Designed and built a real estate platform using the MERN stack. Utilized Tailwind CSS for responsive design, Redux for state management, bcrypt for encryption, and JWT for authentication.",
    link: "https://github.com/beerappabvgp/real-estate-mern",
    skills: ["TypeScript", "MongoDB", "Express.js", "React.js", "Tailwind"],
  },
  {
    name: "SaaS AI Image Transformer",
    description:
      "Developed a user-friendly image transformation platform with login, image editing, and browsing features. Used Next.js, TypeScript, MongoDB, Clerk, Cloudinary, Stripe, and Shadcn to deliver a smooth experience across devices.",
    link: "https://github.com/beerappabvgp/image_ai",
    skills: [
      "TypeScript",
      "MongoDB",
      "Clerk",
      "Cloudinary",
      "Stripe",
      "Tailwind",
      "Shadcn",
    ],
  },
  {
    name: "Online Marketplace Development",
    description:
      "Built an online marketplace using Django, enabling CRUD operations for product management and user interactions. Implemented user authentication for secure access.",
    link: "https://github.com/beerappabvgp/book-store",
    skills: ["Python", "Django", "React.js"],
  },
  {
    name: "Full Stack Book Store Application",
    description:
      "Created a full-featured bookstore app using the MERN stack. Designed an intuitive interface for an enhanced shopping experience.",
    link: "https://github.com/beerappabvgp/book-store",
    skills: ["TypeScript", "MongoDB", "Express.js", "React.js", "Tailwind"],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    link: "/contact",
  },
  {
    name: "GitHub",
    link: "https://github.com/beerappabvgp",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/b-bharath-140836250/",
  },
  {
    name: "Leetcode",
    link: "https://leetcode.com/Bharathbvgp/",
  },
  {
    name: "Resume",
    link: "https://drive.google.com/file/d/15U8fvxRWzFas8S6T_4YbM7KOwYTKZ2tP/view?usp=sharing&export=download",
  },
];
