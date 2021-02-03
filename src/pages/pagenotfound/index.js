import React from 'react';
import './styles.scss';
import notFoundImage from '../../assets/not-found-404.png';

export const PageNotFound = () => {
  return (
    <div className="not-found">
      <div data-testid="not-found-image" className="not-found-image">
        <img src={notFoundImage} alt="Not found image" />
      </div>
    </div>
  );
};
