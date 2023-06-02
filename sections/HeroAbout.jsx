import Image from 'next/image'
import React from 'react'

const HeroAbout = () => {
  return (
    <>
        <div className="hidden md:flex lg:flex mb-20 h-screen">
            <div className="absolute inset-0">
                <Image src="/about-bg.svg" alt="about-bg" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }}/>
            </div>
            <div className="absolute flex flex-col px-28 pt-28 pb-48 text-center">
                <div className="flex self-center">
                    <Image src="/bolt-1.svg" width={25} height={25} alt="bolt" />
                    <p className="text-white text-[18px] sm:text-[14px] capitalize self-center ">personalized learning for personized success!</p>
                </div>
                <h1 className="text-white font-bold text-[64px] sm:text-[60px] capitalize my-6 w-[70%] self-center leading-[74px]">On a mission to <span className="text-primary">make learning Experience driven</span></h1>
                <p className="text-footer text-[18px] sm:text-[14px] w-[50%] self-center">We design programs that help you gain real work experience by working on live projects so that you can thrive and not just survive in the fast-paced world.</p>
                <div className="self-center flex mt-48">
                    <Image src="/group.png" width={150} height={60} alt="placed" />
                </div>
                <p className="mt-6 text-footer font-normal text-[16px] sm:text-[16px] "><span className="text-white font-semibold">1500+ </span> Cracked internships in last 4 weeks from our platform!</p>
            </div>
        </div> 


        <div className="heroabout-section pt-20 pb-40 px-4 md:hidden lg:hidden xl:hidden block">
            <div className="flex flex-col gap-4 text-center self-center place-content-center">
                <div className="flex flex-col gap-1">
                    <Image src="/lightning-bolt.svg" alt="bolt" width={40} height={40} className="self-center" />
                    <p className="text-white font-normal text-[18px] capitalize">
                        personalized learning for personized success!
                    </p>
                </div>

                <h1 className="text-white font-semibold text-[36px] leading-[38px] capitalize">
                    On a mission to <span className="text-primary">make learning Experience driven</span> 
                </h1>
                <p className="text-footer font-normal text-[16px] mb-20">
                We design programs that help you gain real work experience by working on live projects so that you can thrive and not just survive in the fast-paced world.
                </p>

                <div className="self-center">
                    <Image src="/group.png" width={150} height={150} alt="placed" />
                </div>

                <p className="mt-4 text-footer font-normal text-[18px] "><span className="text-white font-semibold">1500+ </span> Cracked internships in last 4 weeks from our platform!</p>


            </div>
        </div> 
    </>
           
    
  )
}

export default HeroAbout