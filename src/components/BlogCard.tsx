import React from 'react';
import Image from 'next/image';
import { BlogItem } from '../../typings';
import { FaUser, FaComments } from 'react-icons/fa';
import Link from 'next/link';

const BlogCard = ({
  image,
  date,
  category,
  author,
  comments,
  title,
  description,
}: BlogItem) => {
  return (
    <div className='blog__card'>
      <div className='blog__image'>
        <Image src={image} alt='team-image' fill />
      </div>
      <span className='blog__date'>{date}</span>
      <div className='blog__body'>
        <Link href={'#'} className='blog__category'>
          {category}
        </Link>
        <h4 className='blog__title'>
          <Link href={'#'}>{title}</Link>
        </h4>
        <p className='blog__description'>{description}</p>
        <Link href={'#'} className='blog__author'>
          {author}
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
