'use client';

import React from 'react';
import TestimonialCard from '@/components/TestimonialCard';
import { testimonials } from '@/data/testimonialsData';
import { BiHappyAlt } from 'react-icons/bi';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/css/pagination';

const Testimonials = () => {
  SwiperCore.use([Autoplay]);

  return (
    <section className='testimonials'>
      <div className='testimonials__header'>
        <h2 className='testimonials__heading'>
          Our <strong>Happy Clients</strong>
        </h2>
        <div className='testimonials__symbol'>
          <span className='testimonials__line'></span>
          <div className='testimonials__icon'>
            <span>
              <BiHappyAlt />
            </span>
          </div>
          <span className='testimonials__line'></span>
        </div>
        <p className='testimonials__summary'>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat.
        </p>
      </div>

      <div className='testimonials__body'>
        <Swiper
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          //   autoplay={{
          //     delay: 5000,
          //     disableOnInteraction: false,
          //   }}
          modules={[Autoplay, Pagination]}
          className='testimonials__swiper'
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <TestimonialCard {...testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
