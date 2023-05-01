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
        <span className='blog__dateMini'>{date}</span>
      </div>

      <div className='blog__infoMini'>
        <h4 className='blog__titleMini'>{title}</h4>
        <div className='blog__dataMini'>
          <Link href={'#'} className='blog__categoryMini'>
            {category}
          </Link>
          <Link href={'#'} className='blog__authorMini'>
            <FaUser />
            by {author}
          </Link>
          <span className='blog__commentsMini'>
            <FaComments />
            {comments}
          </span>
        </div>
        {/* <p className='blog__descriptionMini'>{description}</p> */}
      </div>
    </div>
  );
};

export default BlogCardMini;
