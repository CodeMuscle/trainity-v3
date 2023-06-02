"use client";

import styles from "../styles";

import { TitleText, TypingText } from "../components";
import Image from "next/image";

import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";


const data = [
    {
      label: "/index-f.svg",
      value: "index-finger",
      desc: "/Asset Frame.svg",
      feature1: 'Work in a Team 🤝',
      desc1: 'Daily Slack standups and weekly meetings with your teammates and mentor'
    },
    {
      label: "/peace.svg",
      value: "peace",
      desc: "/Asset Frame.svg",
      feature1: 'Collab with Team 🤝',
      desc1: 'Daily Slack standups and weekly meetings with your teammates and mentor'
    },
    {
      label: "/3-finger.svg",
      value: "three-finger",
      desc: "/Asset Frame.svg",
      feature1: 'Work in a Team 🤝',
      desc1: 'Daily Slack standups and weekly meetings with your teammates and mentor'
    },
  ];

const World = () => {
    // const pagination = {
    //     clickable: true,
    //     renderBullet: function (index, className) {
    //       return '<span class="' + className + '">' + (index + 1) + "</span>";
    //     className="mt-10"
    //     },
    //   };
      return(
    <div className="flex align-center justify-center py-2">
        <div className={`${styles.innerWidth} flex flex-col align-center justify-center`}>
            <div className={`${styles.paddings} flex flex-col align-center justify-center self-center`}>
                <TitleText title={<>Helping You Unlock Your Potential With Our Services</>} 
                textStyles="w-100 md:w-[50%] lg:w-[50%]"
                />
                <TypingText className={`${styles.interWidth}`} title="Unlock powerful features tailored to your specific needs" textStyles="text-footer hidden sm:hidden md:flex lg:flex " />    
            </div>

            {/* Desktop Card */}
            <div className="flex-row gap-6 mx-24 hidden md:flex lg:flex">
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

            {/* Mobile Card */}
            {/* Carousel */}
            <div className="self-center block md:hidden lg:hidden">
            <div className="mt-8 flex flex-col self-center text-center gap-4">
                            <p className="text-primary text-[20px] font-normal">2.1</p>
                            <h3 className="text-white font-normal text-[24px]">Collaborate with Real teams & analyze real data sets.</h3>
                    </div>

                    <Tabs value="peace" className="max-w-[40rem] mt-6">
                        <TabsBody>
                            {data.map(({ value, desc }) => (
                            <TabPanel key={value} value={value}>
                                <Image src={desc} alt={value} width={0} height={0} style={{width: '100%', height: 'auto'}}/>
                            </TabPanel>
                            ))}
                        </TabsBody>
                        <TabsHeader
                            className="bg-transparent"
                            indicatorProps={{
                            className: "bg-blue-500/10 shadow-none text-blue-500 rounded-full",
                            }}
                        >
                            {data.map(({ label, value }) => (
                            <Tab key={value} value={value} className="tab">
                                <Image className="" src={label} alt={value} width={25} height={25} />
                            </Tab>
                            ))}
                        </TabsHeader>
                        <TabsBody>
                            {data.map(({ value, desc1, feature1 }) => (
                            <TabPanel key={value} value={value}>
                                <div className="flex flex-col gap-2 align-center-justify-center self-center text-center">
                                    <p className="text-white font-semibold text-[18px]">{feature1}</p>
                                    <p className="text-white font-normal text-[16px]">{desc1}</p>
                                </div>
                            </TabPanel>
                            ))}
                        </TabsBody>
                        
                    </Tabs>
            </div>

                


            
        </div>
    </div>
)
};

export default World;
