import React from 'react';
import cookie from '../media/images/cookie-icon-kinross-house-1.png';
import '../styles/cookie.scss';

// eslint-disable-next-line react/prop-types
function Cookie({ openW, window }) {
  return (
    <div
      className={window ? 'notCookie' : 'cookieContent'}
      role="button"
      onClick={openW}
      onKeyPress
      tabIndex="0"
    >
      <img src={cookie} className="cookieBtn" alt="cookie-btn" />
    </div>
  );
}

export default Cookie;
