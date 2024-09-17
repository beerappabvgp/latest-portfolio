"use client";
import { memo, useEffect, useState } from "react";


export const Role = () => {
    const roles = ['Web Development', 'Web3 Development'];
    const [role, setRole] = useState(roles[0]);

    useEffect(() => {
        const id = setInterval(() => {
            setRole((prevRole) => (prevRole === roles[0] ? roles[1] : roles[0]));
        }, 1000);

        return () => {  
            clearInterval(id);
        };
    }, []); 

    return (
        <h2 className='text-3xl sm:text-4xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-extralight mb-4 text-purple-300'>
            SOFTWARE ENGINEER
        </h2>
    );
};
