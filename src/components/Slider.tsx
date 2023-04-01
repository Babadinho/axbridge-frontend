import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { SliderProps } from '../../typings';

const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const Slider = ({ slide, activeIndex }: SliderProps) => {
  return (
    <>
      <div
        key={slide.id}
        className={`${
          slide.id === activeIndex
            ? 'header__carouselItem header__carouselItem--active'
            : 'header__carouselItem--inactive'
        }`}
      >
        <motion.div
          variants={container}
          initial='hidden'
          animate='show'
          exit='exit'
          key={activeIndex}
        >
          <img
            src={slide.image}
            alt='header-carousel-image'
            className='header__carouselItemImage'
          />

          <div className='header__carouselItemContent'>
            <motion.div variants={slide.animation}>
              <h2 className='header__carouselItemTitle'>{slide.title}</h2>
            </motion.div>
            <motion.div variants={slide.animation}>
              <h2 className='header__carouselItemSubtitle'>{slide.subtitle}</h2>
            </motion.div>
            <motion.div variants={slide.animation}>
              <h2 className='header__carouselItemDescription'>
                {slide.description}
              </h2>
            </motion.div>
            <motion.div variants={slide.animation}>
              <Link href='#' className='header__carouselItemButton'>
                {slide.button}
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Slider;
