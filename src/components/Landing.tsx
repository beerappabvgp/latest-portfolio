"use client";

import { Navbar } from "./Navbar";
import { Pitch } from "./Pitch";
import { ProfileImage } from "./ProfileImage";
import { Separator } from "./Separator";
import { Skills } from "./Skills";
import { Title } from "./Title";


export const Landing = () => {
    return (
        <>
            <Navbar />
            <div className="flex flex-col lg:flex-row mt-10 justify-around items-center border-1 border-purple-700 shadow-transparent rounded-3xl gap-4">
                {/* <div className="mx-auto">
                    <ProfileImage width={400} height={350} start={0} duration={2} movement={10}/>
                </div> */}
                 <ProfileImage width={400} height={350} start={0} duration={2} movement={10}/>
                <Title />
            </div>  
            <Pitch />
            {/* <Separator /> */}
            {/* <div className="mt-6 border-b-2 text-sm border-cyan-300"></div> */}
            <Skills />
        </>
    );
}