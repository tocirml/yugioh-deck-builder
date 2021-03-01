import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';

export const Anvorgesa = ({ toggleHandler }) => {
  return (
    <a
      href="#"
      data-testid="anvorgesa"
      className="anvorgesa"
      onClick={toggleHandler}
    >
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </a>
  );
};

Anvorgesa.propTypes = {
  toggleHandler: PropTypes.func.isRequired,
};
