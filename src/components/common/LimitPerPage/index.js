import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

const LimitPerPage = ({ limit, onLimitChange }) => {
  return (
    <div className="limit-per-page">
      <button className="limit-per-page-button">Limit per Page</button>
      <ul className="limit-per-page-by">
        <li
          onClick={() => onLimitChange(10)} // 30
          className={limit === 10 ? 'active' : ''}
        >
          10
        </li>
        <li
          onClick={() => onLimitChange(20)} // 50
          className={limit === 20 ? 'active' : ''}
        >
          20
        </li>
        <li
          onClick={() => onLimitChange(30)} // 100
          className={limit === 30 ? 'active' : ''}
        >
          30
        </li>
      </ul>
    </div>
  );
};

LimitPerPage.propTypes = {
  onLimitChange: PropTypes.func.isRequired,
  limit: PropTypes.number.isRequired,
};

export default LimitPerPage;
