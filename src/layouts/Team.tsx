'use client';

import React, { useRef } from 'react';
import { IoIosPeople } from 'react-icons/io';
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/css/pagination';
import { teamData } from '../data/teamData';
import TeamCard from '@/components/TeamCard';

const Team = () => {
  const swiperRef = useRef<SwiperRef>(null);

  return (
    <section className='team'>
      <div className='team__header'>
        <h2 className='team__heading'>
          Meet <strong>Our Team</strong>
        </h2>
        <div className='team__symbol'>
          <span className='team__line'></span>
          <div className='team__icon'>
            <span>
              <IoIosPeople />
            </span>
          </div>
          <span className='team__line'></span>
        </div>
        <p className='team__summary'>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat.
        </p>
      </div>

      <div className='team__content'>
        <Swiper
          slidesPerView={1}
          spaceBetween={25}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className='team__swiper'
          breakpoints={{
            1200: {
              slidesPerView: 3,
            },
            800: {
              slidesPerView: 2,
            },
          }}
          ref={swiperRef}
        >
          {teamData.map((team) => (
            <SwiperSlide className='team__card' key={team.id}>
              <TeamCard {...team} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Team;
