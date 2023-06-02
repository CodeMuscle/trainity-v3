"use client"

import { useState, Fragment } from 'react';
import Image from 'next/image';
import { Switch } from '@headlessui/react';

import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

const data = [
    {
      label: "/index-f.svg",
      value: "index-finger",
      desc: "/Asset Frame.svg",
      feature1: 'Work in a Team 🤝',
      desc1: 'Daily Slack standups and weekly meetings with your teammates and mentor'
    },
    {
      label: "/peace.svg",
      value: "peace",
      desc: "/Asset Frame.svg",
      feature1: 'Collab with Team 🤝',
      desc1: 'Daily Slack standups and weekly meetings with your teammates and mentor'
    },
    {
      label: "/3-finger.svg",
      value: "three-finger",
      desc: "/Asset Frame.svg",
      feature1: 'Work in a Team 🤝',
      desc1: 'Daily Slack standups and weekly meetings with your teammates and mentor'
    },
  ];

function classNames(...classes) {

    return classes.filter(Boolean).join(' ')
  }

const DAJourney = () => {
  const [enabled, setEnabled] = useState(false);
  const [open, setOpen] = useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  
    return (
        <>
            <div className="hidden md:block lg:block py-28 px-24">
                <div className="flex flex-col gap-3 mb-10 text-center">
                    <h1 className="capitalize text-white font-semibold text-[52px] sm:text-[48px]">your Learning Journey</h1>
                    <p className="text-footer font-thin text-[18px]">Here is a definitive journey map of how you would be proceeding with the program</p>
                </div>
                <div className="flex flex-row gap-4">
                {/* SVG Path */}
                    <div className="svg-path flex">
                        <svg width="58" height="5188" viewBox="0 0 58 5188" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23 5184C23 5185.1 23.8954 5186 25 5186C26.1046 5186 27 5185.1 27 5184L23 5184ZM27 5184L27 48L23 48L23 5184L27 5184Z" fill="#48BF84"/>
                        <circle cx="25" cy="5164" r="24" fill="#48BF84"/>
                        <path d="M18.2358 5169.76V5167.25L25.642 5155.55H27.7386V5159.12H26.4602L21.4744 5167.03V5167.16H31.8125V5169.76H18.2358ZM26.5625 5173V5168.99L26.5966 5167.87V5155.55H29.5795V5173H26.5625Z" fill="white"/>
                        <circle cx="25" cy="26" r="24" fill="#48BF84"/>
                        <path d="M24.6295 35V20.48L21.3775 22.46V19.664L24.6295 17.72H27.1855V35H24.6295Z" fill="white"/>
                        <circle cx="24" cy="4046" r="24" fill="#48BF84"/>
                        <path d="M24.8153 4055.24C23.5881 4055.24 22.4972 4055.03 21.5426 4054.61C20.5938 4054.19 19.8438 4053.6 19.2926 4052.85C18.7415 4052.1 18.4489 4051.24 18.4148 4050.25H21.6193C21.6477 4050.72 21.804 4051.14 22.0881 4051.49C22.3722 4051.84 22.75 4052.11 23.2216 4052.3C23.6932 4052.49 24.2216 4052.59 24.8068 4052.59C25.4318 4052.59 25.9858 4052.48 26.4688 4052.26C26.9517 4052.04 27.3295 4051.74 27.6023 4051.34C27.875 4050.95 28.0085 4050.5 28.0028 4049.99C28.0085 4049.46 27.8722 4048.99 27.5938 4048.59C27.3153 4048.19 26.9119 4047.87 26.3835 4047.64C25.8608 4047.42 25.2301 4047.3 24.4915 4047.3H22.9489V4044.87H24.4915C25.0994 4044.87 25.6307 4044.76 26.0852 4044.55C26.5455 4044.34 26.9063 4044.05 27.1676 4043.66C27.429 4043.28 27.5568 4042.83 27.5511 4042.33C27.5568 4041.83 27.446 4041.4 27.2188 4041.04C26.9972 4040.67 26.6818 4040.38 26.2727 4040.18C25.8693 4039.97 25.3949 4039.87 24.8494 4039.87C24.3153 4039.87 23.821 4039.97 23.3665 4040.16C22.9119 4040.36 22.5455 4040.63 22.267 4040.99C21.9886 4041.34 21.8409 4041.76 21.8239 4042.25H18.7812C18.804 4041.27 19.0852 4040.41 19.625 4039.68C20.1705 4038.93 20.8977 4038.35 21.8068 4037.94C22.7159 4037.52 23.7358 4037.31 24.8665 4037.31C26.0313 4037.31 27.0426 4037.53 27.9006 4037.96C28.7642 4038.39 29.4318 4038.98 29.9034 4039.71C30.375 4040.44 30.6108 4041.25 30.6108 4042.14C30.6165 4043.12 30.3267 4043.95 29.7415 4044.61C29.1619 4045.28 28.4006 4045.71 27.4574 4045.91V4046.05C28.6847 4046.22 29.625 4046.68 30.2784 4047.41C30.9375 4048.15 31.2642 4049.06 31.2585 4050.15C31.2585 4051.13 30.9801 4052 30.4233 4052.78C29.8722 4053.54 29.1108 4054.14 28.1392 4054.58C27.1733 4055.02 26.0653 4055.24 24.8153 4055.24Z" fill="white"/>
                        <circle cx="25" cy="2032" r="24" fill="#48BF84"/>
                        <path d="M19.5511 2041V2038.72L25.6108 2032.78C26.1903 2032.19 26.6733 2031.67 27.0597 2031.22C27.446 2030.76 27.7358 2030.32 27.929 2029.89C28.1222 2029.47 28.2188 2029.01 28.2188 2028.53C28.2188 2027.98 28.0938 2027.51 27.8438 2027.12C27.5938 2026.72 27.25 2026.41 26.8125 2026.2C26.375 2025.98 25.8778 2025.87 25.321 2025.87C24.7472 2025.87 24.2443 2025.99 23.8125 2026.23C23.3807 2026.46 23.0455 2026.8 22.8068 2027.23C22.5739 2027.66 22.4574 2028.17 22.4574 2028.77H19.4489C19.4489 2027.66 19.7017 2026.7 20.2074 2025.88C20.7131 2025.06 21.4091 2024.43 22.2955 2023.98C23.1875 2023.53 24.2102 2023.31 25.3636 2023.31C26.5341 2023.31 27.5625 2023.53 28.4489 2023.96C29.3352 2024.4 30.0227 2025 30.5114 2025.76C31.0057 2026.52 31.2528 2027.39 31.2528 2028.37C31.2528 2029.02 31.1278 2029.66 30.8778 2030.3C30.6278 2030.93 30.1875 2031.62 29.5568 2032.39C28.9318 2033.16 28.054 2034.09 26.9233 2035.18L23.9148 2038.24V2038.36H31.517V2041H19.5511Z" fill="white"/>
                        </svg>

                    </div>

                    {/* Card 1 */}
                    {/* Title */}
                    <div className="flex flex-1 flex-col mt-1 px-8">
                        <div className="flex flex-row justify-between mb-10">
                            <h3 className="text-white font-semibold text-[32px] sm:text-[28px] capitalize">Upskilling</h3>
                            <div className="flex align-center justify-center rounded-full p-3 bg-secondary">
                                <svg className="self-center" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.5007 2.5V5.83333M7.50065 2.5V5.83333M3.33398 9.16667H16.6673M16.6673 9.16667V15.8333C16.6673 16.7538 15.9211 17.5 15.0007 17.5H5.00065C4.08018 17.5 3.33398 16.7538 3.33398 15.8333V5.83333C3.33398 4.91286 4.08018 4.16667 5.00065 4.16667H15.0007C15.9211 4.16667 16.6673 4.91286 16.6673 5.83333V9.16667Z" stroke="#48BF84" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <p className="font-thin text-primary text-[22px] sm:text-[18px] ml-2">WEEK 01-04</p>
                            </div>
                        </div>
                        {/* Multi-Card */}
                        <div className="bg-secondary rounded-2xl p-4">
                            <div className="flex flex-row gap-6">
                                <div className="flex flex-col basis-2/3 gap-4">
                                    <div className="rounded-2xl bg-tertiary p-6 basis-1/2 flex flex-row gap-4 justify-between">
                                        <h3 className="self-center text-center text-white font-semibold text-[28px] pt-3">Mentor 1-on-1 Calls</h3>
                                        <Image src="/mentor.svg" alt="mentor" width={400} height={400} />  
                                    </div>
                                    <div className="flex flex-row gap-4">
                                        <div className="flex flex-col gap-4 place-content-center bg-tertiary rounded-2xl p-6">
                                            <Image src="/job.svg" alt="job" width={400} height={400} /> 
                                            <h3 className="self-center text-center text-white font-semibold text-[28px] pt-3">Job Assistance</h3>
                                        </div>
                                        <div className="flex flex-col gap-4 place-content-center bg-tertiary rounded-2xl p-6">
                                            <Image src="/interview.svg" alt="interview" width={400} height={400} /> 
                                            <h3 className="self-center text-center text-white font-semibold text-[28px] pt-3">Interview Preparation</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col basis-1/3 bg-tertiary rounded-2xl p-6">
                                    <Image src="/live.svg" alt="live-projects" width={0} height={0} style={{ width: '100%', height: 'auto' }} />
                                    <h3 className="text-center text-white font-semibold text-[28px] pt-5">Live Projects</h3>
                                </div>
                            </div>
                        </div>

                        {/* Dropdowns */}
                        <div className="rounded-2xl border-secondary bg-secondary p-6 flex flex-col my-10">
                            <div className="flex flex-row justify-between">
                                <div className="flex flex-row gap-5">
                                    <Image src="/excel-card.svg" alt="excel" width={80} height={80} />
                                    <div className="flex flex-col gap-2 self-center">
                                        <p className="text-white font-normal text-[18px]">Microsoft Excel: Beginner to Advanced</p>
                                        <div className="flex flex-row gap-10 mt-1">
                                            <div className="flex flex-row gap-2">
                                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.38867 11.9995V10.5195C9.38867 8.6095 10.7387 7.8395 12.3887 8.7895L13.6687 9.5295L14.9487 10.2695C16.5987 11.2195 16.5987 12.7795 14.9487 13.7295L13.6687 14.4695L12.3887 15.2095C10.7387 16.1595 9.38867 15.3795 9.38867 13.4795V11.9995Z" stroke="#9FBFCC" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M12.2891 22C17.8119 22 22.2891 17.5228 22.2891 12C22.2891 6.47715 17.8119 2 12.2891 2C6.76621 2 2.28906 6.47715 2.28906 12C2.28906 17.5228 6.76621 22 12.2891 22Z" stroke="#9FBFCC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>

                                                <p className="text-footer font-thin text-[16px]">100 Video</p> 
                                            </div>
                                            <div className="flex flex-row gap-2">
                                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.2891 15C13.9459 15 15.2891 13.6569 15.2891 12C15.2891 10.3431 13.9459 9 12.2891 9C10.6322 9 9.28906 10.3431 9.28906 12C9.28906 13.6569 10.6322 15 12.2891 15Z" stroke="#9FBFCC" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M2.28906 12.8794V11.1194C2.28906 10.0794 3.13906 9.21945 4.18906 9.21945C5.99906 9.21945 6.73906 7.93945 5.82906 6.36945C5.30906 5.46945 5.61906 4.29945 6.52906 3.77945L8.25906 2.78945C9.04906 2.31945 10.0691 2.59945 10.5391 3.38945L10.6491 3.57945C11.5491 5.14945 13.0291 5.14945 13.9391 3.57945L14.0491 3.38945C14.5191 2.59945 15.5391 2.31945 16.3291 2.78945L18.0591 3.77945C18.9691 4.29945 19.2791 5.46945 18.7591 6.36945C17.8491 7.93945 18.5891 9.21945 20.3991 9.21945C21.4391 9.21945 22.2991 10.0694 22.2991 11.1194V12.8794C22.2991 13.9194 21.4491 14.7794 20.3991 14.7794C18.5891 14.7794 17.8491 16.0594 18.7591 17.6294C19.2791 18.5394 18.9691 19.6994 18.0591 20.2194L16.3291 21.2094C15.5391 21.6794 14.5191 21.3994 14.0491 20.6094L13.9391 20.4194C13.0391 18.8494 11.5591 18.8494 10.6491 20.4194L10.5391 20.6094C10.0691 21.3994 9.04906 21.6794 8.25906 21.2094L6.52906 20.2194C5.61906 19.6994 5.30906 18.5294 5.82906 17.6294C6.73906 16.0594 5.99906 14.7794 4.18906 14.7794C3.13906 14.7794 2.28906 13.9194 2.28906 12.8794Z" stroke="#9FBFCC" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>

                                                <p className="text-footer font-thin text-[16px]">3 Projects</p> 
                                            </div>
                                            <div className="flex flex-row gap-2">
                                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.2891 18.4297H13.2891L8.83905 21.3897C8.17905 21.8297 7.28906 21.3598 7.28906 20.5598V18.4297C4.28906 18.4297 2.28906 16.4297 2.28906 13.4297V7.42969C2.28906 4.42969 4.28906 2.42969 7.28906 2.42969H17.2891C20.2891 2.42969 22.2891 4.42969 22.2891 7.42969V13.4297C22.2891 16.4297 20.2891 18.4297 17.2891 18.4297Z" stroke="#9FBFCC" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M12.2889 11.3594V11.1494C12.2889 10.4694 12.7089 10.1094 13.1289 9.8194C13.5389 9.5394 13.9489 9.17941 13.9489 8.51941C13.9489 7.59941 13.2089 6.85938 12.2889 6.85938C11.3689 6.85938 10.6289 7.59941 10.6289 8.51941" stroke="#9FBFCC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M12.2846 13.75H12.2936" stroke="#9FBFCC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>

                                                <p className="text-footer font-thin text-[16px]">3 Assessments</p> 
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <button className="bg-trainity-dark rounded-full p-3 h-[52px] place-content-center flex align-center justify-center">
                                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.375 11.75L14 17.375L19.625 11.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>

                                </button>

                            </div>

                            <div className="flex flex-row justify-between mt-7">
                                <div className="flex flex-row gap-4">
                                    <div className="rounded-full bg-tertiary p-2 flex align-center self-end justify-center w-[120px] h-[50px]">
                                        <p className="text-primary font-normal text-[18px] self-center">Excel</p>
                                    </div>
                                    <div className="rounded-full bg-tertiary p-2 flex align-center self-end justify-center w-[150px] h-[50px]">
                                        <p className="text-primary font-normal text-[18px] self-center">Data Analysis</p>
                                    </div>
                                    <div className="rounded-full bg-tertiary p-2 flex align-center self-end justify-center w-[180px] h-[50px]">
                                        <p className="text-primary font-normal text-[18px] self-center">Data Manipulation</p>
                                    </div>
                                </div>
                                <div className="bg-tertiary py-3 px-3 w-[250px] flex flex-row gap-4 rounded-full">
                                    <Image src="/siddhart-round.svg" alt="siddharth" width={50} height={50} />
                                    <div className="flex flex-col self-center">
                                        <p className="text-white font-normal text-[16px]">Mentored By:</p>
                                        <p className="text-primary font-normal text-[14px]">Siddharth Rout</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-2xl border-secondary bg-secondary p-6 flex flex-col mb-10">
                            <div className="flex flex-row justify-between">
                                <div className="flex flex-row gap-5">
                                    <Image src="/sql-card.svg" alt="sql" width={80} height={80} />
                                    <div className="flex flex-col gap-2 self-center">
                                        <p className="text-white font-normal text-[18px]">SQL: Beginner to Advanced</p>
                                        <div className="flex flex-row gap-10 mt-1">
                                            <div className="flex flex-row gap-2">
                                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.38867 11.9995V10.5195C9.38867 8.6095 10.7387 7.8395 12.3887 8.7895L13.6687 9.5295L14.9487 10.2695C16.5987 11.2195 16.5987 12.7795 14.9487 13.7295L13.6687 14.4695L12.3887 15.2095C10.7387 16.1595 9.38867 15.3795 9.38867 13.4795V11.9995Z" stroke="#9FBFCC" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M12.2891 22C17.8119 22 22.2891 17.5228 22.2891 12C22.2891 6.47715 17.8119 2 12.2891 2C6.76621 2 2.28906 6.47715 2.28906 12C2.28906 17.5228 6.76621 22 12.2891 22Z" stroke="#9FBFCC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>

                                                <p className="text-footer font-thin text-[16px]">100 Video</p> 
                                            </div>
                                            <div className="flex flex-row gap-2">
                                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.2891 15C13.9459 15 15.2891 13.6569 15.2891 12C15.2891 10.3431 13.9459 9 12.2891 9C10.6322 9 9.28906 10.3431 9.28906 12C9.28906 13.6569 10.6322 15 12.2891 15Z" stroke="#9FBFCC" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M2.28906 12.8794V11.1194C2.28906 10.0794 3.13906 9.21945 4.18906 9.21945C5.99906 9.21945 6.73906 7.93945 5.82906 6.36945C5.30906 5.46945 5.61906 4.29945 6.52906 3.77945L8.25906 2.78945C9.04906 2.31945 10.0691 2.59945 10.5391 3.38945L10.6491 3.57945C11.5491 5.14945 13.0291 5.14945 13.9391 3.57945L14.0491 3.38945C14.5191 2.59945 15.5391 2.31945 16.3291 2.78945L18.0591 3.77945C18.9691 4.29945 19.2791 5.46945 18.7591 6.36945C17.8491 7.93945 18.5891 9.21945 20.3991 9.21945C21.4391 9.21945 22.2991 10.0694 22.2991 11.1194V12.8794C22.2991 13.9194 21.4491 14.7794 20.3991 14.7794C18.5891 14.7794 17.8491 16.0594 18.7591 17.6294C19.2791 18.5394 18.9691 19.6994 18.0591 20.2194L16.3291 21.2094C15.5391 21.6794 14.5191 21.3994 14.0491 20.6094L13.9391 20.4194C13.0391 18.8494 11.5591 18.8494 10.6491 20.4194L10.5391 20.6094C10.0691 21.3994 9.04906 21.6794 8.25906 21.2094L6.52906 20.2194C5.61906 19.6994 5.30906 18.5294 5.82906 17.6294C6.73906 16.0594 5.99906 14.7794 4.18906 14.7794C3.13906 14.7794 2.28906 13.9194 2.28906 12.8794Z" stroke="#9FBFCC" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>

                                                <p className="text-footer font-thin text-[16px]">3 Projects</p> 
                                            </div>
                                            <div className="flex flex-row gap-2">
                                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.2891 18.4297H13.2891L8.83905 21.3897C8.17905 21.8297 7.28906 21.3598 7.28906 20.5598V18.4297C4.28906 18.4297 2.28906 16.4297 2.28906 13.4297V7.42969C2.28906 4.42969 4.28906 2.42969 7.28906 2.42969H17.2891C20.2891 2.42969 22.2891 4.42969 22.2891 7.42969V13.4297C22.2891 16.4297 20.2891 18.4297 17.2891 18.4297Z" stroke="#9FBFCC" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M12.2889 11.3594V11.1494C12.2889 10.4694 12.7089 10.1094 13.1289 9.8194C13.5389 9.5394 13.9489 9.17941 13.9489 8.51941C13.9489 7.59941 13.2089 6.85938 12.2889 6.85938C11.3689 6.85938 10.6289 7.59941 10.6289 8.51941" stroke="#9FBFCC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M12.2846 13.75H12.2936" stroke="#9FBFCC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>

                                                <p className="text-footer font-thin text-[16px]">3 Assessments</p> 
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <button className="bg-trainity-dark rounded-full p-3 h-[52px] place-content-center flex align-center justify-center">
                                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.375 11.75L14 17.375L19.625 11.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>

                                </button>

                            </div>

                            <div className="flex flex-row justify-between mt-7">
                                <div className="flex flex-row gap-4">
                                    <div className="rounded-full bg-tertiary p-2 flex align-center self-end justify-center w-[120px] h-[50px]">
                                        <p className="text-primary font-normal text-[18px] self-center">SQL</p>
                                    </div>
                                    <div className="rounded-full bg-tertiary p-2 flex align-center self-end justify-center w-[150px] h-[50px]">
                                        <p className="text-primary font-normal text-[18px] self-center">Postgres</p>
                                    </div>
                                    <div className="rounded-full bg-tertiary p-2 flex align-center self-end justify-center w-[260px] h-[50px]">
                                        <p className="text-primary font-normal text-[18px] self-center">Exploratory Manipulation</p>
                                    </div>
                                </div>
                                <div className="bg-tertiary py-3 px-3 w-[250px] flex flex-row gap-4 rounded-full">
                                    <Image src="/huzefa-round.svg" alt="huzefa" width={50} height={50} />
                                    <div className="flex flex-col self-center">
                                        <p className="text-white font-normal text-[16px]">Mentored By:</p>
                                        <p className="text-primary font-normal text-[14px]">Huzefa Lohawala</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-2xl border-secondary bg-secondary p-6 flex flex-col">
                            <div className="flex flex-row justify-between">
                                <div className="flex flex-row gap-5">
                                    <Image src="/excel-card.svg" alt="excel" width={80} height={80} />
                                    <div className="flex flex-col gap-2 self-center">
                                        <p className="text-white font-normal text-[18px]">Microsoft Excel: Beginner to Advanced</p>
                                        <div className="flex flex-row gap-10 mt-1">
                                            <div className="flex flex-row gap-2">
                                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.38867 11.9995V10.5195C9.38867 8.6095 10.7387 7.8395 12.3887 8.7895L13.6687 9.5295L14.9487 10.2695C16.5987 11.2195 16.5987 12.7795 14.9487 13.7295L13.6687 14.4695L12.3887 15.2095C10.7387 16.1595 9.38867 15.3795 9.38867 13.4795V11.9995Z" stroke="#9FBFCC" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M12.2891 22C17.8119 22 22.2891 17.5228 22.2891 12C22.2891 6.47715 17.8119 2 12.2891 2C6.76621 2 2.28906 6.47715 2.28906 12C2.28906 17.5228 6.76621 22 12.2891 22Z" stroke="#9FBFCC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>

                                                <p className="text-footer font-thin text-[16px]">100 Video</p> 
                                            </div>
                                            <div className="flex flex-row gap-2">
                                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.2891 15C13.9459 15 15.2891 13.6569 15.2891 12C15.2891 10.3431 13.9459 9 12.2891 9C10.6322 9 9.28906 10.3431 9.28906 12C9.28906 13.6569 10.6322 15 12.2891 15Z" stroke="#9FBFCC" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M2.28906 12.8794V11.1194C2.28906 10.0794 3.13906 9.21945 4.18906 9.21945C5.99906 9.21945 6.73906 7.93945 5.82906 6.36945C5.30906 5.46945 5.61906 4.29945 6.52906 3.77945L8.25906 2.78945C9.04906 2.31945 10.0691 2.59945 10.5391 3.38945L10.6491 3.57945C11.5491 5.14945 13.0291 5.14945 13.9391 3.57945L14.0491 3.38945C14.5191 2.59945 15.5391 2.31945 16.3291 2.78945L18.0591 3.77945C18.9691 4.29945 19.2791 5.46945 18.7591 6.36945C17.8491 7.93945 18.5891 9.21945 20.3991 9.21945C21.4391 9.21945 22.2991 10.0694 22.2991 11.1194V12.8794C22.2991 13.9194 21.4491 14.7794 20.3991 14.7794C18.5891 14.7794 17.8491 16.0594 18.7591 17.6294C19.2791 18.5394 18.9691 19.6994 18.0591 20.2194L16.3291 21.2094C15.5391 21.6794 14.5191 21.3994 14.0491 20.6094L13.9391 20.4194C13.0391 18.8494 11.5591 18.8494 10.6491 20.4194L10.5391 20.6094C10.0691 21.3994 9.04906 21.6794 8.25906 21.2094L6.52906 20.2194C5.61906 19.6994 5.30906 18.5294 5.82906 17.6294C6.73906 16.0594 5.99906 14.7794 4.18906 14.7794C3.13906 14.7794 2.28906 13.9194 2.28906 12.8794Z" stroke="#9FBFCC" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>

                                                <p className="text-footer font-thin text-[16px]">3 Projects</p> 
                                            </div>
                                            <div className="flex flex-row gap-2">
                                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.2891 18.4297H13.2891L8.83905 21.3897C8.17905 21.8297 7.28906 21.3598 7.28906 20.5598V18.4297C4.28906 18.4297 2.28906 16.4297 2.28906 13.4297V7.42969C2.28906 4.42969 4.28906 2.42969 7.28906 2.42969H17.2891C20.2891 2.42969 22.2891 4.42969 22.2891 7.42969V13.4297C22.2891 16.4297 20.2891 18.4297 17.2891 18.4297Z" stroke="#9FBFCC" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M12.2889 11.3594V11.1494C12.2889 10.4694 12.7089 10.1094 13.1289 9.8194C13.5389 9.5394 13.9489 9.17941 13.9489 8.51941C13.9489 7.59941 13.2089 6.85938 12.2889 6.85938C11.3689 6.85938 10.6289 7.59941 10.6289 8.51941" stroke="#9FBFCC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M12.2846 13.75H12.2936" stroke="#9FBFCC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>

                                                <p className="text-footer font-thin text-[16px]">3 Assessments</p> 
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <button className="bg-trainity-dark rounded-full p-3 h-[52px] place-content-center flex align-center justify-center">
                                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.375 11.75L14 17.375L19.625 11.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>

                                </button>

                            </div>

                            <div className="flex flex-row justify-between mt-7">
                                <div className="flex flex-row gap-4">
                                    <div className="rounded-full bg-tertiary p-2 flex align-center self-end justify-center w-[120px] h-[50px]">
                                        <p className="text-primary font-normal text-[18px] self-center">SWOT</p>
                                    </div>
                                    <div className="rounded-full bg-tertiary p-2 flex align-center self-end justify-center w-[150px] h-[50px]">
                                        <p className="text-primary font-normal text-[18px] self-center">BCG Matrix</p>
                                    </div>
                                    <div className="rounded-full bg-tertiary p-2 flex align-center self-end justify-center w-[180px] h-[50px]">
                                        <p className="text-primary font-normal text-[18px] self-center">McKinsey 7S</p>
                                    </div>
                                </div>
                                <div className="bg-tertiary py-3 px-3 w-[250px] flex flex-row gap-4 rounded-full">
                                    <Image src="/raghu-round.svg" alt="raghu" width={50} height={50} />
                                    <div className="flex flex-col self-center">
                                        <p className="text-white font-normal text-[16px]">Mentored By:</p>
                                        <p className="text-primary font-normal text-[14px]">Raghu Raman A V</p>

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Marketing Card */}
                        <div className="rounded-2xl border-secondary bg-secondary p-6 relative overflow-hidden w-100 h-[350px] mt-8">
                            <div className="rounded-2xl nano-card py-3 px-6 absolute top-10 left-10">
                                <p className="text-white font-semibold text-[18px]">
                                    Nano-Degree
                                </p>
                            </div>
                            <div className="title absolute top-28 left-10">
                                <h1 className="text-white font-semibold text-[40px]">Marketing Analytics</h1>
                            </div>
                            <div className="title absolute top-48 left-10 w-[65%]">
                                <p className="text-footer font-semibold text-[20px]">Learn to collect and analyze data, model marketing scenarios, and communicate your findings with Excel,
                                Tableau, Google Analytics, and Data Studios.</p>
                            </div>
                                <div className="rounded-full p-1 bg-tertiary absolute top-20 right-40">
                                    <Image src="/mic.svg" alt="mic" width={60} height={60} />
                                </div>
                                <div className="rounded-full p-2 bg-tertiary absolute top-12 right-20">
                                    <Image src="/setting.svg" alt="setting" width={50} height={50} />
                                </div>
                                <div className="rounded-full p-2 bg-tertiary absolute top-16 -right-4">
                                    <Image src="/chats.svg" alt="chats" width={50} height={50} />
                                </div>                    
                                <div className="rounded-full p-2 bg-tertiary absolute -top-4 -right-4">
                                    <Image src="/rocket2.svg" alt="rocket2" width={50} height={50} className="self-center" />
                                </div>                    
                                <div className="rounded-full p-2 bg-tertiary absolute -top-7 right-28">
                                    <Image src="/web.svg" alt="web" width={50} height={50} />
                                </div>                    
                                <div className="rounded-full p-2 bg-tertiary absolute -top-5 right-52">
                                    <Image src="/at.svg" alt="at" width={50} height={50} />
                                </div>                    
                        </div>

                        {/* Card 2 */}
                        {/* Title 2 */}
                        <div className="flex flex-col gap-4 mb-8">
                            <div className="flex flex-row justify-between mt-20 mb-3">
                                    <h3 className="text-white font-semibold text-[32px] sm:text-[28px] capitalize">Work on <span className="text-primary">real data-sets</span>  with real teams</h3>
                                    <div className="flex align-center justify-center rounded-full p-3 bg-secondary">
                                    <svg className="self-center" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.5007 2.5V5.83333M7.50065 2.5V5.83333M3.33398 9.16667H16.6673M16.6673 9.16667V15.8333C16.6673 16.7538 15.9211 17.5 15.0007 17.5H5.00065C4.08018 17.5 3.33398 16.7538 3.33398 15.8333V5.83333C3.33398 4.91286 4.08018 4.16667 5.00065 4.16667H15.0007C15.9211 4.16667 16.6673 4.91286 16.6673 5.83333V9.16667Z" stroke="#48BF84" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <p className="font-thin text-primary text-[22px] sm:text-[18px] ml-2">WEEK 01-04</p>
                                    </div>
                            </div>
                            <p className="text-footer font-thin text-[20px] w-[70%]">We train students similar to how top tech companies train their employees within the actual work environment, so you’ll be project-ready when the time comes.</p>
                        </div>

                        <div className="flex flex-row justify-between">
                            <div className="flex basis-1/2">
                                <Image src="/build-product.svg" alt="build" width={450} height={450} className="self-center" />
                            </div>
                            <div className="flex basis-1/2">
                                <div className="flex flex-col gap-4 self-center">
                                    <div className="rounded-2xl bg-secondary border-secondary p-6 flex-col gap-2 justify-start">
                                        <h3 className="text-white font-normal text-[22px]">Build Real Products</h3>
                                        <p className="text-footer font-thin text-[14px]">Get instructions from your supervisor and build along your team</p>
                                    </div>
                                    <div className="rounded-2xl bg-secondary border-secondary p-6 flex-col gap-2 justify-start">
                                        <h3 className="text-white font-normal text-[22px]">Work in a Team</h3>
                                        <p className="text-footer font-thin text-[14px]">Daily Slack standups and weekly meetings with your teammates and mentor</p>
                                    </div>
                                    <div className="rounded-2xl bg-secondary border-secondary p-6 flex-col gap-2 justify-start">
                                        <h3 className="text-white font-normal text-[22px]">Get 1:1 Mentorship</h3>
                                        <p className="text-footer font-thin text-[14px]">Receive 1:1 mentor calls & detailed project feedback by industry professionals</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 mt-10 mb-8 text-center">
                            <div className="mb-6">
                                <h3 className="text-white font-semibold text-[32px] sm:text-[28px] capitalize">During <span className="text-primary">live project</span>  you will</h3>
                            </div>
                            <div className="flex flex-row justify-between gap-6">
                                <Image src="/Strategy.svg" alt="product" width={300} height={300} />
                                <Image src="/PRD.svg" alt="prd" width={270} height={270} />
                                <div className="flex flex-col gap-4">
                                    <Image src="/Design-Thinking.svg" alt="design" width={210} height={210}/>
                                    <Image src="/Teams.svg" alt="teams" width={210} height={210} />
                                </div>
                                <Image src="/UI.svg" alt="ui" width={260} height={260} />
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 mt-14 mb-8 text-center">
                            <div className="mb-6">
                                <h3 className="text-white font-semibold text-[32px] sm:text-[28px] capitalize">Your  <span className="text-primary">daily schedule</span> during live projects</h3>
                            </div>

                            {/* Toggle */}
                            <Switch
                            checked={enabled}
                            onChange={setEnabled}
                            className={classNames(
                                enabled ? 'bg-secondary' : 'bg-secondary',
                                'relative inline-flex h-auto w-[300px] flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-300 ease-in-out focus:outline-none focus:border-transparent self-center mb-10'
                            )}
                            >
                            <p className="absolute top-[10px] left-8 text-white font-normal text-[20px]">Beginner</p>
                            <p className="absolute top-[10px] left-44 text-white font-normal text-[20px]">Advanced</p>
                            <span className="sr-only">Use setting</span>
                            <span
                                className={classNames(
                                enabled ? 'translate-x-full' : 'translate-x-0',
                                'pointer-events-none relative inline-block h-[50px] w-[50%] transform rounded-full bg-primary shadow ring-0 transition duration-300 ease-in-out'
                                )}
                            >
                                <span
                                className={classNames(
                                    enabled ? 'opacity-0 duration-100 ease-out' : 'opacity-100 duration-300 ease-in',
                                    'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
                                )}
                                aria-hidden="true"
                                >
                                    <p className="text-white font-normal text-[20px]">Beginner</p>
                                </span>
                                <span
                                className={classNames(
                                    enabled ? 'opacity-100 duration-300 ease-in' : 'opacity-0 duration-100 ease-out',
                                    'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
                                )}
                                aria-hidden="true"
                                >
                                <p className="text-white font-normal text-[20px]">Advanced</p>
                                </span>
                            </span>
                            </Switch>

                            <div className="grid grid-rows-2 grid-cols-3 gap-4 text-left">
                                <div className="flex flex-col gap-4 bg-secondary rounded-2xl p-6">
                                    <h3 className="text-white font-normal text-[22px]">Morning Standup</h3>
                                    <p className="text-footer font-thin text-[18px]">
                                    Daily standup with your peers to review day’s milestone
                                    </p>
                                    <div className="rounded-full w-[160px] p-4 bg-tertiary mt-4">
                                        <p style={{color:'#B99B4D'}}>9:00AM - 9:30AM </p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4 bg-secondary rounded-2xl p-6">
                                    <h3 className="text-white font-normal text-[22px]">Guided Project</h3>
                                    <p className="text-footer font-thin text-[18px]">
                                    Build a project by following instructor’s guide
                                    </p>
                                    <div className="rounded-full w-[160px] p-4 bg-tertiary mt-4">
                                        <p style={{color:'#64A5CA'}}>9:30AM - 1:00PM  </p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4 bg-secondary rounded-2xl p-6">
                                    <h3 className="text-white font-normal text-[22px]">Lunch Break</h3>
                                    <p className="text-footer font-thin text-[18px]">
                                    Midday lunch break for having food and rest etc.,
                                    </p>
                                    <div className="rounded-full w-[160px] p-4 bg-tertiary mt-4">
                                        <p style={{color:'#64AF71'}}>1:00PM - 2:30PM  </p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4 bg-secondary rounded-2xl p-6">
                                    <h3 className="text-white font-normal text-[22px]">Team Meeting</h3>
                                    <p className="text-footer font-thin text-[18px]">
                                    Meeting with your assigned team to get technical support
                                    </p>
                                    <div className="rounded-full w-[160px] p-4 bg-tertiary mt-4">
                                        <p style={{color:'#C17CF4'}}>2:30PM - 3:00PM  </p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4 bg-secondary rounded-2xl p-6">
                                    <h3 className="text-white font-normal text-[22px]">Guided Project</h3>
                                    <p className="text-footer font-thin text-[18px]">
                                    Build a project by following instructor’s guide
                                    </p>
                                    <div className="rounded-full w-[160px] p-4 bg-tertiary mt-4">
                                        <p style={{color:'#B99B4D'}}>3:00PM - 5:00PM  </p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4 bg-secondary rounded-2xl p-6">
                                    <h3 className="text-white font-normal text-[22px]">Evening Stand-Up</h3>
                                    <p className="text-footer font-thin text-[18px]">
                                    Meet your project lead to recap the day&apos;s progress.
                                    </p>
                                    <div className="rounded-full w-[160px] p-4 bg-tertiary mt-4">
                                        <p style={{color:'#64A5CA'}}>5:00PM - 5:30PM  </p>
                                    </div>
                                </div>
                            </div>


                        </div>  

                        {/* Card 3 */}
                        {/* Title */}

                        <div className="flex flex-row justify-between mt-20 mb-10">
                            <h3 className="text-white font-semibold text-[32px] sm:text-[28px] capitalize">Dedicated Data Analytics leaders as <span className="text-primary">your career coaches</span></h3>
                            <div className="flex align-center justify-center rounded-full p-3 bg-secondary">
                                <svg className="self-center" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.5007 2.5V5.83333M7.50065 2.5V5.83333M3.33398 9.16667H16.6673M16.6673 9.16667V15.8333C16.6673 16.7538 15.9211 17.5 15.0007 17.5H5.00065C4.08018 17.5 3.33398 16.7538 3.33398 15.8333V5.83333C3.33398 4.91286 4.08018 4.16667 5.00065 4.16667H15.0007C15.9211 4.16667 16.6673 4.91286 16.6673 5.83333V9.16667Z" stroke="#48BF84" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <p className="font-thin text-primary text-[22px] sm:text-[18px] ml-2">WEEK 01-04</p>
                            </div>
                        </div>

                        <div className="flex flex-row justify-between gap-6">
                            <div className="rounded-2xl p-12 w-[350px] bg-secondary flex flex-col gap-4">
                                <Image src="/mentor-1.svg" alt="siddharth" width={150} height={150} className="self-center" />
                                <h3 className="self-center text-white font-normal text-[22px]">Siddharth Rout</h3>
                                <p className="self-center text-footer font-thin text-[18px]">Senior Data Engineer</p>
                                <Image src="/microsoft-card.svg" alt="Microsoft" width={150} height={150} className="self-center" />
                            </div>
                            <div className="rounded-2xl p-12 w-[350px] bg-secondary flex flex-col gap-4">
                                <Image src="/mentor-2.svg" alt="Huzefa" width={150} height={150} className="self-center" />
                                <h3 className="self-center text-white font-normal text-[22px]">Huzefa Lohawala</h3>
                                <p className="self-center text-footer font-thin text-[18px]">Senior Data Engineer</p>
                                <Image src="/paypal-card.svg" alt="paypal" width={150} height={150} className="self-center" />
                            </div>
                            <div className="rounded-2xl p-12 w-[350px] bg-secondary flex flex-col gap-4">
                                <Image src="/mentor-3.svg" alt="Raghu" width={150} height={150} className="self-center" />
                                <h3 className="self-center text-white font-normal text-[22px]">Raghu Raman V</h3>
                                <p className="self-center text-footer font-thin text-[18px]">Senior Data Engineer</p>
                                <Image src="/dell-card.svg" alt="Dell" width={150} height={150} className="self-center" />
                            </div>
                        </div>

                        <div className="flex flex-row justify-between gap-8-align-center mt-20">
                            <div className="flex flex-col self-center gap-8 basis-1/2">
                                <h1 className="text-white font-semi-bold text-[36px] capitalize mb-6">Create a <span className="text-primary">step-by-step</span> plan that works. For you.</h1>

                                <div className="flex flex-row gap-4">
                                    <div className="rounded-full bg-tertiary p-4 w-[50px] h-[50px] flex align-center justify-center">
                                        <svg width="18" height="18" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.5001 1.5L6.00006 12L1.5 7.5" stroke="#48BF84" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </div>
                                    <p className="self-center text-white font-normal text-[18px]">Plan based on your current preparation level, goals and timeline</p>
                                </div>
                                <div className="flex flex-row gap-4">
                                    <div className="rounded-full bg-tertiary p-4 flex w-[50px] h-[50px] align-center justify-center">
                                        <svg width="18" height="18" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.5001 1.5L6.00006 12L1.5 7.5" stroke="#48BF84" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </div>
                                    <p className="self-center text-white font-normal text-[18px]">With clear actionable tasks & references to top resources.</p>
                                </div>
                            </div>

                            <div className="flex flex-col align-center justify-center">
                                <Image src="/group1.svg" alt="blank" width={500} height={100} />
                                <div className="vertical-dashed self-center"></div>
                                <Image src="/group1.svg" alt="blank" width={500} height={100} />
                                <div className="vertical-dashed self-center"></div>
                                <Image src="/group1.svg" alt="blank" width={500} height={100} />
                            </div>
                        </div>

                        {/* Card 4 */}
                        {/* Title */}

                        <div className="flex flex-row justify-between mt-20 mb-10">
                            <h3 className="text-white font-semibold text-[32px] sm:text-[28px] capitalize"><span className="text-primary">Placement Drive</span></h3>
                            <div className="flex align-center justify-center rounded-full p-3 bg-secondary">
                                <svg className="self-center" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.5007 2.5V5.83333M7.50065 2.5V5.83333M3.33398 9.16667H16.6673M16.6673 9.16667V15.8333C16.6673 16.7538 15.9211 17.5 15.0007 17.5H5.00065C4.08018 17.5 3.33398 16.7538 3.33398 15.8333V5.83333C3.33398 4.91286 4.08018 4.16667 5.00065 4.16667H15.0007C15.9211 4.16667 16.6673 4.91286 16.6673 5.83333V9.16667Z" stroke="#48BF84" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <p className="font-thin text-primary text-[22px] sm:text-[18px] ml-2">WEEK 01-04</p>
                            </div>
                        </div>

                        <div className="flex flex-row gap-5">
                            <div className="flex flex-col gap-5">
                                <Image src="/rectangle-1.svg" alt="rectangle-1" width={0} height={0} style={{width: '100%', height:'auto'}}/>
                                <Image src="/rectangle-2.svg" alt="rectangle-2" width={0} height={0} style={{width: '100%', height:'auto'}}/>
                            </div>
                            <div className="flex rounded-2xl">
                                <Image src="/rectangle-3.svg" alt="rectangle-3" width={0} height={0} style={{width: '100%', height:'auto'}} />
                            </div>
                        </div>


                    </div>
                </div>
            </div>

            {/* Mobile Section */}
            <div className="md:hidden lg:hidden block py-24 px-6">
                <div className="flex flex-col align-center justify-center place-content-center">
                    <div className="flex flex-col align-center justify-center self-center mb-6">
                        <h3 className="text-white text-center font-normal text-[24px] capitalize">
                        your Learning Journey
                        </h3>
                        <p className="text-footer font-normal text-[14px] text-center">
                        Here&apos;s a program journey map of your learning
                        </p>
                    </div>
                    <div className="flex flex-row gap-3 mb-10">
                        <div className="flex align-center basis-1/8 justify-center py-2 px-4 rounded-full bg-primary">
                            <p className="text-[12px] text-white">1</p>
                        </div>
                        <div className="flex self-center basis-1/4 flex-col">
                            <h3 className="text-white font-normal text-[18px] ">Upskilling</h3>
                            <Image src="/underline-green.svg" alt="underline-green" width={80} height={20} />
                        </div>
                        <div className="hl self-center basis-1/4"></div>
                        <p className="text-primary text-[14px] self-center">Week 01 - 04</p>
                    </div>
                    <div className="flex flex-col gap-3 mb-10">
                        <div className="flex flex-row gap-2">
                            <h3 className="text-primary font-semibold text-[22px]">1.1</h3>
                            <h3 className="text-white font-semibold text-[22px]">Curriculum</h3>
                        </div>
                        <Fragment>
                            <Accordion className="border-secondary bg-secondary rounded-2xl" open={open === 1} icon={<Icon id={1} open={open} />}>
                                <AccordionHeader className="px-4 border-b-0" onClick={() => handleOpen(1)}>
                                <div className="flex flex-row gap-3">
                                    <Image src="/excel-mob.svg" alt="excel" width={40} height={40} />
                                    <div className="flex flex-col gap-2">
                                        <p className="text-primary font-semibold uppercase tracking-wider text-[12px]">Module 1</p>
                                        <p className="text-white font-semibold text-[18px]">Microsoft Excel</p>
                                    </div>
                                </div>
                                </AccordionHeader>
                                <AccordionBody className="p-3 bg-tertiary text-white rounded-b-2xl">
                                We&apos;re not always in the position that we want to be at.
                                We&apos;re constantly growing. We&apos;re constantly making mistakes.
                                We&apos;re constantly trying to express ourselves and actualize our
                                dreams.
                                </AccordionBody>
                            </Accordion>
                            <Accordion className="border-secondary bg-secondary rounded-2xl" open={open === 2} icon={<Icon id={2} open={open} />}>
                                <AccordionHeader className="px-4 border-b-0" onClick={() => handleOpen(2)}>
                                <div className="flex flex-row gap-3">
                                    <Image src="/sql-mob.svg" alt="excel" width={40} height={40} />
                                    <div className="flex flex-col gap-2">
                                        <p className="text-primary font-semibold uppercase tracking-wider text-[12px]">Module 2</p>
                                        <p className="text-white font-semibold text-[18px]">SQL</p>
                                    </div>
                                </div>
                                </AccordionHeader>
                                <AccordionBody className="p-3 bg-tertiary text-white rounded-b-2xl">
                                We&apos;re not always in the position that we want to be at.
                                We&apos;re constantly growing. We&apos;re constantly making mistakes.
                                We&apos;re constantly trying to express ourselves and actualize our
                                dreams.
                                </AccordionBody>
                            </Accordion>
                            <Accordion className="border-secondary bg-secondary rounded-2xl" open={open === 3} icon={<Icon id={3} open={open} />}>
                                <AccordionHeader className="px-4 border-b-0" onClick={() => handleOpen(3)}>
                                <div className="flex flex-row gap-3">
                                    <Image src="/search-mob.svg" alt="excel" width={40} height={40} />
                                    <div className="flex flex-col gap-2">
                                        <p className="text-primary font-semibold uppercase tracking-wider text-[12px]">Module 3</p>
                                        <p className="text-white font-semibold text-[18px]">Structured Problem...</p>
                                    </div>
                                </div>
                                </AccordionHeader>
                                <AccordionBody className="p-3 bg-tertiary text-white rounded-b-2xl">
                                We&apos;re not always in the position that we want to be at.
                                We&apos;re constantly growing. We&apos;re constantly making mistakes.
                                We&apos;re constantly trying to express ourselves and actualize our
                                dreams.
                                </AccordionBody>
                            </Accordion>
                        </Fragment>
                    </div>

                    {/* 1.2 */}
                    <div className="flex flex-col gap-3 relative mb-10">
                        <div className="flex flex-row gap-2">
                            <h3 className="text-primary font-semibold text-[22px]">1.2</h3>
                            <h3 className="text-white font-semibold text-[22px]">Live Projects</h3>
                        </div>

                        <div className="flex flex-row gap-6 overflow-y-auto">
                                    <Image src="/BANK.svg" alt="bank" width={0} height={0} style={{width:'100%', height: 'auto'}} className="cursor-pointer" />
                                    <Image src="/INSTA.svg" alt="insta" width={0} height={0} style={{width:'100%', height: 'auto'}} className="cursor-pointer" />
                        </div>

                        
                    </div>

                    {/* 1.3 */}
                    <div className="flex flex-col gap-3 relative mb-10">
                        <div className="flex flex-row gap-2">
                            <h3 className="text-primary font-semibold text-[22px]">1.3</h3>
                            <h3 className="text-white font-semibold text-[22px]">Specialization</h3>
                        </div>

                        <div className="flex flex-col relative overflow-hidden rounded-2xl bg-secondary w-[90vw] h-[50vh] text-center gap-4 px-8 ">

                            {/* Icons */}
                            <div className="flex opacity-40">
                                <div className="bg-tertiary absolute rounded-full p-3 -top-1 left-2">
                                    <Image src="/at.svg" alt="at" width={50} height={50} />
                                </div>
                                <div className="bg-tertiary absolute rounded-full p-3 -top-3 left-28">
                                    <Image src="/web.svg" alt="web" width={35} height={35} />
                                </div>
                                <div className="bg-tertiary absolute rounded-full p-3 top-16 left-36">
                                    <Image src="/rupee.svg" alt="rupee" width={35} height={35} />
                                </div>
                                <div className="bg-tertiary absolute rounded-full p-3 top-4 left-48">
                                    <Image src="/mic.svg" alt="mic" width={35} height={35} />
                                </div>
                                <div className="bg-tertiary absolute rounded-full p-3 top-20 right-8">
                                    <Image src="/chat-blue.svg" alt="chat-blue" width={35} height={35} />
                                </div>
                                <div className="bg-tertiary absolute rounded-full p-3 top-2 -right-4">
                                    <Image src="/rocket.svg" alt="rocket" width={35} height={35} />
                                </div>
                            </div>

                            <div className="mt-40 place-content-center rounded-lg px-4 py-2 bg-nano w-[150px] self-center">
                                <p className="text-white font-semibold text-[10px] uppercase tracking-widest self-center">
                                    Nano-Degree
                                </p>   
                            </div>
                            <h3 className="text-white font-semibold text-[24px]">Marketing Analytics</h3>
                            <p className="text-footer font-thin text-[16px] w-[80%] self-center">
                                Master data collection, analysis, modeling, and communication with Excel, Tableau, Google Analytics, and Data Studios.
                            </p>

                        </div>

                        
                    </div>

                    
                    
                    {/* 2 */}
                        
                    <div className="flex flex-row gap-3 mb-10">
                        <div className="flex align-center basis-1/8 justify-center py-2 px-3.5 rounded-full bg-primary">
                            <p className="text-[12px] text-white self-center">2</p>
                        </div>
                        <div className="flex self-center basis-1/4 flex-col">
                            <h3 className="text-white font-normal text-[18px] ">Experience</h3>
                            <Image src="/underline-green.svg" alt="underline-green" width={80} height={20} />
                        </div>
                        <div className="hl self-center basis-1/4"></div>
                        <p className="text-primary text-[14px] self-center">Week 05 - 08</p>
                    </div>
                    <div className="mt-8 flex flex-col self-center text-center gap-4">
                            <p className="text-primary text-[20px] font-normal">2.1</p>
                            <h3 className="text-white font-normal text-[24px]">Collaborate with Real teams & analyze real data sets.</h3>
                    </div>

                    <Tabs value="peace" className="max-w-[40rem] mt-6">
                        <TabsBody>
                            {data.map(({ value, desc }) => (
                            <TabPanel key={value} value={value}>
                                <Image src={desc} alt={value} width={0} height={0} style={{width: '100%', height: 'auto'}}/>
                            </TabPanel>
                            ))}
                        </TabsBody>
                        <TabsHeader
                            className="bg-transparent"
                            indicatorProps={{
                            className: "bg-blue-500/10 shadow-none text-blue-500 rounded-full",
                            }}
                        >
                            {data.map(({ label, value }) => (
                            <Tab key={value} value={value} className="tab">
                                <Image className="" src={label} alt={value} width={25} height={25} />
                            </Tab>
                            ))}
                        </TabsHeader>
                        <TabsBody>
                            {data.map(({ value, desc1, feature1 }) => (
                            <TabPanel key={value} value={value}>
                                <div className="flex flex-col gap-2 align-center-justify-center self-center text-center">
                                    <p className="text-white font-semibold text-[18px]">{feature1}</p>
                                    <p className="text-white font-normal text-[16px]">{desc1}</p>
                                </div>
                            </TabPanel>
                            ))}
                        </TabsBody>
                        
                    </Tabs>

                    <div className="mt-8 flex flex-col self-center text-center gap-4">
                            <p className="text-primary text-[20px] font-normal">2.2</p>
                            <h3 className="text-white capitalize font-normal text-[24px]">During live project you will</h3>
                    </div>

                    <div className="flex flex-row gap-4 mt-6 mb-8">
                        <div className="flex flex-col gap-4 basis-1/2">
                            <Image src="/product-strategy.svg" alt="strategy" width={0} height={0} style={{width: '100%', height: 'auto'}}/>
                            <Image src="/si.svg" alt="si" width={0} height={0} style={{width: '100%', height: 'auto'}}/>
                        </div>
                        <div className="flex flex-col gap-4 basis-1/2">
                            <Image src="/ud-think.svg" alt="ud" width={0} height={0} style={{width: '100%', height: 'auto'}}/>
                            <Image src="/collab.svg" alt="collab" width={0} height={0} style={{width: '100%', height: 'auto'}}/>
                            <Image src="/prd-mob.svg" alt="prd" width={0} height={0} style={{width: '100%', height: 'auto'}}/>
                        </div>
                    </div>

                    <div className="mt-8 flex flex-col self-center text-center gap-4">
                            <p className="text-primary text-[20px] font-normal">2.3</p>
                            <h3 className="text-white capitalize font-normal text-[24px]">Your daily schedule during live projects</h3>
                    </div>

                    {/* 3 */}

                    <div className="flex flex-row gap-3 mt-10 mb-6">
                        <div className="flex align-center basis-1/8 justify-center py-2 px-3.5 rounded-full bg-primary">
                            <p className="text-[12px] text-white">3</p>
                        </div>
                        <div className="flex self-center basis-1/4 flex-col">
                            <h3 className="text-white font-normal text-[16px] whitespace-nowrap">Interview Prep</h3>
                            <Image src="/underline-green.svg" alt="underline-green" width={80} height={20} />
                        </div>
                        <div className="hl self-center basis-1/4"></div>
                        <p className="text-primary text-[14px] self-center whitespace-nowrap">Week 09 - 12</p>
                    </div>
                        <div className="mt-8 flex flex-col self-center text-center gap-4">
                            <p className="text-primary text-[20px] font-normal">3.1</p>
                            <h3 className="text-white capitalize font-normal text-[24px]">Data Analytics Industry-leaders as your career coaches</h3>
                        </div>

                        <div className="flex flex-row gap-3 mt-8">
                            <div className="flex flex-col gap-4 place-items-center">
                                <Image src="/siddhart-round.svg" alt="siddharth" width={80} height={80} />
                                <p className="text-white font-normal text-[18px] text-center">Siddharth Rout</p>
                                <Image src="/microsoft.svg" alt="microsoft" width={100} height={40} />
                            </div>
                            <div className="vl" />
                            <div className="flex flex-col gap-4 place-items-center">
                                <Image src="/huzefa-round.svg" alt="huzefa" width={80} height={80} />
                                <p className="text-white font-normal text-[18px] text-center mb-1">Huzefa Lohawala</p>
                                <Image src="/paypal.svg" alt="paypal" width={70} height={40} />
                            </div>
                            <div className="vl" />
                            <div className="flex flex-col gap-4 place-items-center">
                                <Image src="/raghu-round.svg" alt="raghu" width={80} height={80} />
                                <p className="text-white font-normal text-[18px] text-center">Raghu Raman V</p>
                                <Image src="/dell-card.svg" alt="dell" width={80} height={40} />
                            </div>
                        </div>

                        <div className="mt-8 flex flex-col self-center text-center gap-4 mb-8">
                            <p className="text-primary text-[20px] font-normal">3.2</p>
                            <h3 className="text-white capitalize font-normal text-[24px]">your mentor will create a customized, effective roadmap just for you.</h3>
                        </div>
                        
                        <div className="flex flex-col">
                            <Image src="/group1.svg" alt="group1" width={0} height={0} style={{width: '100%', height: 'auto'}} />
                            <div className="self-center h-[30px] border-dashed w-[2px] border border-l-white opacity-30" />
                            <Image src="/group1.svg" alt="group1" width={0} height={0} style={{width: '100%', height: 'auto'}} />
                            <div className="self-center h-[30px] border-dashed w-[2px] border border-l-white opacity-30" />
                            <Image src="/group1.svg" alt="group1" width={0} height={0} style={{width: '100%', height: 'auto'}} />
                        </div>

                    
                    {/* 4 */}
                    <div className="flex flex-row gap-3 mb-10 mt-20">
                        <div className="flex align-center basis-1/8 justify-center py-2 px-3.5 rounded-full bg-primary">
                            <p className="text-[12px] text-white">4</p>
                        </div>
                        <div className="flex self-center basis-1/4 flex-col">
                            <h3 className="text-white font-normal text-[14px] whitespace-nowrap">Placement Drive</h3>
                            <Image src="/underline-green.svg" alt="underline-green" width={80} height={20} />
                        </div>
                        <div className="hl self-center basis-1/4"></div>
                        <p className="text-primary text-[14px] self-center whitespace-nowrap">Week 13 - 16</p>
                    </div>
                    <div className="flex flex-col mx-4 my-4 gap-6">
                        <div className="w-100 flex rounded-2xl bg-secondary h-[30vh]">
                        </div>             
                        <div className="w-100 flex rounded-2xl bg-secondary h-[30vh]">
                        </div>             
                        <div className="w-100 flex rounded-2xl bg-secondary h-[30vh]">
                        </div>             

                    </div>


                </div>
                
            </div>
        </>
    
  )
}

export default DAJourney