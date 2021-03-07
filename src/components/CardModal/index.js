import React from 'react';
import ReactDom from 'react-dom';
import './styles.scss';
import PropTypes from 'prop-types';

const CardModal = ({ card, onCardModalChange }) => {
  return (
    // shouldShow &&
    card &&
    ReactDom.createPortal(
      <>
        <div className="card-modal">
          <div
            className="card-modal-close"
            onClick={() => onCardModalChange(null)}
          >
            X
          </div>
          <div className="card-modal-image">
            <img src={card.imgUrl} alt={`${card.name} card image`} />
          </div>
          {/* <div className="card-modal-info">
              <div className="card-name">
                  <label htmlFor="">Name: </label>

              </div>
          </div> */}
        </div>
        <div
          className="card-modal-backdrop"
          onClick={() => onCardModalChange(null)}
        ></div>
      </>,
      document.getElementById('portal')
    )
  );
};

CardModal.propTypes = {
  card: PropTypes.object,
  onCardModalChange: PropTypes.func.isRequired,
};

export default CardModal;
