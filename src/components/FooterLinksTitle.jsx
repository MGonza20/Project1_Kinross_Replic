import React from 'react';
import '../styles/linksTitle.scss';

// eslint-disable-next-line react/prop-types
function FooterLinksTitle({ text, menuText }) {
  return (
    <li className="linksTitle">
      <a className={menuText === 'yes' ? 'menuColorTitle' : ''} href="/">{text}</a>
    </li>
  );
}

export default FooterLinksTitle;
