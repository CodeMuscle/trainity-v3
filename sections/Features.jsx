import Image from 'next/image'
import React from 'react'

const Features = () => {
  return (
    <div className="my-24 mx-6 md:mx-0 lg:mx-0 md:ml-28 lg:ml-28 pb-28">
        <div className="self-center flex flex-col md:flex-row lg:flex-row gap-y-16 md:gap-8 lg:gap-8 sm:gap-4">
            <div className="flex flex-col gap-2 align-center justify-start">
                <div className="flex align-center justify-center rounded-md bg-secondary w-[60px] inset-0 p-3 h-[60px] border border-secondary">
                    <Image src="/rocket-block.svg" alt="rocket" width={100} height={100}/>
                </div>
                <h4 className="font-normal text-white text-[18px] sm:text-[14px] mt-2">Founded in 2021</h4>
                <p className="text-footer text-[16px] leading-[24px] sm:text-[16px] sm:leading-[22px] w-[75%] max-md:w-100">Our goal is to unite top tech firms with top talents through modern industry standard training and professional development tools.</p>
            </div>
            <div className="flex flex-col gap-2 align-center justify-start">
                <div className="flex align-center justify-center rounded-md bg-secondary w-[60px] inset-0 p-3 h-[60px] border border-secondary">
                    <Image src="/project-block.svg" alt="project" width={100} height={100}/>
                </div>
                <h4 className="font-normal text-white text-[18px] sm:text-[14px] mt-2">Quality Projects</h4>
                <p className="text-footer text-[16px] leading-[24px] sm:text-[16px] sm:leading-[22px] w-[75%] max-md:w-100">We prepare students for the industry by providing practical knowledge & skills with project and assignment-based learning.</p>
            </div>
            <div className="flex flex-col gap-2 align-center justify-start">
                <div className="flex align-center justify-center rounded-md bg-secondary w-[60px] inset-0 p-3 h-[60px] border border-secondary">
                    <Image src="/people-block.svg" alt="people" width={100} height={100}/>
                </div>
                <h4 className="font-normal text-white text-[18px] sm:text-[14px] mt-2">10K+ Students</h4>
                <p className="text-footer text-[16px] leading-[24px] sm:text-[16px] sm:leading-[22px] w-[80%] max-md:w-100">A gamified and experience-based learning that is trusted and backed by 10,000 students nation-wide.</p>
            </div>
            <div className="flex flex-col gap-2 align-center justify-start">
                <div className="flex align-center justify-center rounded-md bg-secondary w-[60px] inset-0 p-3 h-[60px] border border-secondary">
                    <Image src="/stars-block.svg" alt="stars" width={100} height={100}/>
                </div>
                <h4 className="font-normal text-white text-[18px] sm:text-[14px] mt-2">Rated 4.7</h4>
                <p className="text-footer text-[16px] leading-[24px] sm:text-[16px] sm:leading-[22px] w-[75%] max-md:w-100">We are rated 4.7+ by more than 3500+ users nation-wide helping candidates secure over 15 crore worth of jobs in top companies</p>
            </div>
        </div>
    </div>
  )
}

export default Features