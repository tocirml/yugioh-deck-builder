import React from 'react';
import './style.scss';

export const Anvorgesa = ({ toggleHandler }) => {
  return (
    <a href="#" className="anvorgesa" onClick={() => toggleHandler()}>
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </a>
  );
};
