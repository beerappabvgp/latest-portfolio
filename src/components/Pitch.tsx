    import { motion } from "framer-motion";
    import { Separator } from "./Separator";

    export const Pitch = () => {
        return (
            <div className="flex flex-col items-center justify-center p-10 mt-[20px]">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-center"
                >
                    <h2 className="text-5xl font-bold mb-6 text-yellow-400 md:text-7xl font-playfair shadow-sm shadow-cyan-300 rounded-lg p-4">
                        About Me
                    </h2>
                    {/* <Separator /> */}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="max-w-3xl leading-relaxed text-purple-200 md:text-xl"
                >
                    <p className="text-2xl tracking-wider text-center">
                        I’m Bharath B, a tech enthusiast driven by an unrelenting passion
                        for understanding and optimizing how computers work. I love
                        diving deep into the world of technology, constantly exploring
                        new ideas, and pushing the limits of what’s possible. My curiosity
                        and eagerness to learn fuel my drive to create meaningful, impactful solutions.
                    </p>
                </motion.div>
            </div>
        );
    };
