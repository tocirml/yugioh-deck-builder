import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

const SortCards = ({ sort, onSortChange }) => {
  return (
    <div className="order-cards">
      <button className="order-cards-button">Sort By</button>
      <ul className="order-cards-by">
        <li
          onClick={() => onSortChange('name')}
          className={sort === 'name' ? 'active' : ''}
        >
          Name
        </li>
        <li
          onClick={() => onSortChange('cardFrame')}
          className={sort === 'cardFrame' ? 'active' : ''}
        >
          Card Color
        </li>
        <li
          onClick={() => onSortChange('level')}
          className={sort === 'level' ? 'active' : ''}
        >
          Level
        </li>
        <li
          onClick={() => onSortChange('atk')}
          className={sort === 'atk' ? 'active' : ''}
        >
          ATK
        </li>
        <li
          onClick={() => onSortChange('def')}
          className={sort === 'def' ? 'active' : ''}
        >
          DEF
        </li>
        <li
          onClick={() => onSortChange('attribute')}
          className={sort === 'attribute' ? 'active' : ''}
        >
          Attribute
        </li>
        <li
          onClick={() => onSortChange('type')}
          className={sort === 'type' ? 'active' : ''}
        >
          Type
        </li>
      </ul>
    </div>
  );
};

SortCards.propTypes = {
  onSortChange: PropTypes.func.isRequired,
  sort: PropTypes.string.isRequired,
};

export default SortCards;
