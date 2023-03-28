import React from 'react';
import { GoLaw } from 'react-icons/go';

const About = () => {
  return (
    <section className='about'>
      <div className='about__header'>
        <h2 className='about__heading'>
          About <strong>Axbridge Partners</strong>
        </h2>
        <div className='about__symbol'>
          <span className='about__line'></span>
          <div className='about__icon'>
            <span>
              <GoLaw />
            </span>
          </div>
          <span className='about__line'></span>
        </div>
        <p className='about__summary'>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat.
        </p>
      </div>
    </section>
  );
};

export default About;
