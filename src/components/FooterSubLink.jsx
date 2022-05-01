import React from 'react';
import '../styles/subLink.scss';

// eslint-disable-next-line react/prop-types
function FooterSubLink({ text, menuText }) {
  return (
    <li className="subLinkLi">
      <a className={menuText === 'yes' ? 'menuColor' : 'footerFontSize footerSubColor'} href="/">{text}</a>
    </li>
  );
}

export default FooterSubLink;
