import React from 'react';
import '../styles/Button.scss';

// eslint-disable-next-line react/prop-types
function Button({
  // eslint-disable-next-line react/prop-types
  link, text, bgColor,
}) {
  return (
    <a className="button" href={link} style={{ backgroundColor: bgColor }}>
      <strong>
        {text}
        {' '}
        {' '}
        &nbsp;
        &nbsp;
        &#10230;
      </strong>
    </a>
  );
}

Button.defaultProps = {
  link: '#',
};

export default Button;
