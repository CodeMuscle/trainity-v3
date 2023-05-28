import { Footer, Navbar } from '../../components';
import DAAdmission from '../../sections/DAAdmission';
import DACareer from '../../sections/DACareer';
import DAHome from '../../sections/DAHome';
import DAJourney from '../../sections/DAJourney';
import DATricard from '../../sections/DATricard';


const Page = () => (
    <div className="bg-trainity-dark overflow-hidden">
      <Navbar />
      <DAHome />
      <DATricard />
      <DACareer />
      <DAJourney />
      <DAAdmission />
      <Footer />
    </div>
  );

export default Page;
