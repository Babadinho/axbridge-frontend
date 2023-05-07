import Link from 'next/link';
import React from 'react';
import { TbBrandTelegram } from 'react-icons/tb';

const Contact = () => {
  return (
    <section className='contact'>
      <div className='contact__wrapper'>
        <div className='contact__text'>
          We offer our expertise and support to help you navigate any legal
          challenges.
        </div>
        <Link href='#' className='contact__button'>
          Contact Us
        </Link>
      </div>
    </section>
  );
};

export default Contact;
