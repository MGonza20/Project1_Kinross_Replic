import React from 'react';
import '../styles/gardenBanner.scss';
import miniDecoration3 from '../media/svgs/decor-3-white.svg';

function GardenBanner() {
  return (
    <div className="gardenTextDiv">
      <div className="insideDiv">
        <div className="innerGardenTextDiv">
          <img alt="miniDecoration" className="miniDecoration3" src={miniDecoration3} />
          <h1 className="textH1">Coach House Spa</h1>
          <p className="pText">From our hydrotherapy pool to our relaxation room, our award-winning spa facilities provide head-to-toe relaxation for both body and mind.</p>
          <a className="buttonGarden" href="/">
            <strong>
              FIND OUT MORE
              &nbsp;
              &nbsp;
              &#10230;
            </strong>
          </a>
        </div>
      </div>
      <div className="exclusiveTextDiv" />
    </div>
  );
}

export default GardenBanner;
