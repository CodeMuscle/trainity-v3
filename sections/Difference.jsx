import Image from 'next/image'
import React from 'react'

const Difference = () => {
  return (
    <div className="px-28 py-22">
        <div className="flex flex-col mb-10 place-content-center text-center">
            <h1 className="text-white font-semibold text-[46px] sm:text-[42px] my-2">How are we different from other Ed-tech platforms?
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
  )
}

export default Difference