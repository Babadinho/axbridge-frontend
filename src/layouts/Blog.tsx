import React from 'react';
import { TbNews } from 'react-icons/tb';

const Blog = () => {
  return (
    <section className='blog'>
      <div className='blog__header'>
        <h2 className='blog__heading'>
          Latest from <strong>Our Blog</strong>
        </h2>
        <div className='blog__symbol'>
          <span className='blog__line'></span>
          <div className='blog__icon'>
            <span>
              <TbNews />
            </span>
          </div>
          <span className='blog__line'></span>
        </div>
        <p className='blog__summary'>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat.
        </p>
      </div>
    </section>
  );
};

export default Blog;
