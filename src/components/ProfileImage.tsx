"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ImageProperties {
  width: number;
  height: number;
  start: number;
  duration: number;
  movement: number;
}

export const ProfileImage = ({ width, height, start, duration, movement }: ImageProperties) => {
  return (
    <motion.div
      className="lg:text-9xl md:text-7xl sm:text-5xl"
      animate={{
        y: [start, start + movement, start], // Animate vertically (Y-axis) instead of X-axis to prevent overflow
      }}
      transition={{
        y: {
          duration: duration,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        },
      }}
      initial={{
        y: start,
      }}
    >
      <Image
        src="/photo.jpg"
        alt="Bharath's photo"
        width={width}
        height={height}
        className="rounded-3xl object-cover md:align-middle"
      />
    </motion.div>
  );
};
