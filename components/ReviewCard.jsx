import React from 'react';

import Image from 'next/image';
// import styles from '../styles';

const ReviewCard = ({ title, person, brand }) => {
  return (
    <div className="flex flex-col align-center justify-between w-full mx-6 my-4">
        <div className="flex w-[150px] object-fit rounded-2xl">
            <Image src={person} width={200} height={180} alt={title}  />
        </div>
        <div className="logo-card self-center flex rounded-lg align-center justify-center px-1 py-1 bg-white w-full object-fill">
                <Image src={brand} alt={title} width={60} height={60} />
            </div>
    </div>
  )
}

export default ReviewCard