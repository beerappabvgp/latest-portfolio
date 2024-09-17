"use client";

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub } from "react-icons/fa";

type Project = {
    project: {
        name: string;
        description: string;
        link: string;
        skills: string[];
    };
};

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } }
};

export const ProjectItem = ({ project }: Project) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <motion.div
            ref={ref}
            className="flex flex-col bg-black p-6 rounded-2xl shadow-lg text-white border border-purple-500 hover:shadow-purple-500 transition-all h-full mt-8"
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeInUp}
        >
            {/* Flexbox container for top section and content */}
            <motion.div className="flex flex-col flex-grow h-full justify-between" variants={fadeInUp}>
                {/* Top section */}
                <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-bold text-purple-400 h-[60px]">{project.name}</h3>
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-purple-400 hover:underline"
                    >
                        <FaGithub className="w-[24px] h-[24px]" color="white" />
                    </a>
                </div>

                {/* Description section with flex-grow to push content */}
                <motion.p className="text-gray-100 my-4 flex-grow" variants={fadeInUp}>
                    {project.description}
                </motion.p>
            </motion.div>

            {/* Skills section pushed to the end */}
            <motion.div className="flex flex-wrap gap-2 mt-4" variants={fadeInUp}>
                {project.skills.map((skill, index) => (
                    <span
                        key={index}
                        className="px-3 py-1 bg-gray-800 text-emerald-400 text-sm rounded-lg shadow-md"
                    >
                        {skill}
                    </span>
                ))}
            </motion.div>
        </motion.div>
    );
};
