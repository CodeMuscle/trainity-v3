import Image from 'next/image'
import React from 'react'

const DAAdmission = () => {
  return (
    <>
        <div className="px-20 py-28 hidden md:block lg:block">
            <div className="flex flex-col bg-secondary p-20 rounded-2xl gap-12">
                <div className="flex flex-row lg:gap-28 md:gap-12 sm:gap-8">
                    <div className="flex flex-col gap-6 p-10 bg-tertiary rounded-2xl basis-1/2">
                        <h3 className="capitalize text-white font-normal text-[22px]">Data Analytics Specialization</h3>
                        <h1 className="text-white font-semibold text-[48px]">₹3,000 <span className="text-footer font-normal text-[22px] line-through">₹4,999</span> </h1>
                        <div className="flex flex-row gap-4">
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.7988 5.81055L18.1841 11.1958L12.7988 16.581" stroke="white" stroke-width="1.33078" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.10156 11.1953H18.033" stroke="white" stroke-width="1.33078" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                            <p className="text-white text-[16px] font-normal">Note: No exceptions would be made beyond the offer expiry date.</p>
                        </div>

                        <button className="rounded-2xl bg-primary w-100 p-5 text-white">Enroll Now</button>

                        <p className="text-footer font-thin text-[14px] opacity-60">Note: No exceptions would be made beyond the offer expiry date. Prices are expected to rise and bonuses will no longer be available.</p>
                    </div>

                    <div className="flex flex-col gap-6 self-center basis-1/2">
                        <h1 className="font-semibold text-white text-[52px] capitalize">What <span className="text-primary">you get</span> </h1>

                        <div className="flex flex-row gap-4">
                            <svg width="80" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="21" cy="21" r="21" fill="#48BF84" fill-opacity="0.1"/>
                            <path d="M27.6674 17L18.334 26.3334L14.334 22.3333" stroke="#48BF84" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                            <p className="text-white font-normal text-[18px]">Gain the skills and knowledge needed to launch a successful career in Data Analytics in just 16 weeks through our comprehensive training program. </p>

                        </div>
                        <div className="flex flex-row gap-4">
                            <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="21" cy="21" r="21" fill="#48BF84" fill-opacity="0.1"/>
                            <path d="M27.6674 17L18.334 26.3334L14.334 22.3333" stroke="#48BF84" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                            <p className="text-white font-normal text-[18px]">Gain the skills and knowledge needed to launch a successful career in Data Analytics. </p>

                        </div>
                        <div className="flex flex-row gap-4">
                            <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="21" cy="21" r="21" fill="#48BF84" fill-opacity="0.1"/>
                            <path d="M27.6674 17L18.334 26.3334L14.334 22.3333" stroke="#48BF84" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                            <p className="text-white font-normal text-[18px]">Gain the skills and knowledge needed to launch a successful career in Data Analytics. </p>

                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <h1 className="text-white text-[52px] font-semibold capitalize"><span className="text-primary">admission</span> Process</h1>
                    <p className="text-white font-normal text-[18px]">Gain the skills and knowledge needed to launch a successful career in Data Analytics in just 16 weeks <br /> through our comprehensive training program. </p>

                    <div className="flex flex-row gap-4">
                        <div className="flex flex-col p-8 basis-1/4 flex-start rounded-2xl bg-tertiary gap-4">
                            <p className="text-primary uppercase tracking-[4px]">Step 1</p>
                            <p className="text-white font-semibold text-[16px]capitalize">Apply to Trainity</p>
                            <div className="flex flex-row gap-4">
                                <Image src="/arrow-right.svg" alt="arrow-right" width={25} height={25} className="self-start" />
                                <p className="text-white text-[14px] font-thin">A quick Brief about your background</p>

                            </div>
                            <div className="flex flex-row gap-4">
                                <Image src="/arrow-right.svg" alt="arrow-right" width={22} height={22} className="self-start" />
                                <p className="text-white text-[14px] font-thin">Book slot for screening test</p>

                            </div>
                        </div>
                        <div className="flex flex-col p-8 basis-1/4 flex-start rounded-2xl bg-tertiary gap-4">
                            <p className="text-primary uppercase tracking-[4px]">Step 2</p>
                            <p className="text-white font-semibold text-[16px]capitalize">Appear for the screening test</p>
                            <div className="flex flex-row gap-4">
                                <Image src="/arrow-right.svg" alt="arrow-right" width={25} height={25} className="self-start"/>
                                <p className="text-white text-[14px] font-thin">Take the Common Screening Test</p>

                            </div>
                            <div className="flex flex-row gap-4">
                                <Image src="/arrow-right.svg" alt="arrow-right" width={20} height={20} className="self-start" />   
                                <p className="text-white text-[14px] font-thin">This is an elimination Step</p>

                            </div>
                        </div>
                        <div className="flex flex-col p-8 basis-1/4 flex-start rounded-2xl bg-tertiary gap-4">
                            <p className="text-primary uppercase tracking-[4px]">Step 3</p>
                            <p className="text-white font-semibold text-[16px]capitalize">Submit your Statement of Purpose</p>
                            <div className="flex flex-row gap-4">
                                <Image src="/arrow-right.svg" alt="arrow-right" width={40} height={40} className="self-start"/>
                                <p className="text-white text-[14px] font-thin">Submit &apos;Statement Of Purpose&apos; for joining the program</p>

                            </div>
                            <div className="flex flex-row gap-4">
                                <Image src="/arrow-right.svg" alt="arrow-right" width={22} height={22} className="self-start"/>
                                <p className="text-white text-[14px] font-thin">Along with additional details</p>

                            </div>
                        </div>
                        <div className="flex flex-col p-8 basis-1/4 flex-start rounded-2xl bg-tertiary gap-4">
                            <p className="text-primary uppercase tracking-[4px]">Step 4</p>
                            <p className="text-white font-semibold text-[16px]">Enrollment!</p>
                            <div className="flex flex-row flex-start gap-4">
                                <Image src="/arrow-right.svg" alt="arrow-right" width={60} height={60} className="self-start"/>
                                <p className="text-white text-[14px] font-thin">Receive offer based on 
                                screening test, SOP, and overall profile under marketing launchpad!</p>

                            </div>
                            {/* <div className="flex flex-row gap-4">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.5879 4.5293L14.858 8.7994L10.5879 13.0695" stroke="white" stroke-width="1.05521" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M2.89648 8.79883H14.736" stroke="white" stroke-width="1.05521" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <p className="text-white text-[14px] font-thin">Book slot for screening test</p>

                            </div> */}
                        </div>
                    </div>
                </div>

            </div>
        </div>

        {/* Mobile Section */}
        <div className="block px-1 mb-20 md:hidden lg:hidden">
                <div className="bg-tertiary rounded-2xl mx-10 px-8 py-12 flex flex-col gap-4 md:hidden lg:hidden">
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

                <div className="flex flex-col px-8 py-12 gap-4 md:hidden lg:hidden">
                    <h3 className="text-white font-normal text-[28px] capitalize">What <span className="text-primary">you get</span> </h3>

                    <div className="flex flex-row">
                        <div className="flex basis-1/3 w-[100%] h-[50px] align-center justify-center p-3 rounded-full bg-secondary mr-3">
                            <Image src="/shape.svg" alt="tick" width={20} height={20} />
                        </div>
                        <p className="text-[18px] font-normal text-white">
                            Skills and knowledge needed to launch a successful career in Data Analytics in just 16 weeks.
                        </p>
                    </div>
                    <div className="flex flex-row">
                        <div className="flex basis-1/3 w-[100%] h-[50px]  align-center justify-center p-2 rounded-full bg-secondary mr-3">
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

export default DAAdmission