// import Image from 'next/image';
import React from 'react'

import { images } from '../constants';
import LogoCard from '../components/LogoCard';


const LogoSlider = () =>  {
    return (
      <div className="my-16 flex items-center justify-center">
        {/* 1. */}
        <div className="w-[200%] shrink-0 h-20 overflow-hidden relative">
          {/* 2. */}
          <div className="w-[200%] overflow-hidden flex items-center h-20 justify-around absolute left-0 animate gap-20">
            {/* 3 */}
            {images.map((image, index) => (
                <LogoCard 
                    key={image.id}
                    {...image}
                    index={index}
                />
            ))}
            {images.map((image,index) => (
                <LogoCard 
                key={image.id}
                {...image}
                index={index}
            />
            ))}
          </div>
        </div>
      </div>
    );
  }

export default LogoSlider; 