import React from 'react';
import '../styles/landingPage.scss';
import BackgroundVideo from '../media/videos/Kinross-Background-Video.mp4';

function LandingPage() {
  return (
    <>
      <section className="landingSection">
        <video
          src={BackgroundVideo}
          muted
          loop
          autoPlay
        />
        <div className="text">
          <div className="anotherCont">
            <h1 className="mainText">A Private Country House and Estate for Exclusive Use</h1>
          </div>
        </div>
      </section>
      <div className="block" />
    </>
  );
}

export default LandingPage;
