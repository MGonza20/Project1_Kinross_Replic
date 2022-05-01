/* eslint-disable react/prop-types */
import React from 'react';
import '../styles/menu.scss';
import FooterLinksTitle from './FooterLinksTitle';
import FooterSubLink from './FooterSubLink';
import SocialMedia from './SocialMedia';

function Menu({ show }) {
  return (

    <div
      className={show ? 'dropDownMenu flex navYes' : 'dropDownMenu flex'}
    >
      <div className="menuContainer">
        <li className="linksTitle">
          <a className="menuColorTitle homeMenuTitle" href="/">Home</a>
        </li>
        <div className="linksContainer">
          <div className="rowRow">
            <div className="col first">
              <ul>
                <FooterLinksTitle text="The House" menuText="yes" />
                <FooterSubLink text="Accommodation" menuText="yes" />
                <FooterSubLink text="Reception Rooms" menuText="yes" />
                <FooterSubLink text="Dining" menuText="yes" />
                <FooterSubLink text="Whisky Library" menuText="yes" />
              </ul>
            </div>

            <div className="col">
              <ul>
                <FooterLinksTitle text="The Estate" menuText="yes" />
                <FooterSubLink text="The Gardens" menuText="yes" />
                <FooterSubLink text="Nearby Sporting Pursuits" menuText="yes" />
                <FooterSubLink text="The Setting & Lonch Leven" menuText="yes" />
                <FooterSubLink text="The Coach House" menuText="yes" />
              </ul>
            </div>

            <div className="col">
              <ul>
                <FooterLinksTitle text="Private Events" menuText="yes" />
                <FooterSubLink text="Exclusive Hire" menuText="yes" />
                <FooterSubLink text="Corporate Events" menuText="yes" />
              </ul>
            </div>

            <div className="col">
              <ul>
                <FooterLinksTitle text="Coach House Spa" menuText="yes" />
                <FooterSubLink text="Spa Facilities" menuText="yes" />
                <FooterSubLink text="Treatments" menuText="yes" />
              </ul>
            </div>

            <div className="col">
              <ul>
                <FooterLinksTitle text="About" menuText="yes" />
                <FooterSubLink text="History & Renovation" menuText="yes" />
                <FooterSubLink text="Places to visit" menuText="yes" />
                <FooterSubLink text="FAQ" menuText="yes" />
                <FooterSubLink text="Carrers" menuText="yes" />
                <FooterSubLink text="Head Gardener&apos;s Blog" menuText="yes" />
              </ul>
            </div>

            <div className="col">
              <ul>
                <FooterLinksTitle text="Contact" menuText="yes" />
              </ul>
            </div>
            <SocialMedia />
          </div>
        </div>
      </div>

    </div>

  );
}

export default Menu;
