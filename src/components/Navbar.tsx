"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export const Navbar = () => {
    return (
        <motion.div
            className="w-full z-50 flex justify-between items-center mt-5 border-b-2 border-gray-800 p-4 shadow-2xl rounded-2xl text-lg sm:text-2xl bg-gray-900 text-white"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
        >
            {/* Left: Logo and Name */}
            <motion.div 
                className="flex items-center hover:bg-gray-800 transition-all p-2 rounded-lg cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <Image
                    src="/photo.jpg"
                    alt="Bharath's photo"
                    width={40}
                    height={40}
                    className="rounded-full object-cover ml-4 sm:ml-10"
                />
                <h1 className="ml-4 font-semibold">BHARATH</h1>
            </motion.div>

            {/* Center: Navbar Links */}
            <motion.ul 
                className="hidden md:flex gap-6 sm:gap-8 mr-6 sm:mr-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
            >
                {['Skills', 'Experience', 'Projects'].map((item, index) => (
                    <motion.li 
                        key={index} 
                        className="cursor-pointer hover:text-purple-400 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <a href={`#${item.toLowerCase()}`}>{item}</a>
                    </motion.li>
                ))}
            </motion.ul>

            {/* Right: Download CV Button */}
            <motion.a
                href="https://drive.google.com/file/d/1xmHQm3CVMS9pcPAaqVCdfr21uyEK_icF/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-600 text-white px-4 py-2 rounded-3xl shadow-lg hover:bg-purple-700 transition-all text-md sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                CV
            </motion.a>
        </motion.div>
    );
};
