import React from 'react';
import './style.scss';
import OrderCards from '../common/OrderCards';
import CardView from '../CardView';
import PropTypes from 'prop-types';

export const CardListView = ({ cards, order, onOrderChange }) => (
  <div className="card-list-view">
    <div className="card-list-options">
      <OrderCards order={order} onOrderChange={onOrderChange} />
    </div>
    <div className="card-list-database">
      {cards.map((card) => (
        <CardView key={card.id} card={card} />
      ))}
    </div>
  </div>
);

CardListView.propTypes = {
  cards: PropTypes.array.isRequired,
  onOrderChange: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
};
