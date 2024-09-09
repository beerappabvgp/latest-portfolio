"use client"

import { ProfileImage } from "./ProfileImage"

export const Navbar = () => {
    return (
        <div className="flex justify-between items-center mt-5 border-2 border-gray-800 p-4 shadow-2xl rounded-2xl text-2xl">
            <div className="flex justify-center items-center ml-20">
                <ProfileImage width={30} height={30} start={20} duration={0.5} movement={0}/>
                <h1 className="ml-9">BHARATH</h1>
            </div>
            <ul className="flex gap-6 mr-20">
                <li>About</li>
                <li>Experience</li>
                <li>Projects</li>
            </ul>
        </div>
    )
}