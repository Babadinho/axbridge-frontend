import React from 'react';

const SliderDots = ({ activeIndex, setActiveIndex, carouselContent }: any) => {
  return (
    <div className='header-carousel__dots'>
      {carouselContent.map((slide: any) => (
        <span
          key={slide.id}
          className={`${
            activeIndex === slide.id
              ? 'header-carousel__dot header-carousel__dot--active'
              : 'header-carousel__dot'
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
