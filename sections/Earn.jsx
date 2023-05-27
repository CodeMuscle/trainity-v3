import Image from 'next/image'
import React from 'react'

const Earn = () => {
  return (
    <div className="py-20 px-18 place-content-center">
        <h1 className="text-center capitalize mb-14 font-normal text-white text-[46px] sm:text-[38px]">with you, from <span className="text-primary">learning to earning!</span></h1>
        <div className="flex flex-row place-content-center">
            <div className="earn-card flex relative overflow-hidden p-6 w-[300px] h-[300px] rounded-2xl bg-secondary border-secondary">
                <Image src="/graduate.svg" alt="graduate" width={190} height={190} className="absolute -top-2 -right-16" />
                <div className="absolute top-24 left-8">
                    <p className="step-1 uppercase font-normal text-[14px] sm:text-[12px]">STEP 1</p>
                    <h3 className="font-semibold text-white text-[22px] sm:text-[18px] my-1">Learn</h3>
                    <p className="step-1-light font-light text-[16px] opacity-50 w-[90%]">Complete Learning milestones with our industry-vetted curriculum. Build an unbeatable portfolio working on live projects and real case studies.</p>
                </div>
            </div>

            <hr className="w-[100px] self-center opacity-50" />

            <div className="earn-card flex relative overflow-hidden p-6 w-[300px] h-[300px] rounded-2xl bg-secondary border-secondary">
                <Image src="/suitcase.svg" alt="suitcase" width={200} height={200} className="absolute top-3 -right-10" />
                <div className="absolute top-28 left-8">
                    <p className="step-2 uppercase font-normal text-[14px] sm:text-[12px]">STEP 2</p>
                    <h3 className="font-semibold text-white text-[22px] sm:text-[18px] my-1">Intern</h3>
                    <p className="step-2 font-light text-[16px] opacity-50 w-[90%]">Guaranteed paid Internship at one of the top tech startups/ MNC to get you industry-primed and job ready.</p>
                </div>
            </div>

            <hr className="w-[100px] self-center opacity-50" />

            <div className="earn-card flex relative overflow-hidden p-6 w-[300px] h-[300px] rounded-2xl bg-secondary border-secondary">
                <Image src="/envelope.svg" alt="envelope" width={180} height={180} className="absolute -top-2 -right-14" />
                <div className="absolute top-24 left-8">
                    <p className="text-primary uppercase font-normal text-[14px] sm:text-[12px]">STEP 3</p>
                    <h3 className="font-semibold text-white text-[22px] sm:text-[18px] my-1">Land A Job</h3>
                    <p className="text-primary font-light text-[16px] opacity-50 w-[90%]">With an extraordinary portfolio, real work experience, and our placement preparation. You will stand out from your competitors & land your dream job.</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Earn