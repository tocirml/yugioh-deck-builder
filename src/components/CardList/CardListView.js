import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import OrderCards from '../common/OrderCards';
import PropTypes from 'prop-types';

export const CardListView = ({ cards, order, onOrderChange }) => (
  <div className="card-list-view">
    <div className="card-list-options">
      <OrderCards order={order} onOrderChange={onOrderChange} />
    </div>
    <div className="card-list-database">
      {cards.map((card) => (
        <div className="card-view" key={card.id}>
          <Link to={`/card/${card.slug}`}>{card.name}</Link>
          <br />
          Level: {card.level}
        </div>
      ))}
    </div>
  </div>
);

CardListView.propTypes = {
  cards: PropTypes.array.isRequired,
  onOrderChange: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
};
