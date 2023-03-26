import SliderDots from '@/components/SliderDots';
import React, { useState } from 'react';
import { Carousel } from '../../typings';

const Header = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const carouselContent: Carousel = [
    {
      id: 1,
      title: 'design and order your new kitchen today',
      description: 'bespoke & made to measure handmade kitchen design',
      image: '/images/Slide1.jpg',
      button: 'Read More',
    },
    {
      id: 2,
      title: 'design and order your new kitchen today',
      description: 'bespoke & made to measure handmade kitchen design',
      image: '/images/Slide2.jpg',
      button: 'Read More',
    },
    // {
    //   id: 3,
    //   title: 'design and order your new kitchen today',
    //   description: 'bespoke & made to measure handmade kitchen design',
    //   image: '/images/slide3.png',
    //   button: 'Read More',
    // },
  ];

  return (
    <section className='header'>
      <div className='header'>
        <div className='header__carousel'>
          {carouselContent.map((slide) => (
            <div
              key={slide.id}
              className={`${
                slide.id === activeIndex
                  ? 'header__carouselItem header__carouselItem--active'
                  : 'header__carouselItem--inactive'
              }`}
            >
              <img
                src={slide.image}
                alt='header-carousel-image'
                className='header__carouselItem__image'
              />
              <div className='header__carouselItem__content'>
                <h2 className='header__carouselItem__title'>{slide.title}</h2>
                <h2 className='header__carouselItem__description'>
                  {slide.description}
                </h2>
                {slide.button}
              </div>
            </div>
          ))}
        </div>
        <SliderDots
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          carouselContent={carouselContent}
        />
      </div>
    </section>
  );
};

export default Header;
