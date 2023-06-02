import React from 'react';
import styles from '../styles';

import { TypingText, TitleText } from '../components';
import Image from 'next/image';
// import Image from 'next/image';


const Experience = () => {
  return (
    <div className="flex align-center justify-center py-12">
        <div className={`w-[100%] sm:mx-28 md:mx-28 lg:mx-28 mx-4 flex ${styles.innerWidth} align-center justify-center bg-secondary rounded-2xl h-[auto] relative overflow-hidden`}>
            <div className="icons-pack opacity-50">
              <div className="rounded-full bg-tertiary p-3 absolute top-72 left-14">
                <Image src="/baggage.svg" alt="baggage" width={50} height={50} />
              </div>
              <div className="rounded-full p-4 bg-tertiary absolute top-20 left-10">
                <Image src="/db-yellow.svg" alt="db-yellow" width={80} height={80} />
              </div>
              <div className="rounded-full p-4 bg-tertiary absolute top-52 -left-10">
                <Image src="/l3.svg" alt="l3" width={40} height={40} />
              </div>
              <div className="rounded-full p-1 bg-tertiary absolute -top-8 left-6">
                <Image src="/l5.svg" alt="l5" width={70} height={70} />
              </div>
              <div className="rounded-full p-2 bg-tertiary absolute -bottom-4 right-24">
                <Image src="/rocket.svg" alt="rocket" width={75} height={75} />
              </div>
              <div className="rounded-full bg-tertiary absolute top-36 right-14">
                <Image src="/brain.svg" alt="brain" width={60} height={60} />
              </div>
              <div className="rounded-full p-5 bg-tertiary absolute -top-8 right-14">
                <Image src="/l4.svg" alt="l4" width={50} height={50} />
              </div>
              <div className="rounded-full p-5 bg-tertiary absolute top-16 -right-10">
                <Image src="/l1.svg" alt="l1" width={50} height={50} />
              </div>
              <div className="rounded-full p-5 bg-tertiary absolute bottom-20 -right-16">
                <Image src="/l3.svg" alt="l3" width={50} height={50} />
              </div>
            </div>
            <div className={`${styles.paddings} flex flex-col align-center justify-center z-10`}>
                <TitleText title={<>Experience gets you the job. Not your degree.</>}/>
                <TypingText title="Trainity is a platform that provides learners with practical experience along with theory  by allowing them to work on real-world projects." textStyles="text-center self-center text-footer" />
                <button type="button" className="self-center rounded-lg mt-8 px-3.5 py-4 text-md font-semibold text-white shadow-sm bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                    Enroll Now
                </button>               
            </div>
          </div>
    </div>
  )
}

export default Experience