import React from 'react';
import './style.scss';
import SortCards from '../common/SortCards';
import OrderCards from '../common/OrderCards';
import FilterCards from '../common/FilterCards';
import SearchCards from '../common/SearchCards';
import CardView from '../CardView';
import PropTypes from 'prop-types';

export const CardListView = ({
  cards,
  sort,
  order,
  searchQuery,
  filters,
  displayFilterOptions,
  filterButtonClick,
  onSortChange,
  onOrderChange,
  onFilterChange,
  onSearchQueryChange,
}) => (
  <div className="card-list-view">
    <div className="card-list-options">
      <SearchCards
        onSearchQueryChange={onSearchQueryChange}
        query={searchQuery}
      />
      <FilterCards
        filters={filters}
        active={displayFilterOptions}
        filterButtonClick={filterButtonClick}
        onFilterChange={onFilterChange}
      />
      <OrderCards order={order} onOrderChange={onOrderChange} />
      <SortCards sort={sort} onSortChange={onSortChange} />
    </div>
    <div className="card-list-database">
      {cards.length > 0 ? (
        cards.map((card) => <CardView key={card.id} card={card} />)
      ) : (
        <div className="no-cards">0 RESULTS</div>
      )}
    </div>
  </div>
);

CardListView.propTypes = {
  cards: PropTypes.array.isRequired,
  onSortChange: PropTypes.func.isRequired,
  onOrderChange: PropTypes.func.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  filterButtonClick: PropTypes.func.isRequired,
  onSearchQueryChange: PropTypes.func.isRequired,
  sort: PropTypes.string.isRequired,
  order: PropTypes.string.isRequired,
  searchQuery: PropTypes.string,
  filters: PropTypes.object.isRequired,
  displayFilterOptions: PropTypes.bool.isRequired,
};
