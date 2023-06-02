import Image from 'next/image'
import React from 'react'

const Testimonial = () => {
  return (
    <div className="py-28 md:px-16 lg:px-16 px-8">
        <div className="flex flex-col relative overflow-hidden">
            <div className="flex flex-col gap-2 text-center place-content-center mb-16">
                <h1 className="text-white font-semibold text-[28px] md:text-[42px] lg:text-[42px] capitalize">Testimonials from course graduates</h1>
                <p className="text-footer font-thin hidden md:text-[16px] lg:text-[18px]">See what the students of Trainity’s program have to say about the program and it’s content</p>
            </div>
            <div className="flex flex-col md:flex-row lg:flex-row gap-6">
                
                <div className="flex flex-col gap-4 ">
                    <div className="flex flex-col gap-5 p-8 rounded-2xl bg-secondary">
                        <div className="flex flex-row gap-2">
                            <Image src="/full-star.svg" alt="full-star" width={25} height={25} />
                            <Image src="/full-star.svg" alt="full-star" width={25} height={25} />
                            <Image src="/full-star.svg" alt="full-star" width={25} height={25} />
                            <Image src="/full-star.svg" alt="full-star" width={25} height={25} />
                            <Image src="/empty-star.svg" alt="empty-star" width={25} height={25} />
                        </div>
                        <p className="text-white font-thin text-[16px]">“This program is jam-packed with super valuable content, assignments and projects.”</p>
                        <div className="flex flex-row gap-4">
                            <Image src="/parth.svg" alt="parth" width={50} height={50} />
                            <div className="flex flex-col self-center">
                                <p className="text-white font-normal text-[16px]">Parth Deshmukh</p>
                                <p className="text-footer font-thin text-[14px]">Student - Data Analytics</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 p-8 rounded-2xl bg-secondary">
                        <div className="flex flex-row gap-2">
                            <Image src="/full-star.svg" alt="full-star" width={25} height={25} />
                            <Image src="/full-star.svg" alt="full-star" width={25} height={25} />
                            <Image src="/full-star.svg" alt="full-star" width={25} height={25} />
                            <Image src="/full-star.svg" alt="full-star" width={25} height={25} />
                            <Image src="/empty-star.svg" alt="empty-star" width={25} height={25} />
                        </div>
                        <p className="text-white font-thin text-[16px]">“This program is jam-packed with super valuable content, assignments and projects.”</p>
                        <div className="flex flex-row gap-4">
                            <Image src="/parth.svg" alt="parth" width={50} height={50} />
                            <div className="flex flex-col self-center">
                                <p className="text-white font-normal text-[16px]">Parth Deshmukh</p>
                                <p className="text-footer font-thin text-[14px]">Student - Data Analytics</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 p-8 rounded-2xl bg-secondary">
                        <div className="flex align-center justify-center w-full h-auto rounded-2xl">
                            <Image src="/screenshot.svg" alt="testimonial-demo" width={0} height={0} style={{width: '100%', height: 'auto'}} >
                            </Image>
                        </div>
                        <div className="flex flex-row gap-2">
                            <Image src="/full-star.svg" alt="full-star" width={25} height={25} />
                            <Image src="/full-star.svg" alt="full-star" width={25} height={25} />
                            <Image src="/full-star.svg" alt="full-star" width={25} height={25} />
                            <Image src="/full-star.svg" alt="full-star" width={25} height={25} />
                            <Image src="/full-star.svg" alt="empty-star" width={25} height={25} />
                        </div>
                        <p className="text-white font-thin text-[16px]">“The Internship experience & live project was amazing.”</p>
                        <div className="flex flex-row gap-4">
                            <Image src="/parth.svg" alt="parth" width={50} height={50} />
                            <div className="flex flex-col self-center">
                                <p className="text-white font-normal text-[16px]">Rohit Dahade</p>
                                <p className="text-footer font-thin text-[14px]">Student - Data Analytics</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:flex lg:flex hidden flex-col gap-4 ">
                <div className="flex flex-col gap-5 p-8 rounded-2xl bg-secondary">
                        <div className="flex align-center justify-center w-full h-auto rounded-2xl">
                            <Image src="/screenshot.svg" alt="testimonial-demo" width={0} height={0} style={{width: '100%', height: 'auto'}} >
                            </Image>
                        </div>
                        <div className="flex flex-row gap-2">
                            <Image src="/full-star.svg" alt="full-star" width={25} height={25} />
                            <Image src="/full-star.svg" alt="full-star" width={25} height={25} />
                            <Image src="/full-star.svg" alt="full-star" width={25} height={25} />
                            <Image src="/full-star.svg" alt="full-star" width={25} height={25} />
                            <Image src="/full-star.svg" alt="empty-star" width={25} height={25} />
                        </div>
                        <p className="text-white font-thin text-[16px]">“The Internship experience & live project was amazing.”</p>
                        <div className="flex flex-row gap-4">
                            <Image src="/parth.svg" alt="parth" width={50} height={50} />
                            <div className="flex flex-col self-center">
                                <p className="text-white font-normal text-[16px]">Rohit Dahade</p>
                                <p className="text-footer font-thin text-[14px]">Student - Data Analytics</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 p-8 rounded-2xl bg-secondary">
                        <div className="flex flex-row gap-2">
                            <Image src="/full-star.svg" alt="full-star" width={25} height={25} />
                            <Image src="/full-star.svg" alt="full-star" width={25} height={25} />
                            <Image src="/full-star.svg" alt="full-star" width={25} height={25} />
                            <Image src="/full-star.svg" alt="full-star" width={25} height={25} />
                            <Image src="/empty-star.svg" alt="empty-star" width={25} height={25} />
                        </div>
                        <p className="text-white font-thin text-[16px]">“This program is jam-packed with super valuable content, assignments and projects.”</p>
                        <div className="flex flex-row gap-4">
                            <Image src="/parth.svg" alt="parth" width={50} height={50} />
                            <div className="flex flex-col self-center">
                                <p className="text-white font-normal text-[16px]">Parth Deshmukh</p>
                                <p className="text-footer font-thin text-[14px]">Student - Data Analytics</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 p-8 rounded-2xl bg-secondary">
                        <div className="flex flex-row gap-2">
                            <Image src="/full-star.svg" alt="full-star" width={25} height={25} />
                            <Image src="/full-star.svg" alt="full-star" width={25} height={25} />
                            <Image src="/full-star.svg" alt="full-star" width={25} height={25} />
                            <Image src="/full-star.svg" alt="full-star" width={25} height={25} />
                            <Image src="/empty-star.svg" alt="empty-star" width={25} height={25} />
                        </div>
                        <p className="text-white font-thin text-[16px]">“This program is jam-packed with super valuable content, assignments and projects.”</p>
                        <div className="flex flex-row gap-4">
                            <Image src="/parth.svg" alt="parth" width={50} height={50} />
                            <div className="flex flex-col self-center">
                                <p className="text-white font-normal text-[16px]">Parth Deshmukh</p>
                                <p className="text-footer font-thin text-[14px]">Student - Data Analytics</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="md:flex lg:flex hidden flex-col gap-4 ">
                    <div className="flex flex-col gap-5 p-8 rounded-2xl bg-secondary">
                        <div className="flex flex-row gap-2">
                            <Image src="/full-star.svg" alt="full-star" width={25} height={25} />
                            <Image src="/full-star.svg" alt="full-star" width={25} height={25} />
                            <Image src="/full-star.svg" alt="full-star" width={25} height={25} />
                            <Image src="/full-star.svg" alt="full-star" width={25} height={25} />
                            <Image src="/empty-star.svg" alt="empty-star" width={25} height={25} />
                        </div>
                        <p className="text-white font-thin text-[16px]">“This program is jam-packed with super valuable content, assignments and projects.”</p>
                        <div className="flex flex-row gap-4">
                            <Image src="/parth.svg" alt="parth" width={50} height={50} />
                            <div className="flex flex-col self-center">
                                <p className="text-white font-normal text-[16px]">Parth Deshmukh</p>
                                <p className="text-footer font-thin text-[14px]">Student - Data Analytics</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 p-8 rounded-2xl bg-secondary">
                        <div className="flex flex-row gap-2">
                            <Image src="/full-star.svg" alt="full-star" width={25} height={25} />
                            <Image src="/full-star.svg" alt="full-star" width={25} height={25} />
                            <Image src="/full-star.svg" alt="full-star" width={25} height={25} />
                            <Image src="/full-star.svg" alt="full-star" width={25} height={25} />
                            <Image src="/empty-star.svg" alt="empty-star" width={25} height={25} />
                        </div>
                        <p className="text-white font-thin text-[16px]">“This program is jam-packed with super valuable content, assignments and projects.”</p>
                        <div className="flex flex-row gap-4">
                            <Image src="/parth.svg" alt="parth" width={50} height={50} />
                            <div className="flex flex-col self-center">
                                <p className="text-white font-normal text-[16px]">Parth Deshmukh</p>
                                <p className="text-footer font-thin text-[14px]">Student - Data Analytics</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 p-8 rounded-2xl bg-secondary">
                        <div className="flex align-center justify-center w-full h-auto rounded-2xl">
                            <Image src="/screenshot.svg" alt="testimonial-demo" width={0} height={0} style={{width: '100%', height: 'auto'}} >
                            </Image>
                        </div>
                        <div className="flex flex-row gap-2">
                            <Image src="/full-star.svg" alt="full-star" width={25} height={25} />
                            <Image src="/full-star.svg" alt="full-star" width={25} height={25} />
                            <Image src="/full-star.svg" alt="full-star" width={25} height={25} />
                            <Image src="/full-star.svg" alt="full-star" width={25} height={25} />
                            <Image src="/full-star.svg" alt="empty-star" width={25} height={25} />
                        </div>
                        <p className="text-white font-thin text-[16px]">“The Internship experience & live project was amazing.”</p>
                        <div className="flex flex-row gap-4">
                            <Image src="/parth.svg" alt="parth" width={50} height={50} />
                            <div className="flex flex-col self-center">
                                <p className="text-white font-normal text-[16px]">Rohit Dahade</p>
                                <p className="text-footer font-thin text-[14px]">Student - Data Analytics</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 flex w-full h-[500px] bg-fade z-5"></div>
            <button className="z-10 bg-secondary border-secondary rounded-2xl py-3 px-8 text-white w-[150px] self-center">
                View More
            </button>
        </div>
    </div>
  )
}

export default Testimonial