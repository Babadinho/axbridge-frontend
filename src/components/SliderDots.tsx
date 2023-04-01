import React from 'react';

const SliderDots = ({ activeIndex, setActiveIndex, sliderData }: any) => {
  return (
    <div className='header__carouselDots'>
      {sliderData.map((slide: any) => (
        <span
          key={slide.id}
          className={`${
            activeIndex === slide.id
              ? 'header__carouselDot header__carouselDot--active'
              : 'header__carouselDot'
          }`}
          onClick={() => {
            setActiveIndex(slide.id);
          }}
        ></span>
      ))}
    </div>
  );
};

export default SliderDots;
