import { Footer, Navbar } from '../components';
import { About, Experience, Feedback, GetStarted, Hero, Insights, World } from '../sections';
import LogoSlider from '../sections/LogoSlider';
// import Banner from '../components/Banner';
import Testimonial from '../sections/Testimonial';

const Page = () => (
    <div className="bg-trainity-dark snap-y overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <LogoSlider />
      <Experience />
      <GetStarted />
      <World />
      <Insights />
      <Feedback />
      <Testimonial />
      <Footer />
    </div>
  );

export default Page;
