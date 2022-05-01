import React from 'react';
import '../styles/landingPage.scss';
import { motion } from 'framer-motion';
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
          <motion.div
            className="anotherCont"
            animate={{
              y: -100,
              transition: {
                duration: 1.6,
              },
            }}
          >
            <h1 className="mainText">A Private Country House and Estate for Exclusive Use</h1>
          </motion.div>
        </div>
      </section>
      <div className="block" />
    </>
  );
}

export default LandingPage;
