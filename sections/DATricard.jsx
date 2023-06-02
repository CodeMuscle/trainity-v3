import Image from 'next/image'
import React from 'react'

const DATricard = () => {
  return (
    <div className="px-4 md:px-40 lg:px-40 py-24">
        <div className="tricard-mob md:hidden lg:hidden flex flex-row gap-6 justify-between text-center rounded-2xl p-6">
            <div className="flex flex-col md:flex-row lg:flex-row gap-3">
                <Image src="/peers.svg" alt="peer" width={50} height={50} className="self-center"/>
                <div className="flex flex-col flex-start justify-center align-center">
                    <h3 className="text-white font-normal text-[20px] md:text-[32px] lg:text-[32px]">5000+</h3>
                    <p className="text-footer font-thin text-[12px]">Students Enrolled</p>
                </div>
            </div>
            <div className="vl"></div>
            <div className="flex flex-col md:flex-row lg:flex-row gap-3">
                <Image src="/briefcase-da.svg" alt="peer" width={40} height={40} className="self-center"/>
                <div className="flex flex-col flex-start justify-center align-center">
                    <h3 className="text-white font-normal text-[20px] md:text-[32px] lg:text-[32px]">8LPA</h3>
                    <p className="text-footer font-thin text-[12px]">Average CTC</p>
                </div>
            </div>
            <div className="vl"></div>
            <div className="flex flex-col md:flex-row lg:flex-row gap-3">
                <Image src="/coins.svg" alt="peer" width={40} height={40} className="self-center"/>
                <div className="flex flex-col flex-start justify-center align-center">
                    <h3 className="text-white font-normal text-[20px] md:text-[32px] lg:text-[32px]">40%</h3>
                    <p className="text-footer font-thin text-[12px]">Avg. Salary Hike</p>
                </div>
            </div>
        </div>
        <div className="hidden md:flex lg:flex flex-row gap-6 justify-between text-center rounded-2xl p-6">
            <div className="flex flex-col md:flex-row lg:flex-row gap-3">
                <Image src="/peers.svg" alt="peer" width={50} height={50} className="self-center"/>
                <div className="flex flex-col flex-start justify-center align-center">
                    <h3 className="text-white font-normal text-[20px] md:text-[32px] lg:text-[32px]">5000+</h3>
                    <p className="text-footer font-thin text-[12px]">Students Enrolled</p>
                </div>
            </div>
            <div className="vl"></div>
            <div className="flex flex-col md:flex-row lg:flex-row gap-3">
                <Image src="/briefcase-da.svg" alt="peer" width={40} height={40} className="self-center"/>
                <div className="flex flex-col flex-start justify-center align-center">
                    <h3 className="text-white font-normal text-[20px] md:text-[32px] lg:text-[32px]">8LPA</h3>
                    <p className="text-footer font-thin text-[12px]">Average CTC</p>
                </div>
            </div>
            <div className="vl"></div>
            <div className="flex flex-col md:flex-row lg:flex-row gap-3">
                <Image src="/coins.svg" alt="peer" width={40} height={40} className="self-center"/>
                <div className="flex flex-col flex-start justify-center align-center">
                    <h3 className="text-white font-normal text-[20px] md:text-[32px] lg:text-[32px]">40%</h3>
                    <p className="text-footer font-thin text-[12px]">Avg. Salary Hike</p>
                </div>
            </div>
        </div>
    
    </div>
  )
}

export default DATricard