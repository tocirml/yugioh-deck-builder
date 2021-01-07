import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

export const Nav = () => {
  return (
    <nav className="navigation">
      <ul className="navigation-list">
        <li className="navigation-list-link">
          <NavLink to="/">{`Home`}</NavLink>
        </li>
        <li className="navigation-list-link">
          <NavLink to="/card-list">{`Card List`}</NavLink>
        </li>
        <li className="navigation-list-link">
          <NavLink to="/deck-builder">{`Deck Builder`}</NavLink>
        </li>
        <li className="navigation-list-link">
          <NavLink to="/about">{`About`}</NavLink>
        </li>
      </ul>
    </nav>
  );
};
