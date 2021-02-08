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
          onClick={() => onOrderChange('byFrame')}
          className={order === 'byFrame' ? 'active' : ''}
        >
          Card Color
        </li>
        <li
          onClick={() => onOrderChange('byLevel')}
          className={order === 'byLevel' ? 'active' : ''}
        >
          Level
        </li>
        <li
          onClick={() => onOrderChange('byAtk')}
          className={order === 'byAtk' ? 'active' : ''}
        >
          ATK
        </li>
        <li
          onClick={() => onOrderChange('byDef')}
          className={order === 'byDef' ? 'active' : ''}
        >
          DEF
        </li>
        <li
          onClick={() => onOrderChange('byAttribute')}
          className={order === 'byAttribute' ? 'active' : ''}
        >
          Attribute
        </li>
        <li
          onClick={() => onOrderChange('byType')}
          className={order === 'byType' ? 'active' : ''}
        >
          Type
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
