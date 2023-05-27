'use client';

import styles from "../styles";

import { TitleText, TypingText } from "../components";
import Image from "next/image";

const World = () => (
    <div className="flex align-center justify-center py-2">
        <div className={`${styles.innerWidth} flex flex-col align-center justify-center`}>
            <div className={`${styles.paddings} flex flex-col align-center justify-center`}>
                <TitleText title={<>Helping You Unlock Your Potential With Our Services</>} 
                textStyles="w-[50%]"
                />
                <TypingText className={`${styles.interWidth}`} title="Unlock powerful features tailored to your specific needs" textStyles="text-footer" />    
            </div>

            <div className="flex flex-row gap-6 mx-24 ">
                <div className="flex flex-col gap-6">
                    <div className="bg-tertiary flex rounded-2xl flex-row p-8 justify-center gap-20">
                        <h4 className="text-white font-semibold text-[28px] sm:text-[24px] self-center">Mentor 1-on-1 Calls</h4>
                        <Image src="/mentor.svg" alt="mentor-calls" width={400} height={300}/>         
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="grid grid-rows-2">
                            <div className="bg-tertiary flex rounded-2xl flex-col p-8">
                                <Image src="/job.svg" alt="job-assistance" width={400} height={300}/>
                                <h4 className="text-white font-semibold text-[28px] sm:text-[24px] mt-6 self-center">Job Assistance</h4>
                            </div>
                        </div>
                        <div className="grid grid-rows-2">
                            <div className="bg-tertiary flex rounded-2xl flex-col p-10">
                                <Image src="/interview.svg" alt="interview-preparation" width={400} height={300}/>
                                <h4 className="text-white font-semibold text-[28px] sm:text-[24px] mt-6 self-center">Interview Preparation</h4>
                            </div>
                        </div>      
                    </div>
                    
                </div>
                <div className="gap-1 h-2/3">
                    <div className="bg-tertiary flex rounded-2xl flex-col p-10 justify-start align-center gap-6 h-full">
                        <Image src="/live.svg" alt="live-projects" width={430} height={200} className="self-center"/>
                        <h4 className="text-white font-semibold self-center text-[28px] sm:text-[24px] mb-0 pb-0">Live Projects</h4>
                    </div>
                </div>
                
            </div>
            
        </div>
    </div>
);

export default World;
