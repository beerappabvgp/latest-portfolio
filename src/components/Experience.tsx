"use client"
import { experiences } from "@/app/constants"
import { ExperienceItem } from "./ExperienceItem"
import { motion } from "framer-motion"

export const Experience = () => {
    return <div className="flex flex-col justify-center items-center">
        <motion.h2 className="sm:text-5xl mb-10 mt-20 border-2 text-center p-4 rounded-2xl bg-gray-900 shadow-lg shadow-cyan-600 w-full text-3xl" initial={{ opacity: 0 }} animate={{
            opacity: 1,
        }}>WORK EXPERIENCE</motion.h2>
        {experiences.map((experience) => {
            return (
                <ExperienceItem experience = {experience} key={experience.company_name}/>
            )
        })}
    </div>
}