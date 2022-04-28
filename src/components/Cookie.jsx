import React from 'react';
import CookieImg from '../media/images/cookie-icon-kinross-house-1.png';
import '../styles/cookie.scss';

function Cookie() {
  return (
    <div className="cookieContent">
      <li>
        {' '}
        <a href="/">
          {' '}
          <img className="cookieBtn" src={CookieImg} alt="cookieImg" />
          {' '}
        </a>
        {' '}
      </li>
    </div>
  );
}

export default Cookie;
