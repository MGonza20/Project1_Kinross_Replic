import React from 'react';
import '../styles/oneImgInfo2.scss';
import bg1 from '../media/images/bg1.jpg';
import decoration1 from '../media/images/decoration1.png';
import decor from '../media/svgs/decor.svg';

function OneImgInfo2() {
  return (
    <div className="imgInfo2">
      <div className="textAndImgB">
        <div className="aTextDiv">
          <img src={decor} alt="miniDecoration" className="miniD" />
          <div className="divTitleA">
            <h1 className="titleA">An Authentic Scottish Experience Like No Other</h1>
          </div>
          <div className="divTextA">
            More than a grand Estate, Kinross House is a celebration of Scottish history,
            heritage, culture, and nature.
          </div>
          <a className="buttonGolf" href="/">
            <strong>
              FIND OUT MORE
              &nbsp;
              &nbsp;
              &#10230;
            </strong>
          </a>
        </div>
        <div className="bgImg">
          <img src={decoration1} alt="background-img" className="bgImageB" />
        </div>
      </div>
      <div className="imgDoor">
        <img src={bg1} alt="door-img" className="dImg" />
      </div>
    </div>
  );
}

export default OneImgInfo2;
