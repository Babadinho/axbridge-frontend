import React from 'react';
import { TestimonialItem } from '../../typings';
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';

const TestimonialCard = (testimonial: TestimonialItem) => {
  const { title, description, author, company } = testimonial;
  return (
    <div className='testimonials__content'>
      <span className='testimonials__quoteLeft'>
        <RiDoubleQuotesL />
      </span>
      <span className='testimonials__quoteRight'>
        <RiDoubleQuotesR />
      </span>
      <h4 className='testimonials__title'>{title}</h4>
      <p className='testimonials__description'>{description}</p>
      <span className='testimonials__author'>{author}</span>
      <span className='testimonials__company'>{company}</span>
    </div>
  );
};

export default TestimonialCard;
