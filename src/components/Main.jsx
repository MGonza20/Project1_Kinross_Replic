import React, { useState } from 'react';
import '../styles/main.scss';
import LandingPage from './LandingPage';
import WelcomeBanner from './WelcomeBanner';
import NavBar from './NavBar';
import ImgsText from './ImgsText';
import QuoteBanner from './QuoteBanner';
import OneImgInfo from './OneImgInfo';
import GardenBanner from './GardenBanner';
import ExclusiveBanner from './ExclusiveBanner';
import Footerr from './Footerr';
import '../styles/subLink.scss';
import Cookie from './Cookie';
import Menu from './Menu';
import EmergentCookieScreen from './EmergentCookieScreen';

function Main() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <NavBar onAdd={() => setShowMenu(!showMenu)} show={showMenu} />
      <LandingPage />
      <WelcomeBanner />
      <ImgsText />
      <QuoteBanner />
      <OneImgInfo />
      <GardenBanner />
      <ExclusiveBanner />
      <Footerr />
      <Cookie />
      <Menu show={showMenu} />
      <EmergentCookieScreen />
    </>

  );
}

export default Main;
