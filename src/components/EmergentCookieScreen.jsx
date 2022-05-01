import React from 'react';
import '../styles/emergentWindow.scss';

// eslint-disable-next-line react/prop-types
function EmergentCookieScreen({ closeW, window }) {
  return (
    <div className={window ? 'emergentWindowDiv' : 'windowClose'}>
      <div className="closeBtn" onClick={closeW} onKeyPress role="button" tabIndex={0}>×</div>
      <div className="emergentTitleDiv"><p><b>This website uses cookies</b></p></div>
      <div className="emergentBTDiv">
        <p>
          This website uses cookies to improve user experience. By using our website
          you consent to all cookies in accordance with our Cookie Policy. &nbsp;
          <a href="/" onClick={closeW} onKeyPress role="button" tabIndex={0}>Read more</a>
        </p>
      </div>
      <div className="cookiesBtnsDiv">
        <a href="/" className="aceptBtn cookiesBtnss" onClick={closeW} onKeyPress role="button" tabIndex={0}>
          <strong>ACCEPT ALL</strong>
        </a>
        <a href="/" className="cookiesBtnss" onClick={closeW} onKeyPress role="button" tabIndex={0}>
          <strong>DECLINE ALL</strong>
        </a>
      </div>
      <div className="showDetsLinkDiv" onClick={closeW} onKeyPress role="button" tabIndex={0}>
        <div><b>SHOW DETAILS</b></div>
      </div>
    </div>
  );
}

export default EmergentCookieScreen;
