'use client';

import TabCard from "../components/TabCard";

const Insights = () => (
  <section className="my-10 py-8 md:mx-12 lg:mx-12 md:p-8 lg:p-8 bg-secondary rounded-lg flex flex-col gap-4">
    <div className="flex flex-col gap-3 my-4 text-center">
      <h2 className="font-semibold text-[28px] md:text-[42px] lg:text-[42px] text-white px-10 md:px-0 lg:px-0">Live Bootcamps from top 1% Instructors </h2>
      <p className="font-normal hidden md:[12px] lg:text-[14px] text-footer">Customized course content designed to meet the unique needs of students</p>
    </div>

    <TabCard />
    
  </section>
);

export default Insights;
