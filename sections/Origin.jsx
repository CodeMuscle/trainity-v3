import React from 'react'

const Origin = () => {
  return (
    <div className="mx-24 my-16">
        <div className="origin-card bg-secondary p-16 flex flex-col gap-4 align-center justify-center">
            <h3 className="self-center text-white font-normal text-[46px] leading-[56px] sm:text-[44px] capitalize">Celebrating 2 years of <span className="text-primary">trainity</span></h3>
            <div className="flex flex-row justify-between px-28 py-6 text-center">
                <div className="flex flex-col gap-2 align-center justify-center">
                    <h1 className="text-white font-semi-bold text-[56px] sm:text-[52px]">50+</h1>
                    <p className="text-footer text-thin text-[18px] sm:text-[14px]">Million minutes of learning</p>
                </div>
                <div className="flex flex-col gap-2 align-center justify-center">
                    <h1 className="text-white font-semi-bold text-[56px] sm:text-[52px]">3,500+</h1>
                    <p className="text-footer text-thin text-[18px] sm:text-[14px]">Success stories of our users</p>
                </div>
                <div className="flex flex-col gap-2 align-center justify-center">
                    <h1 className="text-white font-semi-bold text-[56px] sm:text-[52px]">95%</h1>
                    <p className="text-footer text-thin text-[18px] sm:text-[14px]">Average placement rate</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Origin