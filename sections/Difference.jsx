import Image from 'next/image'
import React from 'react'

const Difference = () => {
  return (
    <>
    <div className="hidden md:block lg:block px-28 py-22">
        <div className="flex flex-col mb-10 place-content-center text-center">
            <h1 className="text-white font-semibold text-[46px] sm:text-[42px] my-2">How are we <span className="text-primary">different</span>  from other Ed-tech platforms?
            </h1>
            <p className="font-thin text-footer text-[18px] sm:text-[16px]">
                Customized course content designed to meet the unique needs of students.
            </p>
        </div>
        <div className="flex flex-row gap-5 mb-10 place-content-center">
            <div className="flex flex-col basis-1/2 gap-5">
                <div className="flex basis-1/4">
                    {/* <Image src="/live-projects.svg" alt="live-projects" width={800} height={800} className="absolute top-36 -right-28" />
                    <h3 className="text-white font-normal text-[28px] sm:text-[28px] capitalize absolute top-14 left-44">
                        Live Projects and Real Case Studies
                    </h3> */}
                    <Image src="/live copy.svg" alt="live-projects" width={0}
                    height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }}  />
                </div>
                <div className="flex flex-row gap-5">
                    <div className="basis-1/2">
                        {/* <h3 className="text-white font-normal text-[36px] sm:text-[32px] capitalize text-center">
                        Live Projects and Real Case Studies
                        </h3> */}
                        <Image src="/intense.svg" alt="career" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }}  />
                    </div>
                    <div className="basis-1/2">
                        {/* <h3 className="text-white font-normal text-[36px] sm:text-[32px] capitalize text-center">
                        Live Projects and Real Case Studies
                        </h3> */}
                        <Image src="/gamified.svg" alt="gamified" width={0} height={0} style={{ width: '100%', height: 'auto' }} />
                    </div>
                </div>
            </div>
            <div className="basis-1/4">
            <Image src="/simulated.svg" alt="simulated" width={388} height={730} />

            </div>
        </div>
    </div>

    {/* Mobile */}
    <div className="py-28 px-4 bg-secondary block md:hidden lg:hidden text-center">
        <h1 className="text-white font-semibold text-[30px] capitalize mb-3">Live Bootcamps from top 1% Instructors </h1>
        <p className="text-footer font-normal text-[14px] mb-12">
        Customized course content designed to meet the unique needs of students.
        </p>

        <div className="flex flex-col gap-8 self-center">
            <div className="flex flex-col rounded-2xl border-secondary bg-tertiary relative overflow-hidden p-10 gap-6 h-[400px]">
                <Image src="/multi-card.svg" alt="" width={0} height={0} style={{width: '100%', height: 'auto'}} className="absolute top-10 left-0 right-0" />
                <h3 className="text-white font-normal text-[22px] self-center capitalize absolute top-80 left-36">live projects</h3>
            </div>
            <div className="flex flex-col rounded-2xl border-secondary bg-tertiary relative overflow-hidden p-10 gap-6">
                <Image src="/joystick.svg" alt="" width={200} height={200} className="self-center" />
                <h3 className="text-white font-normal text-[22px] capitalize ">Gamified Learning</h3>
            </div>
            <div className="flex flex-col rounded-2xl border-secondary bg-tertiary relative overflow-hidden p-10 gap-6">
                <Image src="/smtp.svg" alt="" width={200} height={200} className="self-center" />
                <h3 className="text-white font-normal text-[22px] capitalize ">Intensive Career Bootcamp</h3>
            </div>
            <div className="flex flex-col-reverse rounded-2xl border-secondary bg-tertiary relative overflow-hidden p-10 gap-6">
                <Image src="/calendar-man.svg" alt="" width={200} height={200} className="self-center" />
                <h3 className="text-white font-normal text-[22px] capitalize ">Simulated Work Environment</h3>
            </div>
        </div>
    </div>
    </>
    
  )
}

export default Difference