import React from 'react';
import { Nav } from '../Nav';
import './style.scss';
import logo from '../../../assets/logo.png';

export const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="yugioh logo" />
        <span className="logo-text">{`DECK BUILDER`}</span>
      </div>
      <Nav />
    </header>
  );
};
