import React from 'react';
import kinrossFooterIcon from '../media/svgs/kh-footer-icon.svg';
import Links from './Links';
import '../styles/foo.scss';
import News from './News';
import FooterMiniTexts from './FooterMiniTexts';
import '../styles/footerMiniTexts.scss';

function Footerr() {
  return (
    <div className="footer">
      <div className="iconFooter">
        <img alt="kinrossIcon" className="imgIconFooter" src={kinrossFooterIcon} />
      </div>

      <footer className="footerCont">
        <Links />
        <div>
          <News />
          <FooterMiniTexts />
        </div>
      </footer>
    </div>
  );
}

export default Footerr;
