import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import {
  attributes,
  monsterTypes,
  cardFrames,
} from '../../../../tools/mockData';
import DatalistDisplay from '../DatalistDisplay';

const FilterCards = ({
  filters,
  active,
  filterButtonClick,
  onFilterChange,
}) => {
  return (
    <div className="filter">
      <button className="filter-button" onClick={filterButtonClick}>
        Filter
      </button>
      <div className={`filter-options ${active ? 'active' : ''}`}>
        <div className="filter-options-close" onClick={filterButtonClick}>
          <button>X</button>
        </div>
        <div className="filter-options-types">
          <label htmlFor="">Card Type:</label>
          <button
            name="cardType"
            value="1"
            className={`monster ${filters.cardType === 1 && 'active'}`}
            onClick={onFilterChange}
          >
            Monster
          </button>
          <button
            name="cardType"
            value="2"
            className={`spell ${filters.cardType === 2 && 'active'}`}
            onClick={onFilterChange}
          >
            Spell
          </button>
          <button
            name="cardType"
            value="3"
            className={`trap ${filters.cardType === 3 && 'active'}`}
            onClick={onFilterChange}
          >
            Trap
          </button>
        </div>
        {filters.cardType === 1 && (
          <div className="filter-options-monster">
            <DatalistDisplay
              name="cardFrame"
              label="Card Color"
              value={filters.cardFrame || ''}
              defaultOption=""
              options={cardFrames.map((cardFrame) => ({
                value: cardFrame.id,
                text: cardFrame.frame,
              }))}
              onChange={onFilterChange}
            />
            <DatalistDisplay
              name="attribute"
              label="Attribute"
              value={filters.attribute || ''}
              defaultOption=""
              options={attributes.map((attribute) => ({
                value: attribute,
                text: attribute,
              }))}
              onChange={onFilterChange}
            />
            <DatalistDisplay
              name="level"
              label="Level"
              value={filters.level || ''}
              defaultOption=""
              options={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(
                (level) => ({
                  value: level,
                  text: level,
                })
              )}
              onChange={onFilterChange}
            />
            <DatalistDisplay
              name="type"
              label="Monster Type"
              value={filters.type || ''}
              defaultOption=""
              options={monsterTypes.map((type) => ({
                value: type,
                text: type,
              }))}
              onChange={onFilterChange}
            />
          </div>
        )}
      </div>
      <div
        className={`filter-background ${active ? 'active' : ''}`}
        onClick={filterButtonClick}
      ></div>
    </div>
  );
};

FilterCards.propTypes = {
  filters: PropTypes.object,
  active: PropTypes.bool.isRequired,
  filterButtonClick: PropTypes.func.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default FilterCards;
