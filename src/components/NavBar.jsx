/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import '../styles/navBar.scss';
import kinrossMainLogo from '../media/svgs/kinross-house-logo.svg';
import '../styles/navBarButtons.scss';

function NavBar({ onAdd, show }) {
  const [background, setBackground] = useState(false);

  const addBackground = () => {
    if (window.scrollY >= 90) {
      setBackground(true);
    } else {
      setBackground(false);
    }
  };

  window.addEventListener('scroll', addBackground);

  return (
    <nav className={background ? 'navbar sticky' : 'navbar'}>
      <div className={background ? 'toggleBtnContB' : 'toggleBtnCont'}>
        <div onClick={onAdd} tabIndex={0} onKeyPress className={show ? 'hamBtnCont open' : 'hamBtnCont'} role="button">
          <div className="hamBtn" />
        </div>
      </div>
      <div className="logo">
        {' '}
        <img src={kinrossMainLogo} alt="kinross-main-logo-img" className={background ? 'littleLogo' : 'kinRossImg'} />
        {' '}
      </div>
      <div className={background ? 'navBodyContChanged' : 'navBodyCont'}>
        <div className="navBody">
          <a className="navButton" href="/">
            <strong>
              ESTATE HIRE
            </strong>
          </a>
          <a className="navButton secondBtn" href="/">
            <strong>
              SPA BOOKINGS
            </strong>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
