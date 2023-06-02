import React from 'react'

import styles from '../styles';
import Image from 'next/image';

const AboutCard = ({ imgUrl, title }) => {
  return (
    <div className={`align-center justify-center sm:w-full md:w-full lg:w-full mx-6 my-4`}>
        <div className={`${styles.innerWidth} flex flex-col align-center text-center sm:flex-col md:flex-row lg:flex-row justify-center content-center mx-auto gap-2 tricard py-6`}>
            <Image src={imgUrl} alt={title} width={50} height={50} className="self-center"  />
            <h3 className="self-center font-normal sm:text-[20px] text-[16px] text-white z-0">{title}</h3>
        </div>       
    </div>
  )
}

export default AboutCard