import React, { useState } from 'react';
import { Nav } from '../Nav';
import { Login } from '../Login';
import { Anvorgesa } from '../Anvorgesa';
import { NavLink } from 'react-router-dom';
import './style.scss';
import logo from '../../../assets/logo.png';

export const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <header className="header">
      <NavLink to="/">
        <div className="logo">
          <img src={logo} alt="yugioh logo" />
          <div className="logo-text">{`DECK BUILDER`}</div>
        </div>
      </NavLink>
      <Nav mobile={showMobileMenu} />
      <Login mobile={showMobileMenu} />
      <Anvorgesa toggleHandler={toggleMobileMenu} />
    </header>
  );
};
