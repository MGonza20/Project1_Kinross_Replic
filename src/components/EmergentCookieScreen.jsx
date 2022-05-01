import React from 'react';
import '../styles/emergentWindow.scss';

function EmergentCookieScreen() {
  return (
    <div className="emergentWindowDiv">
      <div className="closeBtn">×</div>
      <div className="emergentTitleDiv"><p><b>This website uses cookies</b></p></div>
      <div className="emergentBTDiv">
        <p>
          This website uses cookies to improve user experience. By using our website
          you consent to all cookies in accordance with our Cookie Policy. &nbsp;
          <a href="/">Read more</a>
        </p>
      </div>
      <div className="cookiesBtnsDiv">
        <a href="/" className="aceptBtn cookiesBtnss">
          <strong>ACEPT ALL</strong>
        </a>
        <div className="aceptBtn cookiesBtnss">
          <strong>DECLINE ALL</strong>
        </div>
      </div>
      <div className="showDetsLinkDiv">
        <div><b>SHOW DETAILS</b></div>
      </div>
    </div>
  );
}

export default EmergentCookieScreen;
