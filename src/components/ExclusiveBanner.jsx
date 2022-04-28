import React from 'react';
import '../styles/exclusiveBanner.scss';

function ExclusiveBanner() {
  return (
    <div className="exclusiveCont">
      <h1 className="mainTextBanner">
        Exclusive Use of Kinross House
      </h1>
      <p className="smallText">The estate offers exclusive hire of Kinross House and The Coach House, or indeed both for those wishing to hire the full estate.</p>
      <a className="buttonExclusive" href="/">
        <strong>
          ESTATE HIRE
          &nbsp;
          &nbsp;
          &#10230;
        </strong>
      </a>
    </div>
  );
}

export default ExclusiveBanner;
