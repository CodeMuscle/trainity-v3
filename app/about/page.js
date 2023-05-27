import { Footer, Navbar } from '../../components';
import Alumni from '../../sections/Alumni';
import Difference from '../../sections/Difference';
import Earn from '../../sections/Earn';
import Features from '../../sections/Features';
import HeroAbout from '../../sections/HeroAbout';
import Instructor from '../../sections/Instructor';
import Learners from '../../sections/Learners';
import Origin from '../../sections/Origin';
import Success from '../../sections/Success';
import Values from '../../sections/Values';
import Join from '../../sections/Join';


const Page = () => (
    <div className="bg-trainity-dark overflow-hidden">
      <Navbar />
      <HeroAbout />
      <Alumni />
      <Success />
      <Features />
      <Origin />
      <Instructor />
      <Values />
      <Difference />
      <Learners />
      <Earn />
      <Join />
      <Footer />
    </div>
  );

export default Page;
