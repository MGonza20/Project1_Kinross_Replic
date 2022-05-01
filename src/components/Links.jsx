import React from 'react';
import FooterSubLink from './FooterSubLink';
import FooterLinksTitle from './FooterLinksTitle';
import '../styles/links.scss';

function Links() {
  return (
    <div className="linksContainer">
      <div className="rowRow">
        <div className="col first">
          <ul>
            <FooterLinksTitle text="The House" />
            <FooterSubLink text="Reception Rooms" />
            <FooterSubLink text="Dining" />
            <FooterSubLink text="Accomodation" />
            <FooterSubLink text="Whisky Library" />
          </ul>
        </div>

        <div className="col">
          <ul>
            <FooterLinksTitle text="The Estate" />
            <FooterSubLink text="The Gardens" />
            <FooterSubLink text="Nearby Sporting Pursuits" />
            <FooterSubLink text="The Setting & Lonch Leven" />
            <FooterSubLink text="The Coach House" />
          </ul>
        </div>

        <div className="col">
          <ul>
            <FooterLinksTitle text="Private Events" />
            <FooterSubLink text="Exclusive Hire" />
            <FooterSubLink text="Corporate Events" />
          </ul>
        </div>

        <div className="col">
          <ul>
            <FooterLinksTitle text="Coach House Spa" />
            <FooterSubLink text="Spa Facilities" />
            <FooterSubLink text="Treatments" />
          </ul>
        </div>

        <div className="col">
          <ul>
            <FooterLinksTitle text="About" />
            <FooterSubLink text="History & Renovation" />
            <FooterSubLink text="Places to visit" />
            <FooterSubLink text="FAQ" />
            <FooterSubLink text="Carrers" />
            <FooterSubLink text="Head Gardener&apos;s Blog" />
          </ul>
        </div>

        <div className="col">
          <ul>
            <FooterLinksTitle text="Contact" />
          </ul>
        </div>
      </div>
    </div>

  );
}

export default Links;
