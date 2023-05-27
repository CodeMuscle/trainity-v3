'use client';
import Image from 'next/image';
import styles from '../styles';


const Navbar = () => (
  <nav className={`${styles.xPaddings} z-10 py-8 relative justify-between flex border-bottom`}>
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`} >
      <Image src="/logo.svg" alt="logo" width={100} height={40} className="cursor-pointer" />
    </div>

    <div className={`w-full mx-auto align-center flex justify-end gap-12`}>
        <h4 className={`whitespace-nowrap font-normal text-[15px] leading-[20px] text-white`}> <a href="/tracks">Tracks</a></h4>
        <h4 className={`whitespace-nowrap font-normal text-[15px] leading-[20px] text-white`}><a href="/about">About Us</a></h4>
        <h4 className={`whitespace-nowrap font-normal text-[15px] leading-[20px] text-white`}><a href="/fees">Fees</a></h4>
        <h4 className={`whitespace-nowrap font-normal text-[15px] leading-[20px] text-white`}><a href="/faq">FAQs</a></h4>
        <button className={`whitespace-nowrap text-[15px] leading-[20px] button-primary font-normal text-primary px-5 py-2 -mt-[10px] border border-1 border-primary`}>Log-in</button>
    </div>
  </nav>
);

export default Navbar;
