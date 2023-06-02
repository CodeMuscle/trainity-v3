import Image from 'next/image'
import React from 'react'

const DAHome = () => {
  return (
    <>
       <div className="hidden px-4 md:pl-32 lg:pl-32 pb-14 md:flex lg:flex flex-col md:flex-row lg:flex-row align-center justify-center">
            <div className="flex flex-col basis-1/2 pt-28">
                <div className="flex flex-col gap-2">
                    <div className="bg-secondary rounded-lg p-2 w-[120px]">
                        <p className="text-white font-semibold text-[18px] sm:text-[16px]">#1 Bestseller</p>
                    </div>
                    <h1 className="text-white font-bold text-[64px] sm:text-[64px]">Data Analytics</h1>
                    <p className="text-white font-thin text-[22px] sm:text-[22px] w-[80%]">Understand the root cause of business problems by breaking down the details structurally before presenting solutions.</p>
                    <div className="flex flex-row gap-2 align-center mt-3">
                        <div className="flex flex-row gap-1">
                            <Image src="/star-full.svg" alt="star-full" width={15} height={15} />
                            <Image src="/star-full.svg" alt="star-full" width={15} height={15} />
                            <Image src="/star-full.svg" alt="star-full" width={15} height={15} />
                            <Image src="/star-full.svg" alt="star-full" width={15} height={15} />
                            <Image src="/star-half.svg" alt="star-half" width={15} height={15} />
                        </div>
                        <p className="text-white font-thin text-[18px] sm:text-[16px]">4.7 Stars</p>
                        <p className="text-white font-thin text-[18px] sm:text-[16px]">(985 ratings)</p>
                    </div>
                    <div className="flex flex-col gap-6 mt-24">
                        <p className="text-footer font-thin text-[18px] sm:text-[14px]">Taught by experts from companies like:</p>
                        <div className="flex flex-row gap-7">
                            <Image src="/microsoft-1.svg" alt="microsoft" width={150} height={100} />
                            <Image src="/paypal-1.svg" alt="paypal" width={150} height={100} />
                            <Image src="/dell-1.svg" alt="dell" width={50} height={50} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex ">
                <Image src="/da-bg.svg" alt="da-bg" width={0} height={0} style={{ width: '100%', height: '80vh' }} />
            </div>

      </div>

      <div className="md:hidden lg:hidden flex flex-col relative overflow-hidden gap-4 h-[800px] place-content-center px-8 text-center">
        <Image src="/tracks-mob.svg" alt="tracks" width={0} height={0} style={{width: '100%', height: 'auto'}} className="absolute top-0" />
        <div className="flex self-center rounded-full p-3"> 
            <p className="text-white font-normal text-[18px]">#1 Bestseller</p>
        </div>
        <h1 className="text-white font-semibold text-[40px] mt-56">Data Analytics </h1>
        <p className="text-white font-thin text-[18px] mb-4">
        Analyze business problems by deconstructing details before proposing solutions.
        </p>
        <div className="flex flex-row gap-3">
            <div className="flex flex-row gap-1">
                <Image src="/star-full.svg" alt="star-full" width={20} height={20} />
                <Image src="/star-full.svg" alt="star-full" width={20} height={20} />
                <Image src="/star-full.svg" alt="star-full" width={20} height={20} />
                <Image src="/star-full.svg" alt="star-full" width={20} height={20} />
                <Image src="/star-half.svg" alt="star-half" width={20} height={20} />
            </div>
            <p className="text-white font-normal text-[16px]">4.7 Stars</p>
            <p className="text-white font-normal text-[16px]">(985 ratings)</p>
        </div>
        <button className="bg-primary px-6 py-4 mb-6 rounded-2xl text-white">
            Enroll Now
        </button>

        <div className="flex flex-col gap-4">
            <p className="text-footer font-thin text-[16px]">
            Taught by experts from companies like:
            </p>
            <div className="flex flex-col gap-5 self-center place-content-center">
                <div className="flex flex-row gap-8">
                    <Image src="/microsoft-card.svg" alt="microsoft" width={150} height={150} />
                    <Image src="/paypal-card.svg" alt="paypal" width={150} height={150} />   
                </div>
                    <Image className="self-center" src="/dell-card.svg" alt="dell" width={150} height={150} />
            </div>
        </div>

      </div>

    </>
  )
}

export default DAHome