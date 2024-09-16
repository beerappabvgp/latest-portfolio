"use client";

import { Role } from "./Role";

export const Description = () => {
    return (
        <div className=''>
            <Role />
            <p className='text-4xl text-blue-100 hidden lg:visible'>
                A mad lover of programming computers.
            </p>
        </div>
    );
}