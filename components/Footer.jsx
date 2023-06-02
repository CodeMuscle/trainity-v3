'use client';

import Image from "next/image";

import FooterCard from './FooterCard';
import { courses, company, support } from '../constants'

const Footer = () => (
  <footer className={`footer-bg px-8  md:px-20 lg:px-20 py-20`}>
    <div className="flex flex-col lg:flex-row align-top text-left">  
     <div className="section1 flex flex-col gap-y-5">
        <Image src="/logo.svg" width={100} height={100} alt="footer-logo" />
        <p className="text-[18px] sm:text-[14px] font-light text-white md:w-[50%] lg:w-[50%]">
          Trainity provides Internships, live projects & internships with top startups to help students learn through practical and industrial experience and help them get the job of their dream in 12 weeks.
        </p>
        <div className="socials flex gap-8 mb-10 lg:mb-0">
          <a href="https://www.instagram.com/trainity.in/?hl=en" target="_blank" rel="noreferrer" ><Image src="/Instagram.svg" width={25} height={25} alt="trainity-instagram" /></a>
          <a href="" ><Image src="/Facebook.svg" width={25} height={25} alt="trainity-facebook" /></a>
          <a href="" ><Image src="/Twitter.svg" width={25} height={25} alt="trainity-official" /></a>
        </div>
    </div>
     <div className="flex flex-row gap-x-20 md:gap-x-20 lg:gap-x-20 flex-wrap md:flex-row md:flex-nowrap lg:flex-row lg:flex-nowrap align-top text-left">
      <div className="section2 flex flex-col basis-1/4 gap-y-4">
      <h4 className="text-white text-[24px] sm:text-[20px] font-semibold">
        Courses
      </h4>
        {courses.map((course, index) => (
          <FooterCard
            key={course.index}
            {...course}
            index={index}
           />
        ))}
      </div>
      <div className="section3 flex flex-col basis-1/4 gap-y-4">
      <h4 className="text-white text-[24px] sm:text-[20px] font-semibold">
          Company
      </h4>
        {company.map((about, index) => (
          <FooterCard
            key={about.index}
            {...about}
            index={index}
           />
        ))}
      </div>
      <div className="section4 flex flex-col basis-1/4 gap-y-4">
      <h4 className="text-white text-[24px] sm:text-[20px] font-semibold">
          Support
      </h4>
        {support.map((terms, index) => (
          <FooterCard
            key={terms.index}
            {...terms}
            index={index}
           />
        ))}
      </div>
     </div>

    
    </div>
    <div className="border-t-[0.2px] opacity-25 w-[100%] my-20 self-center"></div>
    <p className="text-footer text-[16px] md:text-center lg:text-center sm:text-[14px] font-semibold">
    ©2023. This page is protected by reCAPTCHA and is subject to the <span className="underline"><a target="_blank" href="https://policies.google.com/privacy" rel="noreferrer">&nbsp;Google Privacy Policy&nbsp;</a></span> and <span className="underline"><a target="_blank" href="https://policies.google.com/terms" rel="noreferrer">&nbsp;Terms of Service&nbsp;</a></span>
    </p>
  </footer>
);

export default Footer;
