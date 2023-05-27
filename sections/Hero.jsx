'use client';
import EmblaCarousel from "../components/EmblaCarousel/EmblaCarousel";
import '../styles/embla.css'


const OPTIONS = { loop: true }
const SLIDE_COUNT = 3
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())


const Hero = () => (
  <section>
    <EmblaCarousel slides={SLIDES} options={OPTIONS} />
  </section>
);

export default Hero;
