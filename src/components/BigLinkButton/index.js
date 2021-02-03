import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';

export const BigLinkButton = ({ url, img, text }) => {
  return <div className="big-link-button">{`${url + img + text}`}</div>;
};

BigLinkButton.propTypes = {
  url: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
