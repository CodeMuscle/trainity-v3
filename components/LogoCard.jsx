import Image from 'next/image'
import React from 'react'

const LogoCard = ({ title, imgUrl }) => {
  return (
    <div className="flex justify-center items-start w-[20rem] opacity-25 logo">
        <Image alt={title} src={imgUrl} width={150} height={150}/>
    </div>
  )
}

export default LogoCard