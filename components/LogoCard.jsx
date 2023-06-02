import Image from 'next/image'

const LogoCard = ({ title, imgUrl }) => {
  return (
    <div className="flex justify-center items-start w-[30rem] md:w-[20rem] sm:w-[20rem] opacity-25 logo">
        <Image alt={title} src={imgUrl} width={250} height={250}/>
    </div>
  )
}

export default LogoCard