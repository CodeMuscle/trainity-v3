import Image from 'next/image'
import React from 'react';

// import { jobCard } from '../constants';
// text-[${id === 1 ? '#077DC6' : id === 2 ? '#C89208': '#604ABD'}] 


const JobCard = ({ src, title, paraTitle, subTitle, feature }) => {
  return (
    <div className="bg-secondary p-12 rounded-2xl flex flex-col justify-center align-center content-center">
        <div className="bg-tertiary rounded-full w-[300px] px-8 py-4 flex flex-row self-center">
            <Image src={src} width={40} height={40} alt={title}  />
            <div className="flex flex-col text-start ml-2">
                <p className="font-light text-[18px] sm:text-[14px] text-footer">You are currently a</p>
                <h6 className={`font-semibold text-[20px] sm:text-[16px] text-primary text-nowrap`}>{subTitle}</h6>
            </div>
        </div>

        <div className="flex flex-col align-center justify-center text-center mb-6 mt-4">
            <h1 className="font-bold text-white text-[44px] sm:text[40px]">{title}<span className="text-primary">{paraTitle}</span></h1>
            <p className="text-footer text-[24px] sm:text-[20px] font-light">Land a <span className="text-primary">{feature}</span> at top tech companies</p>
        </div>

        <button type="button" className="text-white font-normal bg-primary rounded-2xl px-12 py-4">
            Learn More
        </button>
    </div>
  )
}

export default JobCard