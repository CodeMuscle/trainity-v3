import React from 'react'

import styles from '../styles';
import Image from 'next/image';

const AboutCard = ({ imgUrl, title }) => {
  return (
    <div className={`align-center justify-center w-full mx-6 my-4`}>
        <div className={`${styles.innerWidth} flex justify-center content-center mx-auto gap-2 tricard py-6`}>
            <Image src={imgUrl} alt={title} width={50} height={50}  />
            <h3 className="self-center font-normal sm:text-[20px] text-[16px] text-white z-0">{title}</h3>
        </div>       
    </div>
  )
}

export default AboutCard