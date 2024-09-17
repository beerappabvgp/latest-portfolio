"use client";

import { memo } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import { DynamicSkill } from "./DynamicSkill";

export const SkillTitle = memo(() => {
    return (
        <div className="flex flex-col items-center justify-center gap-4 rounded-3xl text-center mb-20 border-2 border-gray-700 bg-gray-900 p-6 shadow-lg shadow-purple-500 mt-20">
            {/* Animated heading with text shadow */}
            <motion.h2
                className="text-4xl md:text-5xl lg:text-6xl sm:text-3xl font-extrabold text-orange-400"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                TECHNICAL SKILLS
            </motion.h2>
            <motion.div
                className="mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <DynamicSkill />
            </motion.div>
        </div>
    );
});
