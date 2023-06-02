'use client';

import CertificateCard from "../components/CertificateCard";

const Certificates = () => (
  <section className="my-28 md:mx-12 lg:mx-12 p-8 bg-transparent rounded-lg flex flex-col gap-4">
    <div className="flex flex-col gap-3 my-4 text-center">
      <h2 className="font-semibold text-[40px] md:text-[48px] lg:text-[64px] text-white">You Will Get... </h2>
      <p className="font-normal text-[18px] sm:[12px] text-footer">the following skills and rewards by the end of the program</p>
    </div>

    <CertificateCard />
    
  </section>
);

export default Certificates;
