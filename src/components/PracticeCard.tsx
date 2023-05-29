import React from 'react';
import { PracticeItem } from '../../typings';

const PracticeCard = (practice: PracticeItem) => {
  const { icon, title, description, link } = practice;
  return (
    <>
      <div className='practice__card'>
        <div className='practice__cardBody'>
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
