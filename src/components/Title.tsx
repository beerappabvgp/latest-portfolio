"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Description } from './Description';

const name = "BHARATH";
const letters = name.split("");
const colors = ['#FF6347', '#4682B4', '#32CD32', '#FFD700', '#6A5ACD', '#FF69B4', '#20B2AA', '#87CEEB', '#FF4500', '#DA70D6', '#1E90FF', '#00FF7F', '#FF8C00', '#8A2BE2', '#7FFF00', '#D2691E', '#ADFF2F'];


export const  Title = () => {
  
  const [isCompleted , setIsCompleted] = useState(false);
  useEffect(() => {
    const id = setTimeout(() => {
        setIsCompleted((prev) => !prev)
    } , 3000)
    return (
        () => clearTimeout(id)
    );
  } , [])
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
  };

  return (
    <div className='flex flex-col items-center text-4xl sm:text-4xl md:text-6xl mt-10 lg:text-6xl xl:text-7xl 2xl:text-8xl whitespace-nowrap gap-5'>
        <div className='flex flex-col items-center justify-center mt-5 gap-5'>
            <h1 className='font-extrabold text-blue-300 whitespace-nowrap font-suse'>HELLO I'M 👋</h1>
            <div className='flex justify-center items-center'>
                <motion.div
                    className='flex'
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {letters.map((letter, index) => (
                        <div  
                            key={index}
                            className={`inline-block font-extrabold ${isCompleted ? "" : "border-2 border-yellow-200"} rounded-lg p-0 md:p-2  text-teal-300 ml-2`}
                        >
                            <motion.span
                                className="block shadow-lg"
                                variants={letterVariants}
                            >
                                {letter === " " ? "." : letter}
                            </motion.span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
      <Description />  
    </div>
  );
};
