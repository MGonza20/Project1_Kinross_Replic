import React from 'react';
import kinrossFooterIcon from '../media/svgs/kh-footer-icon.svg';
import Links from './Links';

function Footerr() {
  return (
    <div className="footer">
      <div className="iconFooter">
        <img alt="kinrossIcon" className="imgIconFooter" src={kinrossFooterIcon} />
      </div>

      <footer className="footerCont">
        <Links />
      </footer>
    </div>
  );
}

export default Footerr;
