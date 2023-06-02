import { Footer, Navbar } from '../../components';
import { About, Experience, Feedback, GetStarted, Insights, Roadmap, World } from '../../sections';
import Certificates from '../../sections/Certificates';
import DataAnalytics from '../../sections/DataAnalytics';
import Testimonial from '../../sections/Testimonial';
import Countdown from '../../sections/Countdown';
import GradAdmission from '../../sections/GradAdmission';
import GradHero from '../../sections/GradHero';
import LogoSlider from '../../sections/LogoSlider';

const Page = () => (
    <div className="bg-trainity-dark overflow-hidden">
      <Navbar />
      <GradHero />
      <About />
      <LogoSlider/ >
      <Experience />
      <Roadmap />
      <GetStarted />
      <World />
      <Insights />
      <Countdown />
      <Certificates />
      <GradAdmission />
      <Feedback />
      <DataAnalytics />
      <Testimonial />
      <Footer />
    </div>
  );

export default Page;
