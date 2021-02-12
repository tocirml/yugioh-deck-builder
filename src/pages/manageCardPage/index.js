import React from 'react';
import CardForm from '../../components/CardForm';
import './style.scss';
import PropTypes from 'prop-types';

export const ManageCardPage = (props) => {
  return (
    <div className="manage-card">
      <h1 className="manage-card-text">
        {props.match.params.slug ? 'EDIT CARD' : 'CREATE NEW CARD'}
      </h1>
      <CardForm routeProps={props} />
    </div>
  );
};

ManageCardPage.propTypes = {
  match: PropTypes.object.isRequired,
};
