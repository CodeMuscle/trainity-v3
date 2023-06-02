'use client';
import Image from "next/image";
import EmblaCarousel from "../components/EmblaCarousel/EmblaCarousel";
import '../styles/embla.css'


const OPTIONS = { loop: true }
const SLIDE_COUNT = 3
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())


const Hero = () => (
  <>
    <section className="md:block lg:block sm:hidden hidden">
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </section>

    <section className="lg:hidden md:hidden sm:flex flex flex-col place-content-center align-center justify-center gap-5 pt-10 bg-heromob">
      <div className="flex self-center gap-1">
        <Image src="/lightning-bolt.svg" alt="" width={30} height={30} />
        <p className="text-white self-center text-[12px] font-normal">
          Become a Data Analyst Now!
        </p>
      </div>

      <h1 className="text-[40px] text-center text-primary capitalize font-semibold">Land Tech jobs <br /> <span className="text-white">with CTC &#62; 8LPA</span> </h1>

      <p className="text-white text-center font-thin text-[14px] px-16">
      Learn in-demand skills and switch to your dream job.
      </p>

      <button className="bg-primary px-4 py-2 rounded-lg w-[200px] self-center text-white font-semibold mb-10">
        Learn More
      </button>

      <Image src="/home-student-mob.svg" alt="student-mob" width={0} height={0} style={{width: '100%', height: 'auto'}}  />
    </section>

  </>
  
);

export default Hero;
