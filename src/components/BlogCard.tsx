import React from 'react';
import Image from 'next/image';
import { BlogItem } from '../../typings';
import { FaComments } from 'react-icons/fa';
import Link from 'next/link';

const BlogCard = ({
  image,
  date,
  category,
  author,
  comments,
  title,
  description,
  isMini,
}: BlogItem) => {
  return (
    <div className={isMini ? 'blog__cardMini' : 'blog__card'}>
      <div className={isMini ? 'blog__imageMini' : 'blog__image'}>
        <Image src={image} alt='team-image' fill />
        <div className='blog__imageOverlay'></div>
        <span className={isMini ? 'blog__dateMini' : 'blog__date'}>{date}</span>
      </div>
      <div className={isMini ? 'blog__bodyMini' : 'blog__body'}>
        <Link
          href={'#'}
          className={isMini ? 'blog__categoryMini' : 'blog__category'}
        >
          {category}
        </Link>
        <h4 className={isMini ? 'blog__titleMini' : 'blog__title'}>
          <Link href={'#'}>{title}</Link>
        </h4>
        <p className={isMini ? 'blog__descriptionMini' : 'blog__description'}>
          {description}
        </p>
        <Link
          href={'#'}
          className={isMini ? 'blog__authorMini' : 'blog__author'}
        >
          {author}
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
