'use client';

import Image from "next/image";

// import styles from "../styles";

const Roadmap = () => (
  <section className={`my-12 md:px-48 lg:px-48 px-10 sm:px-30 self-center flex flex-col-reverse md:flex-row lg:flex-row justify-between gap-16`}>
    <div className="rounded-lg bg-secondary p-4 md:basis-1/2 lg:basis-1/2 h-[50vh] md:h-[60vh] lg:h-[60vh] relative overflow-hidden">
      <div className="wrapper flex-col"> 
          <div className="card w-[100%] self-center card1 flex align-center roadmap">
            <div className="content bg-tertiary rounded-lg flex flex-row px-6 py-4 gap-4 w-[100%]">
              <div className="flex align-center justify-center place-content-center p-1 px-4 md:p-3 lg:p-3 bg-secondary rounded-lg">
                <Image src="/up.svg" alt="" width={30} height={30} />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-primary font-normal text-[14px]">WEEK 01-04</span>
                <p className="text-white font-normal text-[22px]">Upskilling</p>
              </div>
            </div>
          </div>
          <div className="card w-[100%] self-center card2 flex align-center roadmap">
            <div className="content bg-tertiary rounded-lg flex flex-row px-6 py-4 gap-4 w-[100%]">
              <div className="flex align-center justify-center place-content-center p-1 px-4 md:p-3 lg:p-3 bg-secondary rounded-lg bg-secondary">
                <Image src="/idea-bulb.svg" alt="" width={30} height={30} />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-primary font-normal text-[14px]">Week 05 - 08</span>
                <p className="text-white font-normal text-[22px]">Live Project</p>
              </div>
            </div>
          </div>
          <div className="card w-[100%] self-center card3 flex align-center roadmap">
            <div className="content bg-tertiary rounded-lg flex flex-row px-6 py-4 gap-4 w-[100%]">
              <div className="flex align-center justify-center place-content-center p-1 px-4 md:p-3 lg:p-3 bg-secondary bg-secondary rounded-lg">
                <Image src="/chat-blue.svg" alt="" width={30} height={30} />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-primary font-normal text-[14px]">Week 09 - 12</span>
                <p className="text-white font-normal text-[22px]">Interview Preparation</p>
              </div>
            </div>
          </div>
          <div className="card w-[100%] self-center card4 flex align-center roadmap">
            <div className="content bg-tertiary rounded-lg flex flex-row px-6 py-4 gap-4 w-[100%]">
              <div className="flex align-center justify-center place-content-center p-1 px-4 md:p-3 lg:p-3 bg-secondary bg-secondary rounded-lg">
                <Image src="/schoolbag.svg" alt="" width={30} height={30} />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-primary font-normal text-[14px] spacing-[20px]">Week 13 - 16</span>
                <p className="text-white font-normal text-[22px]">Placement Drive</p>
              </div>
            </div>
          </div>
          <div className="card w-[100%] self-center card5 flex align-center roadmap">
            <div className="content bg-tertiary rounded-lg flex flex-row px-6 py-4 gap-4 w-[100%]">
              <div className="flex align-center justify-center place-content-center p-1 px-4 md:p-3 lg:p-3 bg-secondary bg-secondary rounded-lg">
                <Image src="/schoolbag.svg" alt="" width={30} height={30} />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-primary font-normal text-[14px]">WEEK 01-04</span>
                <p className="text-white font-normal text-[22px]">Upskilling</p>
              </div>
            </div>
          </div>

      </div>
      {/* <div className="wrapper flex-col"> 
          <div className="card w-[100%] self-center card1 flex align-center roadmap">
            <div className="content bg-tertiary rounded-lg flex flex-row px-6 py-4 gap-4 w-[100%]">
              <div className="flex align-center justify-center place-content-center p-3 bg-secondary rounded-lg">
                <Image src="/up.svg" alt="" width={30} height={30} />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-primary font-normal text-[14px]">WEEK 01-04</span>
                <p className="text-white font-normal text-[22px]">Upskilling</p>
              </div>
            </div>
          </div>
          <div className="card w-[100%] self-center card2 flex align-center roadmap">
            <div className="content bg-tertiary rounded-lg flex flex-row px-12 py-4 gap-4 w-[100%]">
              <div className="flex align-center justify-center place-content-center p-3 bg-secondary rounded-lg">
                <Image src="/idea-bulb.svg" alt="" width={30} height={30} />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-primary font-normal text-[14px]">Week 05 - 08</span>
                <p className="text-white font-normal text-[22px]">Live Project</p>
              </div>
            </div>
          </div>
          <div className="card w-[100%] self-center card3 flex align-center roadmap">
            <div className="content bg-tertiary rounded-lg flex flex-row px-6 py-4 gap-4 w-[100%]">
              <div className="flex align-center justify-center place-content-center p-3 bg-secondary rounded-lg">
                <Image src="/chat-blue.svg" alt="" width={30} height={30} />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-primary font-normal text-[14px]">Week 09 - 12</span>
                <p className="text-white font-normal text-[22px]">Interview Preparation</p>
              </div>
            </div>
          </div>
          <div className="card w-[100%] self-center card4 flex align-center roadmap">
            <div className="content bg-tertiary rounded-lg flex flex-row px-6 py-4 gap-4 w-[100%]">
              <div className="flex align-center justify-center place-content-center p-3 bg-secondary rounded-lg">
                <Image src="/schoolbag.svg" alt="" width={30} height={30} />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-primary font-normal text-[14px] spacing-[20px]">Week 13 - 16</span>
                <p className="text-white font-normal text-[22px]">Placement Drive</p>
              </div>
            </div>
          </div>
          <div className="card w-[100%] self-center card5 flex align-center roadmap">
            <div className="content bg-tertiary rounded-lg flex flex-row px-6 py-4 gap-4 w-[100%]">
              <div className="flex align-center justify-center place-content-center p-3 bg-secondary rounded-lg">
                <Image src="/schoolbag.svg" alt="" width={30} height={30} />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-primary font-normal text-[14px]">WEEK 01-04</span>
                <p className="text-white font-normal text-[22px]">Upskilling</p>
              </div>
            </div>
          </div>

      </div> */}
    </div>

    <div className="flex flex-col justify-center basis-1/2 ">
      <h2 className={`text-white md:w-[70%] lg:w-[70%] leading-tight text-[36px] lg:text-[64px] font-normal md:text-[48px] capitalize`}><span className="text-primary">Roadmap <br/></span> towards a career in data analytics in 16 weeks</h2>
      <p className="text-white md:w-[75%] lg:w-[75%] my-4 font-normal text-[20px] sm:text-[16px]">The content has been carefully selected or organized to cater specifically to students who are interested in finding a job that pays well.</p>
      <a href="" ><span className="text-primary font-semibold text-[18px] sm:text-[16px] underline underline-offset-8">Learn More </span></a>
    </div>

  </section>
);

export default Roadmap;
