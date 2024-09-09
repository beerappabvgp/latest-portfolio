import { SkillItem } from './SkillItem';
import { motion, animate } from 'framer-motion';

export const Skills = () => {
    const skills = [
        { title: "Javascript", img: "/javascript.jpeg" },
        { title: "Typescript", img: "/typescript.jpeg" },
        { title: "Python", img: "/python.jpeg" },
        { title: "Node.js", img: "/nodejs.jpeg" },
        { title: "Express.js", img: "/express.jpeg" },
        { title: "React", img: "/react.jpeg" },
        { title: "Next.js", img: "/next.jpeg" },
        { title: "Django", img: "/django.jpeg" },
        { title: "MongoDB", img: "/mongo.jpeg" },
        { title: "PostgreSQL", img: "/postgres.jpeg" },
        { title: "SQL", img: "/sql.jpeg" },
        { title: "Java", img: "/java.jpeg" },
        { title: "Rust", img: "/rust1.jpeg" },
        { title: "Go", img: "/go.jpeg" },
        { title: "Tailwind", img: "/tailwind.jpeg" },
        { title: "Docker", img: "/docker.jpeg" },
        { title: "Kubernetes", img: "/kubernetes.jpeg" },
        { title: "Shadcn", img: "/shadcn.jpeg" },
        { title: "Ethereum", img: "/ethereum.jpeg" },
        { title: "Solana", img: "/solana.jpeg" },
    ];

    // Define background colors for each row
    const rowColors = ['bg-cyan-300', 'bg-blue-300', 'bg-purple-300'];
    return (
        <div className="space-y-8 mt-20 ml-20 mr-10">
            {skills.reduce((rows: any[], skill, index) => {
                const rowIndex = Math.floor(index / 7);
                const direction = rowIndex % 2 === 0 ? 'left' : 'right'; 

                if (!rows[rowIndex]) rows[rowIndex] = [];
                rows[rowIndex].push(
                    <SkillItem skill={skill} key={skill.title} color={rowColors[rowIndex % rowColors.length]}/>
                );

                return rows;
            }, []).map((row, rowIndex) => (
                <motion.div
                    key={rowIndex}
                    className={`grid grid-cols-7 gap-8 rounded-2xl p-4`}
                    animate={{ x: rowIndex % 2 === 0 ? [-50, 50] : [50, -50] }}  // Move left to right, and right to left
                    transition={{
                        ease: 'easeInOut',
                        duration: 5,
                        repeat: Infinity,
                        repeatType: 'mirror',
                    }}
                >
                    {row}
                </motion.div>
            ))}
        </div>
    );
};
