import { Carousel } from '../../typings';

export const sliderContent: Carousel = [
  {
    id: 1,
    title: (
      <span>
        the <strong>voice</strong> of <strong>justice</strong>
      </span>
    ),
    subtitle: '24 hours legal services',
    description:
      "When you go into court you are putting your fate into the hands of twelve people who weren't smart enough to get out of jury duty.",
    image: '/images/Slide1.jpg',
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
    id: 2,
    title: (
      <span>
        the <strong>voice</strong> of <strong>justice</strong>
      </span>
    ),
    subtitle: '24 hours legal services',
    description:
      "When you go into court you are putting your fate into the hands of twelve people who weren't smart enough to get out of jury duty.",
    image: '/images/Slide2.jpg',
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
    id: 3,
    title: (
      <span>
        the <strong>voice</strong> of <strong>justice</strong>
      </span>
    ),
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
