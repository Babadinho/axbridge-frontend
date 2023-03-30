import React from 'react';
import { GiThorHammer } from 'react-icons/gi';

const Practice = () => {
  return (
    <section className='practice'>
      <div className='practice__header'>
        <h2 className='practice__heading'>
          Our <strong>Practice Areas</strong>
        </h2>
        <div className='practice__symbol'>
          <span className='practice__line'></span>
          <div className='practice__icon'>
            <span>
              <GiThorHammer />
            </span>
          </div>
          <span className='practice__line'></span>
        </div>
        <p className='practice__summary'>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat.
        </p>
      </div>
    </section>
  );
};

export default Practice;
