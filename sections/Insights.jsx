'use client';

import TabCard from "../components/TabCard";

const Insights = () => (
  <section className="my-10 mx-12 p-8 bg-secondary rounded-lg flex flex-col gap-4">
    <div className="flex flex-col gap-3 my-4 text-center">
      <h2 className="font-semibold text-[48px] sm:text-[42px] text-white">Live Bootcamps from top 1% Instructors </h2>
      <p className="font-normal text-[18px] sm:[12px] text-footer">Customized course content designed to meet the unique needs of students</p>
    </div>

    <TabCard />
    
  </section>
);

export default Insights;
