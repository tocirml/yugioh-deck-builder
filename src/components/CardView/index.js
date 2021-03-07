import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './styles.scss';

const CardView = ({ card, onCardModalChange }) => {
  return (
    <div className="card-view">
      <img
        src={card.imgUrl}
        alt={`${card.name}`}
        onClick={() => onCardModalChange(card)}
      />
      <div className="card-view-edit">
        <Link to={`/card/${card.slug}`}>Edit</Link>
      </div>
    </div>
  );
};

CardView.propTypes = {
  card: PropTypes.object.isRequired,
  onCardModalChange: PropTypes.func.isRequired,
};

export default CardView;
