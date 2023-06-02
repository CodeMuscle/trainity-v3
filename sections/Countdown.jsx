"use client";

import { Fragment, useState, useEffect } from "react";
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
      stroke="#fff"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

const Countdown = () => {

    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const date = new Date();
    date.setDate(date.getDate() + 1);
    const deadline = date;


    const getTime = () => {
        const time = Date.parse(deadline)-Date.now()
        setDays(Math.floor(time/(1000*60*60*24)));
        setHours(Math.floor(time/(1000*60*60)%24));
        setMinutes(Math.floor(time/(1000/60)%60));
        setSeconds(Math.floor((time/1000)%60));

    }

    useEffect(() => { 
        const interval = setInterval(() => getTime(deadline), 1000)
        return ()=> clearInterval(interval)
    })
    


    const [open, setOpen] = useState(0);
 
    const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div className="flex flex-col lg:flex-row md:flex-row gap-10 justify-between my-28 mx-4 md:mx-24 lg:mx-24">
        <div className="flex-col basis-1/2 self-center">
            <div className="flex flex-col title mb-8">
                <h1 className="text-white text-[42px] font-semibold capitalize">
                    How does it work?
                </h1>
                <p className="text-white font-normal text-[18px]">Trainity&apos;s programs help you get not only theoretical but also practical knowledge with hands-on projects and career coaching sessions.</p>
            </div>
            
            {/* Accordion */}
            <Fragment>
            <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(1)}>
                <h3 className="py-4 text-white font-[22px] text-normal capitalize">
                    1. Sign-Up for Free webinar
                </h3>
                </AccordionHeader>
                <AccordionBody className="bg-secondary p-4">
                    <p className="text-white font-normal text-[16px]">
                        We&apos;re not always in the position that we want to be at.
                        We&apos;re constantly growing. We&apos;re constantly making mistakes.
                        We&apos;re constantly trying to express ourselves and actualize our
                        dreams.
                    </p>
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(2)}>
                <h3 className="py-4 text-white font-[22px] text-normal capitalize">
                    2. Attend the webinar
                </h3>
                </AccordionHeader>
                <AccordionBody className="bg-secondary p-4">
                    <p className="text-white font-normal text-[16px]">
                        We&apos;re not always in the position that we want to be at.
                        We&apos;re constantly growing. We&apos;re constantly making mistakes.
                        We&apos;re constantly trying to express ourselves and actualize our
                        dreams.
                    </p>
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(3)}>
                <h3 className="py-4 text-white font-[22px] text-normal capitalize">
                    3. Get Enrolled!
                </h3>
                </AccordionHeader>
                <AccordionBody className="bg-secondary p-4">
                    <p className="text-white font-normal text-[16px]">
                        We&apos;re not always in the position that we want to be at.
                        We&apos;re constantly growing. We&apos;re constantly making mistakes.
                        We&apos;re constantly trying to express ourselves and actualize our
                        dreams.
                    </p>
                </AccordionBody>
            </Accordion>
            </Fragment>

        </div>

        <div className="basis-1/2 bg-secondary rounded-2xl h-100 py-10 px-8 md:py-20 md:px-20 sm:py-20 sm:px-10 flex flex-col align-center justify-center gap-8 text-center">
            <h3 className="text-white text-[44px] font-normal capitalize mb-3">Register for webinar!</h3>
            <p className="text-white font-thin text-[18px]">Register for the free webinar to get to enrolled in the program</p>

            {/* Timer */}
            <div className="my-4 self-center">
                <div className="flex flex-row gap-4 md:gap-8 lg:gap-8">
                    <div className="flex flex-col gap-4 text-center">
                        <h1 className="text-white p-3 bg-tertiary rounded-lg text-[48px]">{hours<10 ? "0"+hours : hours}</h1>
                        <span className="text-footer text-[18px]">Hours</span>
                    </div>
                    <h1 className="text-white self-center text-[40px] -translate-y-4">:</h1>
                    <div className="flex flex-col gap-4">
                        <h1 className="text-white p-3 bg-tertiary rounded-lg text-[48px]">{minutes<10 ? "0"+minutes : minutes}</h1>
                        <span className="text-footer text-[18px]">Minutes</span>
                    </div>
                    <h1 className="text-white self-center text-[40px] -translate-y-4">:</h1>
                    <div className="flex flex-col gap-4">
                        <h1 className="text-white p-3 bg-tertiary rounded-lg text-[48px]">{seconds<10 ? "0"+seconds : seconds}</h1>
                        <span className="text-footer text-[18px]">Seconds</span>
                    </div>
                </div>
            </div>


            <input type="email" placeholder="Your E-mail (Eg: johndoe@gmail.com)" className="text-white bg-tertiary rounded-2xl p-4 w-100 " />
            <button href="#" className="bg-primary text-white p-4 w-100 rounded-2xl">
                Register
            </button>
        </div>
    </div>
  )
}

export default Countdown