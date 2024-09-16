"use client";

import { useEffect, useState } from "react";

export const DynamicSkill = () => {
    const skills = [
        "JAVASCRIPT",
        "TYPESCRIPT",
        "PYTHON",
        "NODE.JS",
        "EXPRESS.JS",
        "REACT",
        "NEXT.JS",
        "DJANGO",
        "MONGODB",
        "POSTGRESQL",
        "SQL",
        "JAVA",
        "RUST",
        "GO",
        "TAILWIND",
        "DOCKER",
        "KUBERNETES",
        "SHADCN",
        "ETHEREUM",
        "SOLANA"
    ];    
    const [skill, setSkill] = useState(skills[0]);

    useEffect(() => {
        let index = 0;
        const id = setInterval(() => {
            setSkill(skills[index]);
            index = (index + 1) % skills.length;
        }, 1000);
        
        return () => {
            clearInterval(id);
        };
    }, []);

    return (
        <span className="whitespace-nowrap text-4xl md:text-5xl lg:text-6xl font-extrabold text-cyan-300">
            {skill}
        </span>
    );
};
