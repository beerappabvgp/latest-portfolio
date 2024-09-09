"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Skill {
    title: string;
    img: string;
}

export const SkillItem = ({ skill , color }: { skill: Skill , color: string }) => {
    return (
      <div className={`relative ${color} rounded-2xl w-32 h-32 p-4`}> {/* Outer div with fixed width and height */}
        <motion.div 
          whileHover={{ scale: 1.1 }}  // Animation on hover
          whileTap={{ scale: 0.95 }}    // Animation on tap
          className="absolute top-[-10px] left-[-10px] flex flex-col items-center bg-white p-4 rounded-2xl shadow-lg w-full h-full"
        >
          <Image 
            src={skill.img} 
            alt={skill.title} 
            className="rounded-full mb-2" 
            width={40} 
            height={40} 
          />
          <div className="text-xl font-semibold text-gray-800 text-center">{skill.title}</div>
        </motion.div>
      </div>
    );
};
