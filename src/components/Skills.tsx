import { useEffect, useState } from 'react';
import { SkillItem } from './SkillItem';
import { motion } from 'framer-motion';
import { SkillTitle } from './SkillTitle';

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

    const [columns , setColumns] = useState(4);
    const calculateColumns = () => {
        const width = window.innerWidth;
        if(width >= 1280) {
            setColumns(7);
        }
        else if(width >= 1024) {
            setColumns(5);
        }
        else if(width >= 768) {
            setColumns(4);
        }
        else if(width >= 480) {
            setColumns(3);
        } else {
            setColumns(2);    
        }
    }

    useEffect(() => {
        calculateColumns();
        window.addEventListener("resize" , calculateColumns);
        return () => {
            window.removeEventListener('resize' , calculateColumns)
        };
    } , []);

    
    return (
        <div className="space-y-8 mt-2 w-full overflow-x-hidden max-w-[100vw]">
            <SkillTitle />
            {skills.reduce((rows: any[], skill, index) => {
                const rowIndex = Math.floor(index / columns);
                const direction = rowIndex % 2 === 0 ? 'left' : 'right'; 

                if (!rows[rowIndex]) rows[rowIndex] = [];
                rows[rowIndex].push(
                    <SkillItem skill={skill} key={skill.title} color={rowColors[rowIndex % rowColors.length]} />
                );

                return rows;
            }, []).map((row, rowIndex) => (
                <motion.div
                    key={rowIndex}
                    className={`grid xl:grid-cols-7 lg:grid-cols-5 md:grid-cols-4 xs:grid-cols-3 grid-cols-2 gap-4 rounded-2xl p-4`}
                    initial={{ x: rowIndex % 2 === 0 ? 0 : 100 }}  // Start off-screen
                    animate={{ x: rowIndex % 2 === 0 ? 100 : 0 }}    // Float in opposite directions
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
