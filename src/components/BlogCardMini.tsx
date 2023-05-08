import React from 'react';
import Image from 'next/image';
import { BlogItem } from '../../typings';
import Link from 'next/link';
import { FaComments, FaUser } from 'react-icons/fa';

const BlogCardMini = ({
  image,
  date,
  author,
  category,
  comments,
  title,
  description,
}: BlogItem) => {
  return (
    <div className='blog__cardMini'>
      <div className='blog__imageMini'>
        <Image src={image} alt='team-image' fill />
        <div className='blog__imageMiniOverlay'></div>
        <span className='blog__dateMini'>{date}</span>
      </div>

      <div className='blog__bodyMini'>
        <Link href={'#'} className='blog__categoryMini'>
          {category}
        </Link>
        <h4 className='blog__titleMini'>
          <Link href={'#'}>{title}</Link>
        </h4>
        <p className='blog__descriptionMini'>{description}</p>
        <Link href={'#'} className='blog__authorMini'>
          {author}
        </Link>
      </div>
    </div>
  );
};

export default BlogCardMini;
