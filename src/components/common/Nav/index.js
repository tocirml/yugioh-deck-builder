import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';
import PropTypes from 'prop-types';

export const Nav = ({ mobile }) => {
  return (
    <nav data-testid="navbar" className={`navbar ${mobile ? 'mobile' : ''}`}>
      <ul className="navbar-list">
        <li className="navbar-list-link">
          <NavLink to="/">{`Home`}</NavLink>
        </li>
        <li className="navbar-list-link">
          <NavLink to="/card-list">{`Card List`}</NavLink>
        </li>
        <li className="navbar-list-link">
          <NavLink to="/deck-builder">{`Deck Builder`}</NavLink>
        </li>
        <li className="navbar-list-link">
          <NavLink to="/about">{`About`}</NavLink>
        </li>
      </ul>
    </nav>
  );
};

Nav.propTypes = {
  mobile: PropTypes.bool.isRequired,
};
