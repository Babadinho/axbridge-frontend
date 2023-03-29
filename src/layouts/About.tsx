import React from 'react';
import { GoLaw } from 'react-icons/go';
import { GiCheckMark } from 'react-icons/gi';
import Image from 'next/image';

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

      <div className='about__body'>
        <div className='about__imageContainer'>
          <span className='about__imageUnderlay'></span>
          <Image src='/images/About.jpg' alt='About Axbridge partners' fill />
        </div>

        <div className='about__content'>
          <h2 className='about__title'>Our Legacy Preceeds Us</h2>
          <p className='about__description'>
            Velit esse molestie consequat, vel illum dolore eu feugiat nulla
            facilisis at vero eros et accumsan et iusto odio di gnissim qui
            blandit praesent luptatum zzril delenit augu. Mirum est notare quam
            littera gothica, quam nunc putamus parum claram, anteposu litterarum
            formas humanitatis per seacula quarta decima et.
          </p>
          <div className='about__list'>
            <span className='about__listItem'>
              <GiCheckMark size={15} className='about__check' /> Expert in
              various fields
            </span>
            <span className='about__listItem'>
              <GiCheckMark size={15} className='about__check' /> Free counciling
              and support
            </span>
          </div>
          <a href='#' className='about__button'>
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
