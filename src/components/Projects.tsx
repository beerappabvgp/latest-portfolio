"use client";

import { motion } from "framer-motion";
import { ProjectItem } from "./ProjectItem";
import { projects } from "@/app/constants"; // Import the project data

export const Projects = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-15 font-handlee" id="projects">
      <motion.h2
        className="sm:text-5xl mb-10 mt-10 border-2 text-center p-4 rounded-2xl bg-gray-900 shadow-lg shadow-purple-500 w-3/5 text-3xl text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        PROJECTS
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl font-handlee p-4 xl:p-0">
        {projects.map((project) => (
          <ProjectItem key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
};
