import { useState } from "react";
import Image from "next/image";

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";


  
  export default function CertificateCard() {

  const [activeTab, setActiveTab] = useState("certificates");
  const data = [
    {
      label: "Certificates",
      value: "certificates",
      imgUrl: '/certificate.svg',
      title: 'After successfully completing the program you will have...',
      subTitle: 'the following skills and rewards by the end of the program',
      pointer1: 'Certificate of course completion',
      pointer2: 'Certificate of virtual internship',
    },
    {
      label: "Learn Tools",
      value: "learn",
      imgUrl: '/certificate.svg',
      title: 'After successfully completing the program you will have...',
      subTitle: 'the following skills and rewards by the end of the program',
      pointer1: 'Certificate of course completion',
      pointer2: 'Certificate of virtual internship',
      
    },
    {
      label: "Portfolio Projects",
      value: "projects",
      imgUrl: '/certificate.svg',
      title: 'After successfully completing the program you will have...',
      subTitle: 'the following skills and rewards by the end of the program',
      pointer1: 'Certificate of course completion',
      pointer2: 'Certificate of virtual internship',
      
    },
    {
      label: "Professional Experience",
      value: "professional experience",  
      imgUrl: '/certificate.svg',
      title: 'After successfully completing the program you will have...',
      subTitle: 'the following skills and rewards by the end of the program',
      pointer1: 'Certificate of course completion',
      pointer2: 'Certificate of virtual internship', 
    },
  ];

  const dataNew = [
    {
      label: "/index-f.svg",
      value: "certificates",
      desc: "/certificate.svg",
      feature1: 'Certifications',
      desc1: 'Daily Slack standups and weekly meetings with your teammates and mentor'
    },
    {
      label: "/peace.svg",
      value: "learn",
      desc: "/certificate.svg",
      feature1: 'Learn Tools',
      desc1: 'After successfully completing the program you will have...'
    },
    {
      label: "/3-finger.svg",
      value: "projects",
      desc: "/certificate.svg",
      feature1: 'Portfolio Projects',
      desc1: 'Daily Slack standups and weekly meetings with your teammates and mentor'
    },
    {
      label: "/four-finger.svg",
      value: "experience",
      desc: "/certificate.svg",
      feature1: 'Professional Experience',
      desc1: 'Daily Slack standups and weekly meetings with your teammates and mentor'
    },
  ];

    return (
    <>
      <div className="hidden md:block lg:block">
        <Tabs value={activeTab}>
          <TabsHeader
            className="rounded-none border-b border-green-primary bg-transparent p-0"
            indicatorProps={{
              className: "bg-transparent border-b-4 border-green-primary shadow-none rounded-none",
            }}
          >
            {data.map(({ label, value }) => (
              <Tab
                key={value}
                value={value}
                onClick={() => setActiveTab(value)}
                className={activeTab === value ? "text-primary" : "text-footer"}
              >
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {data.map(({ value, imgUrl, title, subTitle, pointer1, pointer2}) => (
              <TabPanel key={value} value={value}>
              <div className="flex flex-row justify-between gap-8 mt-6">
                
              <div className="flex flex-col md:flex-row lg:flex-row justify-between gap-8 self center place-content-center py-10 px-4">
                  <Image src={imgUrl} alt="certificate" width={0} height={0} style={{width: '100%', height: 'auto'}} className="basis-1/2" />
                  <div className="flex flex-col basis-1/2 px-12 gap-10 self-center">
                    <h1 className="text-white font-semibold text-[32px]">
                      {title}
                    </h1>
                    <p className="text-white font-normal text-[22px]">{subTitle}</p>
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-row gap-6">
                        <svg width="25" height="28" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.5402 2.28516L8.31798 16.5074L2.22266 10.4121" stroke="#48BF84" stroke-width="3.04762" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <p className="text-white font-normal text-[18px]">{pointer1}</p>
                      </div>
                      <div className="flex flex-row gap-6">
                        <svg width="25" height="28" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.5402 2.28516L8.31798 16.5074L2.22266 10.4121" stroke="#48BF84" stroke-width="3.04762" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <p className="text-white font-normal text-[18px]">{pointer2}</p>
                      </div>
                    </div>     
                  </div>
              </div>  
              </div>
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>

      <div className="block md:hidden lg:hidden">
          <Tabs value="learn" className="max-w-[40rem] mt-6">
            <TabsBody>
                            {dataNew.map(({ value, desc }) => (
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
                            {dataNew.map(({ label, value }) => (
                            <Tab key={value} value={value} className="tab">
                                <Image src={label} alt={value} width={25} height={25} />
                            </Tab>
                            ))}
                        </TabsHeader>
                        <TabsBody>
                            {dataNew.map(({ value, desc1, feature1 }) => (
                            <TabPanel key={value} value={value}>
                                <div className="flex flex-col gap-2 align-center-justify-center self-center text-center">
                                    <p className="text-white font-semibold text-[18px]">{feature1}</p>
                                    <p className="text-white font-normal text-[16px]">{desc1}</p>
                                </div>
                            </TabPanel>
                            ))}
            </TabsBody>
                        
          </Tabs>
      </div>
    </>
      
    
    )
  }