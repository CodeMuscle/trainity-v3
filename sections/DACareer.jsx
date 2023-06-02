import React from 'react'
import Image from 'next/image'

const DACareer = () => {
  return (
    <div className=" px-8 md:px-28 lg:px-28 py-24">
        <div className="flex flex-col md:flex-col lg:flex-row justify-between gap-10">
            <div className="flex flex-col gap-8 basis-1/2 self-center">
                <h1 className="text-white font-semibold text-[30px] leading-[32px] md:text-[42px] md:leading-[42px] lg:text-[52px] lg:leading-[52px] text-center lg:text-start capitalize">Kickstart your <span className="text-primary">Data Analytics Career </span> in <br/> just 16 weeks</h1>
                <p className="text-footer font-thin text-[18px] md:text-satrt lg:text-start text-center">Gain the skills and knowledge needed to launch a successful career in Data Analytics in just 16 weeks through our comprehensive training program. </p>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 w-[80vw] h-[50vh] lg:w-[60vw] lg:h-[70vh] md:w-[80vw] md:h-[60vh] self-center">
              <div className="bg-secondary rounded-2xl relative overflow-hidden w-[100%] h-[100%] md:w-[100%] md:h-[100%] lg:w-[100%] lg:h-[100%]">
                <Image className="absolute top-20 left-2 md:top-28 md:left-24 lg:top-36 lg:left-40" src="/arrow 2.svg" alt="arrow" width={180} height={180} />
                <div className="absolute top-8 left-8 flex flex-col gap-1">
                  <p className="text-footer font-thin text-[12px] lg:text-[16px]">WEEK 01-04</p>
                  <p className="text-white font-semibold text-[16px] lg:text-[20px]">Upskilling</p>
                </div>
                
              </div>
              <div className="bg-secondary rounded-2xl relative overflow-hidden w-[100%] h-[100%] md:w-[100%] md:h-[100%] lg:w-[100%] lg:h-[100%]">
                <Image className="absolute -top-20 left-10 md:-top-14 md:left-32 lg:left-40" src="/notes.svg" alt="notes" width={150} height={150} />
                <div className="absolute top-28 left-8 md:top-36 lg:top-48 flex flex-col gap-1">
                  <p className="text-footer font-thin text-[12px] lg:text-[16px]">WEEK 05-08</p>
                  <p className="text-white font-semibold text-[16px] lg:text-[20px]">Live Project</p>
                </div>
              </div>
              <div className="bg-secondary rounded-2xl relative overflow-hidden w-[100%] h-[100%] md:w-[100%] md:h-[100%] lg:w-[100%] lg:h-[100%]">
                <Image className="absolute -top-16 left-20 md:left-32 lg:left-40 lg:-top-12" src="/chat.svg" alt="chat" width={150} height={150} />
                <div className="absolute top-28 left-8 md:top-36 lg:top-48 flex flex-col gap-1">
                  <p className="text-footer font-thin text-[12px] lg:text-[16px]">WEEK 09-12</p>
                  <p className="text-white font-semibold text-[16px] lg:text-[20px]">Interview Prep</p>
                </div>
              </div>
              <div className="flex bg-secondary rounded-2xl relative overflow-hidden w-[100%] h-[100%] md:w-[100%] md:h-[100%] lg:w-[100%] lg:h-[100%]">
                <Image className="absolute top-20 left-28 md:left-36 lg:left-48 lg:top-28" src="/briefcase-da2.svg" alt="briefcase-da2" width={150} height={150} />
                <div className="absolute top-8 left-8 flex flex-col gap-1">
                  <p className="text-footer font-thin text-[12px] lg:text-[16px]">WEEK 13-16</p>
                  <p className="text-white font-semibold text-[16px] lg:text-[20px]">Placement Drive</p>
                </div>
              </div>
            </div>
        </div>    
    </div>
  )
}

export default DACareer