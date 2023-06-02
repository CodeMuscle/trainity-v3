'use client';

import { tricardFeatures } from "../constants";

import AboutCard from "../components/AboutCard";

const About = () => {
  return(
  <section>
    <div className=" sm:mx-auto md:mx-auto mx-0 self-center sm:justify-between md:justify-between justify-center align-center">
      <div className="flex flex-row align-center sm:justify-between md:justify-between px-0 w-100 sm:px-5 md:px-5">
      {tricardFeatures.map((card, index) => (
        <AboutCard 
          key={card.id}
          {...card}
          index = {index}
        />
        ) 
      )}
        
      </div>
    </div>
  </section>
  )
}

export default About;
