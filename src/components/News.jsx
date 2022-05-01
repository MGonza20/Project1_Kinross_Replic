import React from 'react';
import '../styles/news.scss';
import FacebookImg from '../media/images/facebook.png';
import LinkedinImg from '../media/images/linkedin.png';
import YoutubeImg from '../media/images/youtube.png';

function News() {
  return (
    <div className="contactDiv">
      <div>
        <p className="newsTitle">Newsletter Signup</p>
        <form className="formInput">
          <div className="inputContainer">
            <input className="inputText" type="text" placeholder="Your email" />
            <a className="sendBtn" href="/">
              <strong>
                SEND
              </strong>
            </a>
          </div>
        </form>
      </div>

      <div className="socialMediaContainer">
        <li><a href="/"><img src={FacebookImg} alt="facebook-icon" /></a></li>
        <li><a href="/"><img src={YoutubeImg} alt="youtube-icon" /></a></li>
        <li><a href="/"><img src={LinkedinImg} alt="linkedin-icon" /></a></li>
      </div>
    </div>
  );
}

export default News;
