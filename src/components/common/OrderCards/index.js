import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

const OrderCards = ({ order, onOrderChange }) => {
  return (
    <div className="order-cards">
      <button
        className="order-cards-button"
        onClick={() => onOrderChange(order === 'asc' ? 'desc' : 'asc')}
      >
        {`Order ${order === 'asc' ? '▲' : '▼'}`}
      </button>
    </div>
  );
};

OrderCards.propTypes = {
  onOrderChange: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
};

export default OrderCards;
