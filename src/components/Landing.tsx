"use client";

import { Navbar } from "./Navbar";
import { ProfileImage } from "./ProfileImage";
import { Skills } from "./Skills";
import { Title } from "./Title";


export const Landing = () => {
    return (
        <>
            <Navbar />
            <div className="flex mt-10 justify-between border-1 border-purple-700 shadow-transparent rounded-3xl">
                <Title />
                <ProfileImage width={400} height={350} start={0} duration={2} movement={10}/>
            </div>
            {/* <div className="mt-6 border-b-2 text-sm border-cyan-300"></div> */}
            <Skills />
        </>
    );
}