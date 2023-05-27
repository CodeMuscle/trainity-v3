import Image from 'next/image'
import React from 'react'

const Success = () => {
  return (
    <div className="py-24 px-28">
        {/* <div className="gradient-custom">
            <Image src="/gradient-05.svg" alt="gradient-04" width={350} height={450} />
        </div> */}
        <div className="flex flex-row justify-between align-center gap-10">
            <div className="flex flex-col basis-1/2 gap-0">
                <div className="flex flex-row gap-14 justify-center">
                    <Image src="/brain-block.svg" alt="brain" width={100} height={100} />
                    <Image src="/enabler-block.svg" alt="enabler" width={100} height={100} />
                    <Image src="/intelli-block.svg" alt="intelli" width={100} height={100} />
                </div>
                <div className="flex flex-row gap-14 justify-center">
                    <Image src="/rapid-block.svg" alt="rapid" width={100} height={100} />
                    <Image src="/db-block.svg" alt="db" width={100} height={100} />
                </div>
                <div className="flex flex-row gap-14 justify-center">
                    <Image src="/packt-block.svg" alt="packt" width={100} height={100} />
                    <Image src="/emiko-block.svg" alt="emiko" width={100} height={100} />
                    <Image src="/bayes-block.svg" alt="bayes" width={100} height={100} />
                </div>
                <div className="flex flex-row gap-14 justify-center">
                    <Image src="/l3-block.svg" alt="l3" width={100} height={80} />
                    <Image src="/iNeuron-block.svg" alt="iNeuron" width={100} height={100} />
                </div>
                <div className="flex flex-row gap-14 justify-center">
                    <Image src="/mintifi-block.svg" alt="mintifi" width={100} height={100} />
                    <Image src="/pwc-block.svg" alt="pwc" width={100} height={100} />
                    <Image src="/l1-block.svg" alt="l1" width={100} height={100} />
                </div>
            </div>
            <div className="flex flex-col basis-1/2 gap-8 self-center">
                <h1 className="text-white font-semibold text-[46px] leading-[56px] sm:text-[44px] sm:leading-[52px] capitalize w-[60%]">How <span className="text-primary">Trainity</span> brings success to students</h1>
                <p className="text-footer font-thin text-[20px] sm:text-[16px]">&quot;Trainity offers an updated, practical curriculum with a focus on immersive learning. It provides a risk-free education at no cost, taking on the financial burden for its students. Aspiring to guide and mentor individuals, I am thrilled to be a part of Trainity&apos;s mission.&quot;</p>
                <div className="flex flex-row gap-6 justify-start-align-center">
                    <Image src="/siddhart-circle.svg" alt="siddhart-circle" width={60} height={60} />
                    <div className="flex flex-col gap-2 self-center">
                        <p className="text-white font-normal text-[20px] sm:text-[16px]">Siddharth Rout</p>
                        <p className="text-footer font-thin text-[16px] sm:text-[12px]">Microsoft Excel Mentor</p>
                    </div>
                </div>
            </div>
        </div>
    
    </div>
  )
}

export default Success