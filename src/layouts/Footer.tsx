import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaTiktok } from 'react-icons/fa';
import { ImTwitter, ImFacebook, ImInstagram } from 'react-icons/im';
import {
  MdOutlineLocationOn,
  MdPhoneIphone,
  MdOutlineEmail,
  MdArrowRight,
  MdOutlineAccessTime,
} from 'react-icons/md';

const Footer = () => {
  return (
    <section className='footer'>
      <div className='footer__content'>
        <div className='footer__about'>
          <Link href={'/'} className='footer__logo'>
            <Image src='/images/Logo.png' alt='logo' width={85} height={50} />
          </Link>
          <div className='footer__about--body'>
            Velit esse molestie consequat, vel illum dolore eu feugiat nulla
            facilisis at vero eros et accumsan et iusto odio di gnissim qui
            blandit praesent luptatum zzril delenit augu.
          </div>
          <div className='footer__about--socials'>
            <Link href='#'>
              <ImTwitter size={17} />
            </Link>
            <Link href='#'>
              <ImFacebook size={17} />
            </Link>
            <Link href='#'>
              <ImInstagram size={17} />
            </Link>
            <Link href='#'>
              <FaTiktok size={17} />
            </Link>
          </div>
        </div>
        <div className='footer__contact'>
          <h5 className='footer__header'>Get in Touch</h5>
          <div className='footer__contact--body'>
            <div className='footer__contact--address'>
              <span>
                <MdOutlineLocationOn /> Plot 596 Independence Avenue
              </span>
              <span>Central Business District, Abuja</span>
            </div>
            <div className='footer__contact--phone'>
              <MdPhoneIphone /> +234 900 234 5675
            </div>
            <div className='footer__contact--email'>
              <MdOutlineEmail /> legal@axbridgepartners.com
            </div>
            <div className='footer__contact--time'>
              <MdOutlineAccessTime /> Sat - Mon
            </div>
          </div>
        </div>

        <div className='footer__newsletter'>
          <h5 className='footer__header'>Newsletter</h5>
          <span className='footer__newsletter--text'>
            Signup for our newsletter to get the latest news, updates and
            special offers in your inbox.
          </span>

          <form>
            <input type='text' placeholder='enter your email' />
            <Link href='#' className='footer__newsletter--button'>
              Submit
            </Link>
          </form>
        </div>

        <div className='footer__links'>
          <h5 className='footer__header'>Quick Links</h5>
          <div className='footer__links--links'>
            <Link href='#'>
              <MdArrowRight /> about us
            </Link>
            <Link href='#'>
              <MdArrowRight />
              articles
            </Link>
            <Link href='#'>
              <MdArrowRight />
              practice areas
            </Link>
            <Link href='#'>
              <MdArrowRight />
              awards
            </Link>
            <Link href='#'>
              <MdArrowRight />
              contact
            </Link>
          </div>
        </div>
      </div>

      <div className='footer__bottom'>
        <div className='footer__bottom--text'>
          Axbridge Partners © All Rights Reserved
        </div>
      </div>
    </section>
  );
};

export default Footer;
