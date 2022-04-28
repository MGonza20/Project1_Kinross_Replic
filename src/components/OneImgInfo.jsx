import React from 'react';
import boatImg from '../media/images/Boat-img.jpg';
import '../styles/oneImgInfo.scss';
import golfMan from '../media/svgs/golfMan.svg';
import decor from '../media/svgs/decor.svg';

function OneImgInfo() {
  return (
    <div className="imgInfo">
      <div className="innerImgInfo">
        <div className="col1">
          <img alt="boat-img" className="boatImg" src={boatImg} />
        </div>

        <div className="outterDivInfoMan">
          <div className="divTextCol2">

            <img className="miniDecoration" alt="miniDecoration" src={decor} />
            <h1 className="titleGolf">Unforgettable Events</h1>
            <p className="pTextGolf">
              We will ensure that your stay creates memories that will last forever.
              Our House team are on hand to ensure that you experience unparalleled attention
              to detail and enjoy our famous Scottish hospitality.
            </p>

            <a className="buttonGolf" href="/">
              <strong>
                FIND OUT MORE
                &nbsp;
                &nbsp;
                &#10230;
              </strong>
            </a>

          </div>

          <div className="divImgCol2">
            <img alt="man-img" className="manImg" src={golfMan} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OneImgInfo;
