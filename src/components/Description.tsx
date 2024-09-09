"use client";
import { useEffect, useState } from "react";

export const Description = () => {
    const roles = ['Full Stack Developer ' , 'Web3 Developer']
    const [role , setRole] = useState(roles[0]);
    useEffect(() => {
        const id = setInterval(() => {
            setRole((prevRole) => (prevRole === roles[0] ? roles[1] : roles[0]))
        } , 1000);
        return () => {
            clearInterval(id);
        }
    } , [role]);
    return (
        <div className='text-center'>
            <h2 className='text-5xl font-semibold mb-4 text-purple-300'>{role}</h2>
            <p className='text-4xl text-blue-100'>
                A mad lover of programming computers.
            </p>
        </div>
    );
}