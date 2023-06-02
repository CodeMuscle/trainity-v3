import Image from 'next/image'
import React from 'react'

const Alumni = () => {
  return (
    <div className="px-12 py-10 mb-20 flex flex-col gap-8">
        <h3 className="hidden md:block lg:block font-normal self-center text-white text-[32px] sm:text-[28px] capitalize py-4">Built and designed by alumni of your favorite brands</h3>
        <div className=" hidden md:flex lg:flex align-center justify-between mx-28 gap-10">
            <Image src="/Meta.svg" width={140} height={60} alt="" />
            <Image src="/Google.svg" width={140} height={60} alt="" />
            <Image src="/upGrad.svg" width={140} height={60} alt="" />
            <Image src="/IIT.svg" width={200} height={60} alt="" />
        </div>

        {/* Mobile Logo Slider */}
        <div className="md:hidden lg:hidden xl:hidden flex items-center justify-center">
        {/* 1. */}
        <div className="w-[200%] shrink-0 h-20 overflow-hidden relative">
          {/* 2. */}
          <div className="w-[200%] overflow-hidden flex items-center h-20 justify-around absolute left-0 animate sm:gap-20 md:gap-20 gap-10">
            {/* 3 */}
            <Image src="/Meta.svg" width={140} height={60} alt="" />
            <Image src="/Google.svg" width={140} height={60} alt="" />
            <Image src="/upGrad.svg" width={140} height={60} alt="" />
            <Image src="/Meta.svg" width={140} height={60} alt="" />
            <Image src="/IIT.svg" width={200} height={60} alt="" />
            <Image src="/Google.svg" width={140} height={60} alt="" />
            <Image src="/Meta.svg" width={140} height={60} alt="" />
            <Image src="/Google.svg" width={140} height={60} alt="" />
            <Image src="/upGrad.svg" width={140} height={60} alt="" />
            <Image src="/Meta.svg" width={140} height={60} alt="" />
            <Image src="/IIT.svg" width={200} height={60} alt="" />
            <Image src="/Google.svg" width={140} height={60} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Alumni