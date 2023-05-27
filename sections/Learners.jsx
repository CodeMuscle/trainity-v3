import Image from 'next/image'
import React from 'react'

const Learners = () => {
  return (
    <div className="px-4 place-content-center">
        <div className="text-center flex flex-col gap-2">
            <h1 className="text-white font-normal text-[32px] md:text-[38px] sm:text-[46px] capitalize w-[70%] self-center">Connect with a constantly growing <br /> <span className="text-primary">community of learners</span> </h1>
            <div className="place-content-center py-40 flex flex-row gap-24">
                <div className="flex flex-col gap-2">
                    <Image src="/4.7.svg" alt="4.7+" width={200} height={200} />
                    <p className="font-thin text-white text-[22px] sm:text-[18px] capitalize mt-8">Rating on google </p>
                </div>
                <div className="flex flex-col gap-2 -mt-[55px]">
                    <Image src="/4000.svg" alt="4000+" width={200} height={200} />
                    <p className="font-thin text-white text-[22px] sm:text-[18px] capitalize mt-8">followers on linkedin </p>
                </div>
                <div className="flex flex-col gap-2 -mt-[55px]">
                    <Image src="/4200.svg" alt="4200+" width={200} height={200} />
                    <p className="font-thin text-white text-[22px] sm:text-[18px] capitalize mt-8">followers on Instagram</p>
                </div>
                <div className="flex flex-col gap-2">
                    <Image src="/98.svg" alt="98%" width={200} height={200} />
                    <p className="font-thin text-white text-[22px] sm:text-[18px] capitalize mt-8">satisfied customers</p>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Learners