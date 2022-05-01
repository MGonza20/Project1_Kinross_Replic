import React, { useState } from 'react';
import '../styles/main.scss';
import LandingPage from './LandingPage';
import WelcomeBanner from './WelcomeBanner';
import NavBar from './NavBar';
import ImgsText from './ImgsText';
import QuoteBanner from './QuoteBanner';
import OneImgInfo from './OneImgInfo';
import OneImgInfo2 from './OneImgInfo2';
import GardenBanner from './GardenBanner';
import ExclusiveBanner from './ExclusiveBanner';
import Footerr from './Footerr';
import '../styles/subLink.scss';
import Cookie from './Cookie';
import Menu from './Menu';
import EmergentCookieScreen from './EmergentCookieScreen';

function Main() {
  const [showMenu, setShowMenu] = useState(false);
  const [window, setWindow] = useState(false);

  return (
    <>
      <NavBar onAdd={() => setShowMenu(!showMenu)} show={showMenu} />
      <LandingPage />
      <WelcomeBanner />
      <ImgsText />
      <QuoteBanner />
      <OneImgInfo />
      <OneImgInfo2 />
      <GardenBanner />
      <ExclusiveBanner />
      <Footerr />
      <Cookie openW={() => setWindow(true)} />
      <Menu show={showMenu} />
      <EmergentCookieScreen
        closeW={() => setWindow(false)}
        window={window}
      />
    </>

  );
}

export default Main;
