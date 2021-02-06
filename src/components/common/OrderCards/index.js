import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

const OrderCards = ({ order, onOrderChange }) => {
  return (
    <div className="order-cards">
      <button className="order-cards-button">Order By</button>
      <ul className="order-cards-by">
        <li
          onClick={() => onOrderChange('byName')}
          className={order === 'byName' ? 'active' : ''}
        >
          Name
        </li>
        <li
          onClick={() => onOrderChange('byLevel')}
          className={order === 'byLevel' ? 'active' : ''}
        >
          Level
        </li>
        <li
          onClick={() => onOrderChange('byFrame')}
          className={order === 'byFrame' ? 'active' : ''}
        >
          Frame
        </li>
      </ul>
    </div>
  );
};

OrderCards.propTypes = {
  onOrderChange: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
};

export default OrderCards;
