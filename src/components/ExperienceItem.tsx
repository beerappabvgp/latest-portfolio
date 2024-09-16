import { StaticImageData } from "next/image";
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

type Experience = {
    experience: {
        title: string,
        company_name: string,
        icon: StaticImageData,
        iconBg: string,
        date: string,
        location: string,
        points: string[],
        skills: string[]
    }
}

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

export const ExperienceItem = ({ experience }: Experience) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <motion.div
            ref={ref}
            className="flex flex-col gap-8 w-full max-w-screen-lg text-white p-6 bg-black shadow-lg rounded-2xl"
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}  // Trigger animation based on scroll
            variants={fadeInUp}
        >
            <div className="flex flex-col w-full bg-[#1a1a1a] border border-emerald-400 rounded-2xl p-6 mb-6 shadow-md">
                {/* Title and Company */}
                <motion.div className="flex flex-col xs:flex-row justify-between items-start mb-6" variants={fadeInUp}>
                    {/* Image and Company */}
                    <div className="flex gap-4 items-center">
                        <Image
                            src={experience.icon}
                            alt="company logo"
                            className="rounded-full object-cover object-center w-[60px] h-[60px]"
                        />
                        <div>
                            <h3 className="text-2xl font-bold text-emerald-400">{experience.company_name}</h3>
                            <p className="text-lg text-gray-400">{experience.title}</p>
                        </div>
                    </div>

                    {/* Date and Location */}
                    <div className="hidden xs:visible xs:flex flex-col text-end mt-3 xs:mt-0 ml-[50px]">
                        <p className="text-lg text-gray-300">{experience.date}</p>
                        <p className="text-md text-gray-500">{experience.location}</p>
                    </div>
                </motion.div>

                {/* Points/Responsibilities */}
                <motion.ol className="list-disc ml-6 space-y-2 text-white" variants={staggerContainer}>
                    {experience.points.map((point, index) => (
                        <motion.li key={index} className="leading-relaxed font-semibold" variants={fadeInUp}>
                            {point}
                        </motion.li>
                    ))}
                </motion.ol>

                {/* Skills */}
                <motion.div className="flex gap-3 items-center mt-6" variants={fadeInUp}>
                    <p className="text-purple-500 text-2xl">{"< />"}</p>
                    <div className="flex flex-wrap gap-2">
                        {experience.skills.map((skill, index) => (
                            <motion.div
                                key={skill}
                                className="px-3 py-1 bg-gray-800 text-emerald-400 text-sm rounded-lg shadow-sm"
                                whileHover={{ scale: 1.1 }}
                                variants={fadeInUp}
                            >
                                {skill}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};
