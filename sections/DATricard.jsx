import Image from 'next/image'
import React from 'react'

const DATricard = () => {
  return (
    <div className="px-40 py-24">
        <div className="flex flex-row gap-6 justify-between">
            <div className="flex flex-row gap-3">
                <Image src="/peers.svg" alt="peer" width={100} height={100} />
                <div className="flex flex-col flex-start justify-center align-center">
                    <h3 className="text-white font-normal text-[32px]">5000+</h3>
                    <p className="text-footer font-thin text-[18px]">Students Enrolled</p>
                </div>
            </div>
            <div className="vl"></div>
            <div className="flex flex-row gap-3">
                <Image src="/briefcase-da.svg" alt="peer" width={70} height={70} />
                <div className="flex flex-col flex-start justify-center align-center">
                    <h3 className="text-white font-normal text-[32px]">8LPA</h3>
                    <p className="text-footer font-thin text-[18px]">Average CTC</p>
                </div>
            </div>
            <div className="vl"></div>
            <div className="flex flex-row gap-3">
                <Image src="/coins.svg" alt="peer" width={70} height={70} />
                <div className="flex flex-col flex-start justify-center align-center">
                    <h3 className="text-white font-normal text-[32px]">40%</h3>
                    <p className="text-footer font-thin text-[18px]">Avg. Salary Hike</p>
                </div>
            </div>
        </div>
    
    </div>
  )
}

export default DATricard