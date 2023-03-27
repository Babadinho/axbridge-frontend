import SliderDots from '@/components/SliderDots';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Carousel } from '../../typings';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';

const Header = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const carouselContent: Carousel = [
    {
      id: 1,
      title: 'the voice of justice',
      subtitle: '24 hours legal services',
      description:
        "When you go into court you are putting your fate into the hands of twelve people who weren't smart enough to get out of jury duty.",
      image: '/images/Slide1.jpg',
      button: 'Read More',
    },
    {
      id: 2,
      title: 'the voice of justice',
      subtitle: '24 hours legal services',
      description:
        "When you go into court you are putting your fate into the hands of twelve people who weren't smart enough to get out of jury duty.",
      image: '/images/Slide2.jpg',
      button: 'Read More',
    },
    {
      id: 3,
      title: 'the voice of justice',
      subtitle: '24 hours legal services',
      description:
        "When you go into court you are putting your fate into the hands of twelve people who weren't smart enough to get out of jury duty.",
      image: '/images/Slide3.jpg',
      button: 'Read More',
    },
  ];

  const handleSlideLeft = (): void => {
    setActiveIndex(activeIndex - 1);

    if (activeIndex === 1) {
      setActiveIndex(carouselContent.length);
    }
  };

  const handleSlideRight = (): void => {
    setActiveIndex(activeIndex + 1);

    if (activeIndex === carouselContent.length) {
      setActiveIndex(1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex + 1);

      if (activeIndex === carouselContent.length) {
        setActiveIndex(1);
      }
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, [activeIndex]);

  return (
    <section className='header'>
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
              className='header__carouselItemImage'
            />
            <div className='header__carouselItemContent'>
              <h2 className='header__carouselItemTitle'>{slide.title}</h2>
              <h2 className='header__carouselItemSubtitle'>{slide.subtitle}</h2>
              <h2 className='header__carouselItemDescription'>
                {slide.description}
              </h2>
              <Link href='#' className='header__carouselItemButton'>
                {slide.button}
              </Link>
            </div>
          </div>
        ))}
      </div>
      <SliderDots
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        carouselContent={carouselContent}
      />
      <div className='header__arrows'>
        <div className='header__leftArrow' onClick={handleSlideLeft}>
          <SlArrowLeft />
        </div>
        <div className='header__rightArrow' onClick={handleSlideRight}>
          <SlArrowRight />
        </div>
      </div>
    </section>
  );
};

export default Header;
