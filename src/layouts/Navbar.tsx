'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MdLocationPin, MdOutlineSmartphone } from 'react-icons/md';
import { ImFacebook, ImInstagram, ImTwitter } from 'react-icons/im';
import { IoMdArrowDropdown } from 'react-icons/io';
import { FaRegUserCircle, FaTiktok } from 'react-icons/fa';
import { BiLogIn } from 'react-icons/bi';
import useCurrentUser from '@/hooks/useCurrentUser';

const Navbar = () => {
  const { data: currentUser } = useCurrentUser();
  const [activeMobileMenu, setActiveMobileMenu] = useState(false);
  const [activeSubMenu, setActiveSubmenu] = useState(false);

  return (
    <div className='navbar'>
      <div className='navbar__wrapper'>
        <div className='navbar__topBar'>
          <div className='navbar__topBarContainer'>
            <div className='navbar__topBarDetails'>
              <div className='navbar__topBarDetailsWrapper'>
                <span className='navbar__topBarIcon'>
                  <MdOutlineSmartphone />
                </span>
                <div className='navbar__topBarDetailsItem'>
                  <span className='navbar__topBarDetailsItem--Main'>
                    +234 900 234 5675
                  </span>
                  <span className='navbar__topBarDetailsItem--Sub'>
                    legal@axbridgepartners.com
                  </span>
                </div>
              </div>
              <div className='navbar__topBarDetailsWrapper'>
                <span className='navbar__topBarIcon'>
                  <MdLocationPin />
                </span>
                <div className='navbar__topBarDetailsItem'>
                  <span className='navbar__topBarDetailsItem--Main'>
                    Plot 596 Independence Avenue
                  </span>
                  <span className='navbar__topBarDetailsItem--Sub'>
                    Central Business District, Abuja
                  </span>
                </div>
              </div>
            </div>
            <div className='navbar__topBarRight'>
              <div className='navbar__socials'>
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
          </div>
        </div>
        <div className='navbar__main'>
          <div className='navbar__container'>
            <Link href={'/'} className='navbar__logo'>
              <Image src='/images/Logo.png' alt='logo' width={85} height={50} />
            </Link>
            <div className='navbar__menu'>
              <Link href='#'>about us</Link>
              <span>|</span>
              <Link href='#'>Blog</Link>
              <span>|</span>
              <span
                className='navbar__menuItem'
                onMouseOver={() => setActiveSubmenu(true)}
                onMouseLeave={() => setActiveSubmenu(false)}
              >
                <Link href='#'>
                  practice areas <IoMdArrowDropdown className='navbar__arrow' />
                </Link>
                <span
                  className={`navbar__submenu ${
                    activeSubMenu && 'navbar__submenu--active'
                  }`}
                >
                  <Link href='#'>family</Link>
                  <span></span>
                  <Link href='#'>criminal</Link>
                  <span></span>
                  <Link href='#'>business</Link>
                </span>
              </span>
              <span>|</span>
              <Link href='#'>awards</Link>
              <span>|</span>
              <Link href='#'>contact</Link>
              <span>|</span>
              {currentUser ? (
                <Link href='/account' className='navbar__account'>
                  <FaRegUserCircle />
                  Account
                </Link>
              ) : (
                <Link href='/login' className='navbar__login'>
                  <BiLogIn />
                  Login
                </Link>
              )}
            </div>
            <div className='navbar__mainMobile'>
              <div
                className={`navbar__hamburger ${
                  activeMobileMenu && 'navbar__hamburger--active'
                }`}
                onClick={() => setActiveMobileMenu(!activeMobileMenu)}
              >
                <span className='navbar__hamburger--line'></span>
                <span className='navbar__hamburger--line'></span>
                <span className='navbar__hamburger--line'></span>
              </div>

              <div
                className={`navbar__hamburgerMenu ${
                  activeMobileMenu && 'navbar__hamburgerMenu--active'
                }`}
              >
                <Link href='#'>about us</Link>
                <span className='navbar__dividerMobile'></span>
                <Link href='#'>Blog</Link>
                <span className='navbar__dividerMobile'></span>
                <span className='navbar__mobileMenuItem'>
                  <Link
                    href='#'
                    onClick={() => setActiveSubmenu(!activeSubMenu)}
                  >
                    practice areas{' '}
                    <IoMdArrowDropdown
                      className={`navbar__arrowMobile ${
                        activeSubMenu && 'navbar__arrowMobile--active'
                      }`}
                    />
                  </Link>
                  <span
                    className={`navbar__mobileSubMenu ${
                      activeSubMenu && 'navbar__mobileSubMenu--active'
                    }`}
                  >
                    <Link href='#'>
                      <span>-</span>family
                    </Link>
                    <span></span>
                    <Link href='#'>
                      <span>-</span>criminal
                    </Link>
                    <span></span>
                    <Link href='#'>
                      <span>-</span>business
                    </Link>
                    <span></span>
                  </span>
                </span>
                <span className='navbar__dividerMobile'></span>
                <Link href='#'>awards</Link>
                <span className='navbar__dividerMobile'></span>
                <Link href='#'>contact</Link>
                <span className='navbar__dividerMobile'></span>
                {currentUser ? (
                  <Link href='/account' className='navbar__account'>
                    <FaRegUserCircle />
                    Account
                  </Link>
                ) : (
                  <Link href='/login' className='navbar__login'>
                    <BiLogIn />
                    Login
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
