import Image from 'next/image'
import React from 'react'

const DAHome = () => {
  return (
       <div className="pl-32 pb-14 flex flex-row">
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
  )
}

export default DAHome