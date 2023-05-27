import Image from 'next/image'
import React from 'react'

const Alumni = () => {
  return (
    <div className="px-12 py-10 mb-20 flex flex-col gap-8">
        <h3 className="font-normal self-center text-white text-[32px] sm:text-[28px] capitalize py-4">Built and designed by alumni of your favorite brands</h3>
        <div className="flex align-center justify-between mx-28 gap-10">
            <Image src="/Meta.svg" width={140} height={60} alt="" />
            <Image src="/Google.svg" width={140} height={60} alt="" />
            <Image src="/upGrad.svg" width={140} height={60} alt="" />
            <Image src="/IIT.svg" width={200} height={60} alt="" />
        </div>
    </div>
  )
}

export default Alumni