import React from 'react';
import { IoIosPeople } from 'react-icons/io';

const Team = () => {
  return (
    <section className='team'>
      <div className='team__header'>
        <h2 className='team__heading'>
          Meet <strong>Our Team</strong>
        </h2>
        <div className='team__symbol'>
          <span className='team__line'></span>
          <div className='team__icon'>
            <span>
              <IoIosPeople />
            </span>
          </div>
          <span className='team__line'></span>
        </div>
        <p className='team__summary'>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat.
        </p>
      </div>

      <div className='team__body'>
        <div className='team__content'></div>
      </div>
    </section>
  );
};

export default Team;
