'use client';

import SliderDots from '@/components/SliderDots';
import React, { useEffect, useState } from 'react';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import { useSwipeable } from 'react-swipeable';
import Slider from '@/components/Slider';
import { sliderData } from '@/data/sliderData';

const Header = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSlideRight(),
    onSwipedRight: () => handleSlideLeft(),
    swipeDuration: 500,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  const handleSlideLeft = (): void => {
    setActiveIndex(activeIndex - 1);

    if (activeIndex === 1) {
      setActiveIndex(sliderData.length);
    }
  };

  const handleSlideRight = (): void => {
    setActiveIndex(activeIndex + 1);

    if (activeIndex === sliderData.length) {
      setActiveIndex(1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex + 1);

      if (activeIndex === sliderData.length) {
        setActiveIndex(1);
      }
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, [activeIndex]);

  return (
    <section className='header'>
      <div className='header__carousel' {...handlers}>
        <div className='header__overlay'></div>
        {sliderData.map((slide) => (
          <Slider key={slide.id} slide={slide} activeIndex={activeIndex} />
        ))}
      </div>
      <SliderDots
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        sliderData={sliderData}
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
