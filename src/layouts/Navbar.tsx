import React, { useState } from 'react';
import Link from 'next/link';
import { MdLocationOn } from 'react-icons/md';
import { ImFacebook, ImInstagram, ImTwitter } from 'react-icons/im';
import { IoMdArrowDropup, IoMdArrowDropdown } from 'react-icons/io';

const Navbar = () => {
  const [activeMobileMenu, setActiveMobileMenu] = useState(false);
  const [activeSubMenu, setActiveSubmenu] = useState(false);

  return (
    <div className='navbar'>
      <div className='navbar__wrapper'>
        <div className='navbar__topBar'>
          <div className='navbar__topBarContainer'>
            <div className='navbar__topBarLocation'>
              <span className='navbar__address'>
                <MdLocationOn className='navbar__icon' />
                Plot 596 Independence Avenue, Central Business District, Abuja
              </span>
            </div>
            <div className='navbar__topBarRight'>
              <div className='navbar__socials'>
                <Link href='#'>
                  <ImTwitter size={15} />
                </Link>
                <Link href='#'>
                  <ImFacebook size={15} />
                </Link>
                <Link href='#'>
                  <ImInstagram size={14} />
                </Link>
              </div>
              <div className='navbar__button'>
                <Link href='#'>consult for free</Link>
              </div>
            </div>
          </div>
        </div>
        <div className='navbar__main'>
          <div className='navbar__container'>
            <Link href={'/'} className='navbar__logo'>
              <img src='/images/Logo.png' alt='logo' />
            </Link>
            <div className='navbar__menu'>
              <Link href='#'>about us</Link>
              <span>|</span>
              <Link href='#'>articles</Link>
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
                  <Link href='#'>family law</Link>
                  <span></span>
                  <Link href='#'>criminal law</Link>
                  <span></span>
                  <Link href='#'>civil law</Link>
                  <span></span>
                </span>
              </span>
              <span>|</span>
              <Link href='#'>awards</Link>
              <span>|</span>
              <Link href='#'>contact</Link>
            </div>
            <div className='navbar__mainMobile'>
              <div className='navbar__mainSocials'>
                <Link href='#'>
                  <ImTwitter />
                </Link>
                <Link href='#'>
                  <ImFacebook />
                </Link>
                <Link href='#'>
                  <ImInstagram />
                </Link>
              </div>

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
                <Link href='#'>Articles</Link>
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
                      <span>-</span>family law
                    </Link>
                    <span></span>
                    <Link href='#'>
                      <span>-</span>criminal law
                    </Link>
                    <span></span>
                    <Link href='#'>
                      <span>-</span>civil law
                    </Link>
                    <span></span>
                  </span>
                </span>
                <span className='navbar__dividerMobile'></span>
                <Link href='#'>awards</Link>
                <span className='navbar__dividerMobile'></span>
                <Link href='#'>contact</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
