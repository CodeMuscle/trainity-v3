import React from 'react';
import styles from '../styles';

import { TypingText, TitleText } from '../components';
import JobCard from '../components/JobCard';
import { jobCard } from '../constants';


const GetStarted = () => {
  return (
    <div className="flex align-center justify-center py-2">
        <div className={`${styles.innerWidth} flex flex-col align-center justify-center`}>
            <div className={`${styles.paddings} flex flex-col align-center justify-center`}>
                <TitleText title={<>Curated Precisely For Individual Needs</>} />
                <TypingText className={`${styles.interWidth}`} title="Customized course content designed to meet the unique needs of students, working professionals, and graduates."
                textStyles="text-footer hidden sm:flex md:flex lg:flex"
                 />    
            </div>
            <div className={`${styles.paddings} flex flex-col sm:flex-col md:flex-row lg:flex-row align-center justify-center gap-8`}>
                {jobCard.map((job, index) => (
                  <JobCard 
                    key={job.id}
                    {...job}
                    index={index}
                  />

                ))}  
            </div>
        </div>
    </div>
  )
}

export default GetStarted