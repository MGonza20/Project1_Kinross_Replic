import React from 'react';
import '../styles/quoteBanner.scss';
import quote from '../media/svgs/quote.svg';

function QuoteBanner() {
  return (
    <div className="textDiv2 paddingTextDiv2">
      <div className="innerTextDiv2">
        <img alt="quote" className="miniDecoration2" src={quote} />
        <h1 className="quoteText">
          This is perhaps the most lavish House in Scotland
        </h1>
        <p className="citationDiv">- Tatler</p>
      </div>
    </div>
  );
}

export default QuoteBanner;
