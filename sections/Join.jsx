import React from 'react';
import styles from '../styles';

import { TypingText, TitleText } from '../components';
// import Image from 'next/image';


const Join = () => {
  return (
    <div className="flex align-center justify-center py-12">
        <div className={`w-[100%] mx-28 flex ${styles.innerWidth} align-center justify-center bg-secondary rounded-2xl h-[auto]`}>
        
            <div className={`${styles.paddings} flex flex-col align-center justify-center z-10`}>
                <TitleText title={<>Ready To Join <span className="text-primary">Trainity</span>? Start Your <br/>Learning Today</>}/>
                <TypingText title="Build work experience which helps you break top tech Internships and Jobs." textStyles="text-center self-center text-footer" />
                <button type="button" className="self-center rounded-lg mt-8 px-3.5 py-4 text-md font-semibold text-white shadow-sm bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                    Sign Up
                </button>               
            </div>
          </div>
    </div>
  )
}

export default Join