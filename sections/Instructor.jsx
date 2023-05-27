import Image from 'next/image'
import React from 'react'

const Instructor = () => {
  return (
    <div className="mentor-section py-20 px-18">
        <div className="flex flex-col gap-4 self-center text-center">
            <h1 className="text-white font-normal text-[46px] sm:text-[42px] ">Meet Your <span className="text-primary">Mentors</span></h1>
            <p className="text-footer font-thin text-[20px] sm:text-[16px]">
            Meet our team of experienced mentors who will guide you through our comprehensive data analytics program.
            </p>

            <div className="self-center flex flex-row gap-24 my-16">
                <div className="flex flex-col gap-4">
                    <Image src="/mentor-1.svg" alt="siddharth" width={150} height={150} className="mb-3"/>
                    <div className="flex flex-col gap-2">
                        <p className="font-normal text-white text-[22px] sm:text-[18px]">Siddharth Rout</p>
                        <p className="text-primary font-normal text-[20px] sm:text-[16px]">Excel Instructor</p>
                    </div>
                    <div className="self-center flex flex-row gap-5 mt-3">
                        <a className="cursor-pointer rounded-full bg-secondary p-2 flex align-center justify-center">
                            <Image src="/linkedin_link.svg" width={20} height={20} alt="linkedin"  />
                        </a>
                        <a className="cursor-pointer rounded-full bg-secondary p-2 flex align-center justify-center">
                            <Image src="/twitter_link.svg" width={20} height={20} alt="twitter"  />
                        </a>
                        <a className="cursor-pointer rounded-full bg-secondary p-2 flex align-center justify-center">
                            <Image src="/external_link.svg" width={20} height={20} alt="external"  />
                        </a>
                    </div>
                </div>
                <div className="vl"></div>
                <div className="flex flex-col gap-4">
                    <Image src="/mentor-2.svg" alt="siddharth" width={150} height={150} className="mb-3"/>
                    <div className="flex flex-col gap-2">
                        <p className="font-normal text-white text-[22px] sm:text-[18px]">Huzefa Lohawala</p>
                        <p className="text-primary font-normal text-[20px] sm:text-[16px]">SQL Instructor</p>
                    </div>
                    <div className="self-center flex flex-row gap-5 mt-3">
                        <a className="cursor-pointer rounded-full bg-secondary p-2 flex align-center justify-center">
                            <Image src="/linkedin_link.svg" width={20} height={20} alt="linkedin"  />
                        </a>
                        {/* <a className="cursor-pointer rounded-full bg-secondary p-2 flex align-center justify-center">
                            <Image src="/twitter_link.svg" width={20} height={20} alt="twitter"  />
                        </a>
                        <a className="cursor-pointer rounded-full bg-secondary p-2 flex align-center justify-center">
                            <Image src="/external_link.svg" width={20} height={20} alt="external"  />
                        </a> */}
                    </div>
                </div>
                <div className="vl"></div>
                <div className="flex flex-col gap-4">
                    <Image src="/mentor-3.svg" alt="siddharth" width={150} height={150} className="mb-3"/>
                    <div className="flex flex-col gap-2">
                        <p className="font-normal text-white text-[22px] sm:text-[18px]">Raghu Raman A V</p>
                        <p className="text-primary font-normal text-[20px] sm:text-[16px]">PowerBI Instructor</p>
                    </div>
                    <div className="self-center flex flex-row gap-5 mt-3">
                        <a className="cursor-pointer rounded-full bg-secondary p-2 flex align-center justify-center">
                            <Image src="/linkedin_link.svg" width={20} height={20} alt="linkedin"  />
                        </a>
                        <a className="cursor-pointer rounded-full bg-secondary p-2 flex align-center justify-center">
                            <Image src="/twitter_link.svg" width={20} height={20} alt="twitter"  />
                        </a>
                        {/* <a className="cursor-pointer rounded-full bg-secondary p-2 flex align-center justify-center">
                            <Image src="/external_link.svg" width={20} height={20} alt="external"  />
                        </a> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Instructor