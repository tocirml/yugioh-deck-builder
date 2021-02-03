import React from 'react';
import CardForm from '../../components/CardForm';
import './style.scss';
// import PropTypes from 'prop-types';

export const ManageCardPage = (props) => {
  return (
    <div className="manage-card">
      <div className="manage-card-text">Create/Edit card</div>
      <CardForm routeProps={props} />
    </div>
  );
};

// ManageCardPage.propTypes = {
//   history: PropTypes.object.isRequired,
// };
