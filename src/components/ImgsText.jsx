import React from 'react';
import '../styles/ImgsText.scss';
import interiorImg from '../media/images/Interior-img.jpg';
import gardenImg from '../media/images/Garden-img.png';

function ImgsText() {
  return (
    <div className="imgsInfoDiv">
      <div className="innerImgsInfoDiv">
        <div>
          <img alt="interior-img" className="img1" src={interiorImg} />
        </div>
        <div className="column2">
          <img alt="gardenImg" className="img2" src={gardenImg} />
          <div className="infoContent">
            <h1 className="h1InfoText">One of the most sought-after private retreats in Scotland. </h1>
            <p className="pInfoText">
              Available on a strictly limited basis for exclusive use, the Kinross
              House Estate represents the best of Scotland architecturally, historically,
              culturally and gastronomically.
            </p>
            <p className="pInfoText">
              A secluded Estate that is available to hire for exclusive-use holidays, corporate
              retreats, family get togethers, special occasions and private events.
            </p>
            <br />
            <br />
            <a className="buttonImgs" href="/">
              <strong>
                FIND OUT MORE
                &nbsp;
                &nbsp;
                &#10230;
              </strong>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImgsText;
