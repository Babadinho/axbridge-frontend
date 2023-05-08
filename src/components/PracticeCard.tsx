import React from 'react';
import Image from 'next/image';
import { PracticeItem } from '../../typings';

const PracticeCard = (practice: PracticeItem) => {
  const { image, icon, title, description, link } = practice;
  return (
    <>
      <div className='practice__card'>
        <Image
          src={image}
          alt='practice-image'
          className='practice__image'
          fill
        />
        <div className='practice__cardOverlay'>
          <>
            <div className='practice__bodyHeader'>
              <span className='practice__bodyIcon'>{icon}</span>
              <h2 className='practice__title'>{title}</h2>
            </div>
            <p className='practice__description'>{description}</p>
            <a href={link} className='practice__link'>
              Read More
            </a>
          </>
        </div>
      </div>
    </>
  );
};

export default PracticeCard;
