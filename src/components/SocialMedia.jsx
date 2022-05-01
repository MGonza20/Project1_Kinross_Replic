import React from 'react';
import InstagramImg from '../media/images/instagram.png';
import FacebookImg from '../media/images/facebook.png';
import TwitterImg from '../media/images/twitter.png';
import LinkedinImg from '../media/images/linkedin.png';
import YoutubeImg from '../media/images/youtube.png';
import '../styles/socialMedia.scss';

function SocialMedia() {
  return (
    <div className="mediaContainer">
      <li><a href="/"><img className="iconImg" src={InstagramImg} alt="instagram-icon" /></a></li>
      <li><a href="/"><img className="iconImg" src={FacebookImg} alt="facebook-icon" /></a></li>
      <li><a href="/"><img className="iconImg" src={TwitterImg} alt="twitter-icon" /></a></li>
      <li><a href="/"><img className="iconImg" src={LinkedinImg} alt="linkedin-icon" /></a></li>
      <li><a href="/"><img className="iconImg" src={YoutubeImg} alt="youtube-icon" /></a></li>
    </div>
  );
}

export default SocialMedia;
