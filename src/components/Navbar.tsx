"use client";
import Image from "next/image";

export const Navbar = () => {
    return (
        <div className="flex justify-between items-center mt-5 border-2 border-gray-800 p-4 shadow-2xl rounded-2xl text-lg sm:text-2xl">
            <div className="flex items-center hover:bg-slate-500">
                <Image
                    src="/photo.jpg"
                    alt="Bharath's photo"
                    width={30}
                    height={30}
                    className="rounded-3xl object-cover ml-4 sm:ml-10"
                />
                <h1 className="ml-4">BHARATH</h1>
            </div>
            <ul className="md:flex gap-4 sm:gap-6 mr-6 sm:mr-20 hidden">
                <li>About</li>
                <li>Experience</li>
                <li>Projects</li>
            </ul>
        </div>
    );
};
