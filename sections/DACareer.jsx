import React from 'react'
import Image from 'next/image'

const DACareer = () => {
  return (
    <div className="px-28 py-24">
        <div className="flex flex-row justify-between gap-10">
            <div className="flex flex-col gap-8 basis-1/2 self-center">
                <h1 className="text-white font-semibold text-[52px] leading-[58px] capitalize">Kickstart your <span className="text-primary">Data Analytics Career </span> in <br/> just 16 weeks</h1>
                <p className="text-footer font-thin text-[18px]">Gain the skills and knowledge needed to launch a successful career in Data Analytics in just 16 weeks through our comprehensive training program. </p>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
              <div className="bg-secondary rounded-2xl relative overflow-hidden w-[200px] h-[180px]">
                <Image className="absolute top-20 left-2" src="/arrow 2.svg" alt="arrow" width={180} height={180} />
                <div className="absolute top-8 left-8 flex flex-col gap-1">
                  <p className="text-footer font-thin text-[12px]">WEEK 01-04</p>
                  <p className="text-white font-semibold text-[16px]">Upskilling</p>
                </div>
                
              </div>
              <div className="bg-secondary rounded-2xl relative overflow-hidden w-[200px] h-[180px]">
                <Image className="absolute -top-20 left-10" src="/notes.svg" alt="notes" width={150} height={150} />
                <div className="absolute top-28 left-8 flex flex-col gap-1">
                  <p className="text-footer font-thin text-[12px]">WEEK 05-08</p>
                  <p className="text-white font-semibold text-[16px]">Live Project</p>
                </div>
              </div>
              <div className="bg-secondary rounded-2xl relative overflow-hidden w-[200px] h-[180px]">
                <Image className="absolute -top-16 left-20" src="/chat.svg" alt="chat" width={150} height={150} />
                <div className="absolute top-28 left-8 flex flex-col gap-1">
                  <p className="text-footer font-thin text-[12px]">WEEK 09-12</p>
                  <p className="text-white font-semibold text-[16px]">Interview Prep</p>
                </div>
              </div>
              <div className="flex bg-secondary rounded-2xl relative overflow-hidden w-[200px] h-[180px]">
                <Image className="absolute top-20 left-28" src="/briefcase-da2.svg" alt="briefcase-da2" width={150} height={150} />
                <div className="absolute top-8 left-8 flex flex-col gap-1">
                  <p className="text-footer font-thin text-[12px]">WEEK 13-16</p>
                  <p className="text-white font-semibold text-[16px]">Placement Drive</p>
                </div>
              </div>
            </div>
        </div>    
    </div>
  )
}

export default DACareer