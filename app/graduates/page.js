import { Footer, Navbar } from '../../components';
import { About, Experience, Feedback, GetStarted, Hero, Insights, Roadmap, World } from '../../sections';
import LogoSlider from '../../sections/LogoSlider';
// import { Lenis as ReactLenis, useLenis } from '@studio-freight/react-lenis'

const Page = () => (
    <div className="bg-trainity-dark overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <LogoSlider/ >
      <Experience />
      <Roadmap />
      <GetStarted />
      <World />
      <Insights />
      <Feedback />
      <Footer />
    </div>
  );

export default Page;
