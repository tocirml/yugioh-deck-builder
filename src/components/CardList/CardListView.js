import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const CardListView = ({ cards }) => (
  <div className="card-list-database">
    {cards.map((card) => (
      <div className="card" key={card.id}>
        <Link to={`/card/${card.slug}`}>{card.name}</Link>
      </div>
    ))}
  </div>
);

CardListView.propTypes = {
  cards: PropTypes.array.isRequired,
};
