'use client';

import { tricardFeatures } from "../constants";

import AboutCard from "../components/AboutCard";

const About = () => {
  return(
  <section>
    <div className="mx-auto flex justify-between align-center">
      <div className="flex flex-1 align-center justify-between px-5">
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
