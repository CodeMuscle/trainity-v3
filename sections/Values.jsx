import Image from 'next/image'
import React from 'react'

const Values = () => {
  return (
    <div className="px-18 py-28">
        <div className="flex flex-col text-center gap-2 align-center justify-center ">
            <h1 className="text-white font-normal text-[46px] sm:text-[42px] ">Our <span className="text-primary">Core</span> Values</h1>
            <p className="text-footer text-[20px] sm:text-[16px] font-thin w-[40%] self-center">Our values embody core beliefs that we want to be at the heart of all that we do and together build a community of creative problem-solvers.</p>
        </div>
        <div className="place-content-center flex flex-row gap-10 mt-14">
            <div className="flex flex-col gap-2 rounded-2xl bg-secondary border-secondary px-10 py-8 w-[200px]">
                <Image src="/rocket-block.svg" alt="rocket" width={65} height={65} className="self-center mb-1"/>
                <p className="text-white font-normal text-[18px] sm:text-[14px] self-center text-center">Build Together, Ship Together</p>
            </div>
            <Image src="/plus.svg" alt="plus" height={20} width={20} className="self-center" />
            <div className="flex flex-col gap-2 rounded-2xl bg-secondary border-secondary px-10 py-8 w-[200px]">
                <Image src="/project-block.svg" alt="projects" width={65} height={65} className="self-center mb-1" />
                <p className="text-white font-normal text-[18px] sm:text-[14px] self-center text-center">Customer&apos;s First Approach</p>
            </div>
            <Image src="/plus.svg" alt="plus" height={20} width={20} className="self-center" />
            <div className="flex flex-col gap-2 rounded-2xl bg-secondary border-secondary px-10 py-8 w-[200px]">
                <Image src="/people-block.svg" alt="people" width={65} height={65} className="self-center mb-1"/>
                <p className="text-white font-normal text-[18px] sm:text-[14px] self-center text-center">Experience Driven Learning</p>
            </div>
            <Image src="/plus.svg" alt="plus" height={20} width={20} className="self-center" />
            <div className="flex flex-col gap-2 rounded-2xl bg-secondary border-secondary px-10 py-8 w-[200px]">
                <Image src="/stars-block.svg" alt="stars" width={65} height={65} className="self-center mb-1"/>
                <p className="text-white font-normal text-[18px] sm:text-[14px] self-center text-center">Quality Education</p>
            </div>
        </div>
    
    </div>
  )
}

export default Values