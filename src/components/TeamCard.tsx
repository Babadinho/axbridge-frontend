import React from 'react';
import Image from 'next/image';
import { TeamItem } from '../../typings';
import Link from 'next/link';
import { ImFacebook, ImInstagram, ImTwitter } from 'react-icons/im';

const TeamCard = (team: TeamItem) => {
  const { image, name, role, facebook, twitter, instagram } = team;
  return (
    <>
      <div className='team__image'>
        <Image src={image} alt='team-image' fill />
        <div className='team__details'>
          <div className='team__socials'>
            <Link href={facebook} className='team__facebook'>
              <ImFacebook />
            </Link>
            <Link href={twitter} className='team__twitter'>
              <ImInstagram />
            </Link>
            <Link href={instagram} className='team__instagram'>
              <ImTwitter />
            </Link>
          </div>
        </div>
      </div>
      <div className='team__info'>
        <div className='team__name'>{name}</div>
        <div className='team__role'>{role}</div>
      </div>
    </>
  );
};

export default TeamCard;
