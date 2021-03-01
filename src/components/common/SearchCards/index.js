import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

const SearchCards = ({ query, onSearchQueryChange }) => {
  return (
    <div className="search">
      <label htmlFor="search-cards">Search: </label>
      <input
        onChange={onSearchQueryChange}
        value={query}
        type="search"
        name="search-cards"
      />
    </div>
  );
};

SearchCards.propTypes = {
  query: PropTypes.string,
  onSearchQueryChange: PropTypes.func.isRequired,
};

export default SearchCards;
