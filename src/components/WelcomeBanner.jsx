import React from 'react';
import '../styles/welcomeBanner.scss';
import decor from '../media/svgs/decor.svg';

// eslint-disable-next-line react/prop-types
function WelcomeBanner({ propR }) {
  return (
    <div className="textDiv">
      <div className="innerTextDiv">
        <h1 ref={propR} className="welcomeText">
          Welcome to Kinross House, the architectural jewel
          {' '}
          <br />
          {' '}
          in Scotland&apos;s crown.
        </h1>
        <img className="miniDecorationnn" alt="miniDecoration" src={decor} />
      </div>
    </div>
  );
}

export default WelcomeBanner;
