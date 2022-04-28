import React from 'react';
import '../styles/welcomeBanner.scss';
import decor from '../media/svgs/decor.svg';

function WelcomeBanner() {
  return (
    <div className="textDiv">
      <div className="innerTextDiv">
        <h1 className="welcomeText">
          Welcome to Kinross House, the architectural jewel
          {' '}
          <br />
          {' '}
          in Scotland&apos;s crown.
        </h1>
        <img className="miniDecoration" alt="miniDecoration" src={decor} />
      </div>
    </div>
  );
}

export default WelcomeBanner;
