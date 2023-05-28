import BlogCard from '@/components/BlogCard';
import Link from 'next/link';
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

      <div className='blog__content'>
        <div className='blog__big'>
          <BlogCard
            id={1}
            date={'Mar 13, 2023'}
            image='/images/Blog.jpg'
            category='Crime'
            author={'Franklyn Ohai'}
            comments={5}
            title={'Criminal Law and Interpreting the Standard of Proof'}
            description={
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel reiciendis accusamus nostrum hic distinctio dolores magnam laboriosam, deserunt nisi eum rerum dolorem quibusdam.'
            }
            isMini={false}
          />
          <BlogCard
            id={1}
            date={'Mar 13, 2023'}
            image={'/images/Blog.jpg'}
            category='Crime'
            author={'Franklyn Ohai'}
            comments={5}
            title={'Criminal Law and Interpreting the Standard of Proof'}
            description={
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel reiciendis accusamus nostrum hic distinctio dolores magnam laboriosam, deserunt nisi eum rerum dolorem quibusdam.'
            }
            isMini={false}
          />
        </div>
        <div className='blog__small'>
          <BlogCard
            id={1}
            date={'Mar 13, 2023'}
            image={'/images/Blog.jpg'}
            category='Crime'
            author={'Franklyn Ohai'}
            comments={5}
            title={'Criminal and Interpreting the Standard of Proof'}
            description={
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
            }
            isMini={true}
          />
          <BlogCard
            id={1}
            date={'Mar 13, 2023'}
            image={'/images/Blog.jpg'}
            category='Crime'
            author={'Franklyn Ohai'}
            comments={5}
            title={'Criminal and Interpreting the Standard of Proof'}
            description={
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
            }
            isMini={true}
          />
          <BlogCard
            id={1}
            date={'Mar 13, 2023'}
            image={'/images/Blog.jpg'}
            category='Crime'
            author={'Franklyn Ohai'}
            comments={5}
            title={'Criminal and Interpreting the Standard of Proof'}
            description={
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
            }
            isMini={true}
          />
        </div>
      </div>
      <Link href='#' className='blog__button'>
        More from Our Blog
      </Link>
    </section>
  );
};

export default Blog;
