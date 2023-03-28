import SliderDots from '@/components/SliderDots';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Carousel } from '../../typings';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import { motion } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';

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
      animation: {
        hidden: {
          opacity: 0,
          y: 10,
        },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            ease: [0.2, 0.05, 0.05, 0.01],
            duration: 1,
          },
        },
        exit: {
          opacity: 0,
          y: -50,
          transition: {
            ease: 'easeInOut',
            duration: 0.8,
          },
        },
      },
    },
    {
      id: 2,
      title: 'the voice of justice',
      subtitle: '24 hours legal services',
      description:
        "When you go into court you are putting your fate into the hands of twelve people who weren't smart enough to get out of jury duty.",
      image: '/images/Slide2.jpg',
      button: 'Read More',
      animation: {
        hidden: {
          opacity: 0,
          scale: 0.8,
        },
        show: {
          opacity: 1,
          scale: 1,
          transition: {
            ease: [0.2, 0.05, 0.05, 0.01],
            duration: 1,
          },
        },
        exit: {
          opacity: 0,
          scale: 1.2,
          transition: {
            ease: 'easeInOut',
            duration: 0.8,
          },
        },
      },
    },
    {
      id: 3,
      title: 'the voice of justice',
      subtitle: '24 hours legal services',
      description:
        "When you go into court you are putting your fate into the hands of twelve people who weren't smart enough to get out of jury duty.",
      image: '/images/Slide3.jpg',
      button: 'Read More',
      animation: {
        hidden: {
          opacity: 0,
          x: -100,
        },
        show: {
          opacity: 1,
          x: 0,
          transition: {
            ease: [0.2, 0.05, 0.05, 0.01],
            duration: 1,
          },
        },
        exit: {
          opacity: 0,
          x: -100,
          transition: {
            ease: 'easeInOut',
            duration: 0.8,
          },
        },
      },
    },
  ];

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

  const container = {
    show: {
      transition: {
        staggerChildren: 0.35,
      },
    },
  };

  return (
    <section className='header'>
      <div className='header__carousel' {...handlers}>
        <div className='header__overlay'></div>
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
            <motion.div
              variants={container}
              initial='hidden'
              animate='show'
              exit='exit'
              key={activeIndex}
            >
              <div className='header__carouselItemContent'>
                <motion.div variants={slide.animation}>
                  <h2 className='header__carouselItemTitle'>{slide.title}</h2>
                </motion.div>
                <motion.div variants={slide.animation}>
                  <h2 className='header__carouselItemSubtitle'>
                    {slide.subtitle}
                  </h2>
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
