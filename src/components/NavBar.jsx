/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import '../styles/navBar.scss';
import kinrossMainLogo from '../media/svgs/kinross-house-logo.svg';
import '../styles/navBarButtons.scss';

function NavBar({ onAdd }) {
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
      <div className="buttons">
        <button className="btn" type="button" onClick={onAdd}>Btn</button>
      </div>
      <div className="logo">
        {' '}
        <img src={kinrossMainLogo} alt="kinross-main-logo-img" className={background ? 'littleLogo' : 'kinRossImg'} />
        {' '}
      </div>
      <div className={background ? 'navBodyContChanged' : 'navBodyContChanged'}>
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
