"use client";

import { FaGithub, FaLinkedin, FaTwitter, FaMedium, FaDiscord, FaEnvelope, FaCopyright } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";

const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } }
};

export const Footer = () => {
    return (
        <motion.footer
            className="bg-gray-900 text-white py-6 mt-[80px]"
            initial="hidden"
            animate="visible"
            variants={footerVariants}
        >
            {/* Container */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Flexbox for links and contact info */}
                <div className="flex flex-col sm:flex-row justify-between items-center">
                    {/* Contact Info */}
                    <div className="text-center sm:text-left">
                        <h2 className="text-xl font-semibold text-purple-400 mb-2">Get in Touch</h2>
                        <a
                            href="mailto:beerappabharathb@gmail.com"
                            className="text-gray-400 hover:text-purple-400 transition-colors"
                        >
                            <FaEnvelope className="inline mr-2" /> beerappabharathb@gmail.com
                        </a>
                    </div>

                    {/* Social Media Links */}
                    <div className="flex justify-center space-x-6 mt-4 sm:mt-0">
                        <motion.a
                            whileHover={{ scale: 1.1 }}
                            href="https://github.com/beerappabvgp"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-purple-400 transition-colors"
                        >
                            <FaGithub size={24} />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.1 }}
                            href="https://www.linkedin.com/in/bharathbvgp/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-purple-400 transition-colors"
                        >
                            <FaLinkedin size={24} />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.1 }}
                            href="https://x.com/Bharathbvgpa"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-purple-400 transition-colors"
                        >
                            <FaTwitter size={24} />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.1 }}
                            href="https://medium.com/@beerappabharathb"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-purple-400 transition-colors"
                        >
                            <FaMedium size={24} />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.1 }}
                            href="https://discord.com/1167878016089726988"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-purple-400 transition-colors"
                        >
                            <FaDiscord size={24} />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.1 }}
                            href="https://leetcode.com/u/Bharathbvgp/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-purple-400 transition-colors"
                        >
                            <SiLeetcode size={24} />
                        </motion.a>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="text-center mt-6 text-gray-500">
                    <p className="text-sm">
                        <FaCopyright className="inline mr-1" /> 2024 Bharath Beerappa. All rights reserved.
                    </p>
                </div>
            </div>
        </motion.footer>
    );
};
