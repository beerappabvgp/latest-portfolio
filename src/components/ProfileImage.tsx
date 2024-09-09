"use client";

import Image from "next/image";
import { easeIn, easeInOut, motion } from "framer-motion";

interface ImageProperties {
    width: number;
    height: number;
    start: number;
    duration: number;
    movement: number;
}

export const ProfileImage = ({ width, height, start, duration , movement}: ImageProperties) => {
    return (
        <motion.div
            className=""
            animate={{
                x: [start, start - movement, start], 
                ease: easeIn
            }}
            transition={{
                x: {
                    duration: duration,
                    repeat: Infinity, // Repeat the animation infinitely
                    repeatType: "loop", // Loop back and forth
                    ease: "easeInOut", // Smooth easing
                },
            }}
            initial={{
                x: start,
            }}
        >
            <Image
                src="/photo.jpg"
                alt="Bharath's photo"
                width={width}
                height={height}
                className="rounded-3xl object-cover"
            />
        </motion.div>
    );
};
