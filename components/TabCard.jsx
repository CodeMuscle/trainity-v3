import { useState } from "react";
import Image from "next/image";

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";


  
  export default function TabCard() {

    const [activeTab, setActiveTab] = useState("workshop");
  const data = [
    {
      label: "Data Analytics",
      value: "DA",
      spark1: '/spark.svg',
      spark2: '/spark.svg',
      spark3: '/fireball.svg',
      icon: '/tableau-software.svg',
      title: 'Mastering',
      sub: 'Tableau',
      time: '/icon _clock_.svg',
      weeks: '4 weeks',
      book: '/icon _book.svg',
      modules: '12 Modules',
      price: '₹ 4999/-',
      tutor: '/raghu-faded.svg',
      icon1: '/microsoft-excel-software.svg',
      title1: 'The',
      sub1: 'Excel Bootcamp',
      time1: '/icon _clock_.svg',
      weeks1: '4 weeks',
      book1: '/icon _book.svg',
      modules1: '12 Modules',
      price1: '₹ 499/-',
      tutor1: '/siddhart-faded.svg',
      icon2: '/mysql-software.svg',
      title2: 'Mastering',
      sub2: 'SQL',
      time2: '/icon _clock_.svg',
      weeks2: '4 weeks',
      book2: '/icon _book.svg',
      modules2: '12 Modules',
      price2: '₹ 1499/-',
      tutor2: '/huzefa-faded.svg',
    },
    {
      label: "Workshop",
      value: "workshop",
      spark1: '/spark.svg',
      spark2: '/spark.svg',
      spark3: '/fireball.svg',
      icon: '/tableau-software.svg',
      title: 'Mastering',
      sub: 'Tableau',
      time: '/icon _clock_.svg',
      weeks: '4 weeks',
      book: '/icon _book.svg',
      modules: '12 Modules',
      price: '₹ 4999/-',
      tutor: '/raghu-faded.svg',
      icon2: '/microsoft-excel-software.svg',
      title2: 'The',
      sub2: 'Excel Bootcamp',
      time2: '/icon _clock_.svg',
      weeks2: '4 weeks',
      book2: '/icon _book.svg',
      modules2: '12 Modules',
      price2: '₹ 499/-',
      tutor2: '/siddhart-faded.svg',
      icon1: '/mysql-software.svg',
      title1: 'Mastering',
      sub1: 'SQL',
      time1: '/icon _clock_.svg',
      weeks1: '4 weeks',
      book1: '/icon _book.svg',
      modules1: '12 Modules',
      price1: '₹ 1499/-',
      tutor1: '/huzefa-faded.svg',
      
      
    },
    {
      label: "Bootcamp",
      value: "bootcamp",
      spark1: '/spark.svg',
      spark2: '/spark.svg',
      spark3: '/fireball.svg',
      icon: '/tableau-software.svg',
      title: 'Mastering',
      sub: 'Tableau',
      time: '/icon _clock_.svg',
      weeks: '4 weeks',
      book: '/icon _book.svg',
      modules: '12 Modules',
      price: '₹ 4999/-',
      tutor: '/raghu-faded.svg',
      icon1: '/microsoft-excel-software.svg',
      title1: 'The',
      sub1: 'Excel Bootcamp',
      time1: '/icon _clock_.svg',
      weeks1: '4 weeks',
      book1: '/icon _book.svg',
      modules1: '12 Modules',
      price1: '₹ 499/-',
      tutor1: '/siddhart-faded.svg',
      icon2: '/mysql-software.svg',
      title2: 'Mastering',
      sub2: 'SQL',
      time2: '/icon _clock_.svg',
      weeks2: '4 weeks',
      book2: '/icon _book.svg',
      modules2: '12 Modules',
      price2: '₹ 1499/-',
      tutor2: '/huzefa-faded.svg',
      
    },
    {
      label: "Coding",
      value: "coding",
      spark1: '/spark.svg',
      spark2: '/spark.svg',
      spark3: '/fireball.svg',
      icon: '/tableau-software.svg',
      title: 'Mastering',
      sub: 'Tableau',
      time: '/icon _clock_.svg',
      weeks: '4 weeks',
      book: '/icon _book.svg',
      modules: '12 Modules',
      price: '₹ 4999/-',
      tutor: '/raghu-faded.svg',
      icon1: '/microsoft-excel-software.svg',
      title1: 'The',
      sub1: 'Excel Bootcamp',
      time1: '/icon _clock_.svg',
      weeks1: '4 weeks',
      book1: '/icon _book.svg',
      modules1: '12 Modules',
      price1: '₹ 499/-',
      tutor1: '/siddhart-faded.svg',
      icon2: '/mysql-software.svg',
      title2: 'Mastering',
      sub2: 'SQL',
      time2: '/icon _clock_.svg',
      weeks2: '4 weeks',
      book2: '/icon _book.svg',
      modules2: '12 Modules',
      price2: '₹ 1499/-',
      tutor2: '/huzefa-faded.svg',
      
    },
    {
      label: "Career Coaching",
      value: "career-coaching",
      spark1: '/spark.svg',
      spark2: '/spark.svg',
      spark3: '/fireball.svg',
      icon: '/tableau-software.svg',
      title: 'Mastering',
      sub: 'Tableau',
      time: '/icon _clock_.svg',
      weeks: '4 weeks',
      book: '/icon _book.svg',
      modules: '12 Modules',
      price: '₹ 4999/-',
      tutor: '/raghu-faded.svg',
      icon1: '/microsoft-excel-software.svg',
      title1: 'The',
      sub1: 'Excel Bootcamp',
      time1: '/icon _clock_.svg',
      weeks1: '4 weeks',
      book1: '/icon _book.svg',
      modules1: '12 Modules',
      price1: '₹ 499/-',
      tutor1: '/siddhart-faded.svg',
      icon2: '/mysql-software.svg',
      title2: 'Mastering',
      sub2: 'SQL',
      time2: '/icon _clock_.svg',
      weeks2: '4 weeks',
      book2: '/icon _book.svg',
      modules2: '12 Modules',
      price2: '₹ 1499/-',
      tutor2: '/huzefa-faded.svg',
      
    },
  ];

    return (
      <Tabs value={activeTab}>
      <TabsHeader
        className="rounded-none border-b border-green-primary bg-transparent px-4 w-[100vw] relative whitespace-nowrap overflow-y-hidden gap-6 md:gap-0 lg:gap-0 md:px-0 lg:px-0"
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
        {data.map(({ value, spark1, spark2,spark3, icon, title, sub, time, weeks, book, modules, price, tutor, icon1, title1, sub1, time1, weeks1, book1, modules1, price1, tutor1, icon2, title2, sub2, time2, weeks2, book2, modules2, price2, tutor2 }) => (
          <TabPanel key={value} value={value}>
          <div className="flex flex-col md:flex-row lg:flex-row justify-between gap-8 mt-6">
            
            {/* Card 1 */}
            <div className="flex flex-col py-16 px-5 basis-1/3 rounded-2xl bg-tertiary border-secondary gap-4 relative overflow-hidden ">
              <div className="flex align-center justify-center py-4 px-5 spark absolute top-0 right-0">
              <Image src={spark1} alt={spark1} width={20} height={20} />
              </div>
              <Image src={icon} alt={icon} width={50} height={50} />
              <h1 className="text-white font-semibold text-[32px]">{title} <span className="text-primary">{sub}</span></h1>
              <div className="flex flex-row gap-4">
                <div className="flex flex-row gap-2">
                  <Image src={time} alt={time} width={15} height={15} />
                  <p className="text-white font-thin text-[12px] capitalize">{weeks}</p>
                </div>
                <div className="flex flex-row gap-2">
                  <Image src={book} alt={book} width={15} height={15} />
                  <p className="text-white font-thin text-[12px]">{modules}</p>
                </div>
              </div>

              <h1 className="text-white font-semibold text-[24px]"> <span className="text-footer text-[20px]">@</span> {price} </h1>

              <div className="flex flex-row justify-between gap-8 mt-16">
                <button className="bg-button-transparent rounded-2xl px-4 py-3 flex flex-row align-center justify-center gap-4 border border-white z-10">
                  <p className="text-white font-normal self-center text-[12px]">View Program</p>
                  <Image src="/arrow-right.svg" alt="arrow-right" width={25} height={25} />
                </button>

                <Image className="absolute -bottom-5 right-0 z-1" src={tutor} alt="tutor" width={200} height={200} />

              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col py-16 px-5 basis-1/3 rounded-2xl bg-tertiary border-secondary gap-4 relative overflow-hidden ">
              <div className="flex align-center justify-center py-4 px-5 spark absolute top-0 right-0">
              <Image src={spark2} alt={spark2} width={20} height={20} />
              </div>
              <Image src={icon1} alt={icon1} width={50} height={50} />
              <h1 className="text-white font-semibold text-[32px]">{title1} <span className="text-primary">{sub1}</span></h1>
              <div className="flex flex-row gap-4">
                <div className="flex flex-row gap-2">
                  <Image src={time1} alt={time1} width={15} height={15} />
                  <p className="text-white font-thin text-[12px] capitalize">{weeks1}</p>
                </div>
                <div className="flex flex-row gap-2">
                  <Image src={book1} alt={book1} width={15} height={15} />
                  <p className="text-white font-thin text-[12px]">{modules1}</p>
                </div>
              </div>

              <h1 className="text-white font-semibold text-[24px]"> <span className="text-footer text-[20px]">@</span> {price1} </h1>

              <div className="flex flex-row justify-between gap-8 mt-16">
                <button className="bg-button-transparent rounded-2xl px-4 py-3 flex flex-row align-center justify-center gap-4 border border-white z-10">
                  <p className="text-white font-normal self-center text-[12px]">View Program</p>
                  <Image src="/arrow-right.svg" alt="arrow-right" width={25} height={25} />
                </button>

                <Image className="absolute -bottom-5 right-0 z-1" src={tutor1} alt="tutor" width={200} height={200} />

              </div>
              

            </div>

            {/* Card 3 */}
            <div className="flex flex-col py-16 px-5 basis-1/3 rounded-2xl bg-tertiary border-secondary gap-4 relative overflow-hidden ">
              <div className="flex align-center justify-center py-4 px-5 spark absolute top-0 right-0">
              <Image src={spark3} alt={spark3} width={30} height={30} />
              </div>
              <Image src={icon2} alt={icon2} width={50} height={50} />
              <h1 className="text-white font-semibold text-[32px]">{title2} <span className="text-primary">{sub2}</span></h1>
              <div className="flex flex-row gap-4">
                <div className="flex flex-row gap-2">
                  <Image src={time2} alt={time2} width={15} height={15} />
                  <p className="text-white font-thin text-[12px] capitalize">{weeks2}</p>
                </div>
                <div className="flex flex-row gap-2">
                  <Image src={book2} alt={book2} width={15} height={15} />
                  <p className="text-white font-thin text-[12px]">{modules2}</p>
                </div>
              </div>

              <h1 className="text-white font-semibold text-[24px]"> <span className="text-footer text-[20px]">@</span> {price2} </h1>

              <div className="flex flex-row justify-between gap-8 mt-16">
                <button className="bg-button-transparent rounded-2xl px-4 py-3 flex flex-row align-center justify-center gap-4 border border-white z-10">
                  <p className="text-white font-normal self-center text-[12px]">View Program</p>
                  <Image src="/arrow-right.svg" alt="arrow-right" width={25} height={25} />
                </button>

                <Image className="absolute -bottom-5 right-0 z-1" src={tutor2} alt="tutor" width={200} height={200} />

              </div>
              

            </div>

          </div>
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>

    
    )
  }