"use client";

import React from 'react';

import { Stepper, Step } from "@material-tailwind/react";
import Image from 'next/image';

const GradAdmission = () => {

const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);
 
//   const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
//   const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  return (
    <>
        
        <div className="px-8 md:px-24 lg:px-24 pt-28 pb-8">
        <div className="bg-secondary rounded-2xl p-24 hidden md:flex lg:flex flex-col md:flex-row lg:flex-row gap-8">
            <div className="flex flex-col gap-6 basis-1/2 bg-tertiary px-8 py-10 rounded-2xl">
                <h3 className="text-white font-normal text-[24px]">Data Analytics Specialization (For Recent Graduates)</h3>
                <h1 className="text-white font-semibold text-[48px]">₹8,999 <span className="text-footer font-normal text-[24px] line-through">₹12,999</span> </h1>
                <div className="flex flex-row gap-6">
                    <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.7988 6.22852L18.1841 11.6138L12.7988 16.999" stroke="#91B9C9" stroke-width="1.33078" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M3.10156 11.6133H18.033" stroke="#91B9C9" stroke-width="1.33078" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                    <p className="text-footer font-thin text-[16px]">Note: No exceptions would be made beyond the offer expiry date.</p>
                </div>

                <button className="bg-primary w-100 p-6 text-white rounded-2xl font-semibold">Enroll Now</button>
                <p className="text-footer font-thin text-[14px]">Note: No exceptions would be made beyond the offer expiry date. Prices are expected to rise and bonuses will no longer be available.</p>
                
            </div>
            <div className="flex flex-col gap-4 basis-1/2 p-6">
                <h1 className="text-white font-semibold text-[52px] capitalize"><span className="text-primary">Admission</span> Process</h1>
                <p className="text-white font-thin text-[18px] leading-[1.5]">Gain the skills and knowledge needed to launch a successful career in Data Analytics in just 16 weeks through our comprehensive training program. </p>

                <div className="steps mt-18">
                    <div className="flex flex-row flex-start">
                    <div className="pt-8 flex flex-row max-h-[250px]" style={{transform: 'translateX(-50px)'}}>
                        <Stepper 
                            activeStep={activeStep}
                            isLastStep={(value) => setIsLastStep(value)}
                            isFirstStep={(value) => setIsFirstStep(value)}
                            style={{transform: 'rotate(90deg)'}}
                            className=""
                        >
                            <Step style={{transform: 'rotate(270deg)', background: '#48BF84'}} onClick={() => setActiveStep(0)}>1</Step>
                            <Step style={{transform: 'rotate(270deg)'}} onClick={() => setActiveStep(1)}>2</Step>
                            <Step style={{transform: 'rotate(270deg)'}} onClick={() => setActiveStep(2)}>3</Step>
                            <Step style={{transform: 'rotate(270deg)'}} onClick={() => setActiveStep(3)}>4</Step>
                        </Stepper>
                        <div className="flex flex-col gap-[1.6rem] -mt-4">
                            <p className="text-white font-normal text-[22px]capitalize w-100 flex-wrap">Apply to Trainity</p>
                            <p className="text-white font-normal text-[22px]capitalize">Appear for the screening test</p>
                            <p className="text-white font-normal text-[22px]capitalize">Submit your Statement of Purpose</p>
                            <p className="text-white font-normal text-[22px]capitalize">Enrollment!</p>
                            
                        </div>
                        {/* <div className="mt-24 flex justify-start">
                            <Button onClick={handlePrev} disabled={isFirstStep}>
                            Prev
                            </Button>
                            <Button onClick={handleNext} className="disabled" disabled={isLastStep}>
                            Next
                            </Button>
                        </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="bg-tertiary rounded-2xl px-8 py-12 flex flex-col gap-4 md:hidden lg:hidden">
            <h3 className="text-white font-normal text-[18px]">Data Analytics Specialization</h3>
            <h1 className="text-white font-semibold text-[40px]">₹3,000 <span className="text-footer line-through text-[18px]">₹4,999</span> </h1>
            <div className="flex flex-row gap-4">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.8008 5.81055L18.186 11.1958L12.8008 16.581" stroke="white" stroke-width="1.33078" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3.10547 11.1953H18.0369" stroke="white" stroke-width="1.33078" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p className="text-white font-thin text-[16px]">
                    Note: No exceptions would be made beyond the offer expiry date.
                </p>

            </div>

            <button className="bg-primary p-4 mt-4 text-white rounded-2xl">
                Enroll Now!
            </button>


        </div>
        </div>

        <div className="block px-1 mb-20 md:hidden lg:hidden">
            <div className="flex flex-col px-8 py-12 gap-4 md:hidden lg:hidden">
                <h3 className="text-white font-normal text-[28px] capitalize">What <span className="text-primary">you get</span> </h3>

                <div className="flex flex-row gap-6">
                    <div className="flex align-center justify-center p-1 rounded-full w-[140px] h-[50px] bg-secondary">
                        <Image src="/shape.svg" alt="tick" width={20} height={20} />
                    </div>
                    <p className="text-[18px] font-normal text-white">
                        Skills and knowledge needed to launch a successful career in Data Analytics in just 16 weeks.
                    </p>
                </div>
                <div className="flex flex-row gap-6">
                    <div className="flex align-center justify-center p-1 rounded-full w-[140px] h-[50px] bg-secondary">
                        <Image src="/shape.svg" alt="tick" width={20} height={20} />
                    </div>
                    <p className="text-[18px] font-normal text-white">
                        Gain the skills and knowledge needed to launch a successful career in Data Analytics. 
                    </p>
                </div>
            </div>

            <div className="flex flex-col gap-4 px-4">
                <h3 className="text-primary font-semibold text-[20px] capitalize">Admission <span className="text-white">Process</span></h3>
                <div className="flex flex-row gap-6 overflow-y-auto">
                    <div className="flex flex-col rounded-2xl bg-tertiary pl-4 pr-16 pt-6 pb-12 gap-4 w-[400px]">
                        <span className="text-primary font-normal uppercase text-[14px] tracking-wider">STEP 1</span>
                        <h3 className="text-white font-semibold text-[14px] whitespace-nowrap">Apply to Trainity</h3>
                        <div className="flex flex-row gap-4">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.62109 3.95312L13.6678 7.99979L9.62109 12.0465" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M2.33203 8H13.552" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <p className="text-[12px] font-normal text-white">A quick Brief about your background</p>

                        </div>
                        <div className="flex flex-row gap-4">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.62109 3.95312L13.6678 7.99979L9.62109 12.0465" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M2.33203 8H13.552" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <p className="text-[12px] font-normal text-white">Book slot for screening test</p>

                        </div>
                    </div>
                    <div className="flex flex-col rounded-2xl bg-tertiary pl-4 pr-16 pt-6 pb-12 gap-4">
                        <span className="text-primary font-normal uppercase text-[14px] tracking-wider">STEP 1</span>
                        <h3 className="text-white font-semibold text-[14px] whitespace-nowrap">Apply to Trainity</h3>
                        <div className="flex flex-row gap-4">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.62109 3.95312L13.6678 7.99979L9.62109 12.0465" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M2.33203 8H13.552" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <p className="text-[12px] font-normal text-white">A quick Brief about your background</p>

                        </div>
                        <div className="flex flex-row gap-4">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.62109 3.95312L13.6678 7.99979L9.62109 12.0465" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M2.33203 8H13.552" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <p className="text-[12px] font-normal text-white">Book slot for screening test</p>

                        </div>
                    </div>
                    <div className="flex flex-col rounded-2xl bg-tertiary pl-4 pr-16 pt-6 pb-12 gap-4">
                        <span className="text-primary font-normal uppercase text-[14px] tracking-wider">STEP 1</span>
                        <h3 className="text-white font-semibold text-[14px] whitespace-nowrap">Apply to Trainity</h3>
                        <div className="flex flex-row gap-4">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.62109 3.95312L13.6678 7.99979L9.62109 12.0465" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M2.33203 8H13.552" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <p className="text-[12px] font-normal text-white">A quick Brief about your background</p>

                        </div>
                        <div className="flex flex-row gap-4">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.62109 3.95312L13.6678 7.99979L9.62109 12.0465" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M2.33203 8H13.552" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <p className="text-[12px] font-normal text-white">Book slot for screening test</p>

                        </div>
                    </div>
                    <div className="flex flex-col rounded-2xl bg-tertiary pl-4 pr-16 pt-6 pb-12 gap-4">
                        <span className="text-primary font-normal uppercase text-[14px] tracking-wider">STEP 1</span>
                        <h3 className="text-white font-semibold text-[14px] whitespace-nowrap">Apply to Trainity</h3>
                        <div className="flex flex-row gap-4">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.62109 3.95312L13.6678 7.99979L9.62109 12.0465" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M2.33203 8H13.552" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <p className="text-[12px] font-normal text-white">A quick Brief about your background</p>

                        </div>
                        <div className="flex flex-row gap-4">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.62109 3.95312L13.6678 7.99979L9.62109 12.0465" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M2.33203 8H13.552" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <p className="text-[12px] font-normal text-white">Book slot for screening test</p>

                        </div>
                    </div>
                </div>

            </div>
            
        </div>
    </>
  )
}

export default GradAdmission