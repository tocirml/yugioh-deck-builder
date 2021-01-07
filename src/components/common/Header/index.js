import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  const activeStyle = { color: 'orange' };
  return (
    <header>
      Header
      <NavLink to="/about" activeStyle={activeStyle}>
        About
      </NavLink>
    </header>
  );
};
