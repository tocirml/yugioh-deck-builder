import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';

export const Login = ({ mobile }) => {
  return (
    <div data-testid="login" className={`login ${mobile ? 'mobile' : ''}`}>
      <a href="#" className="login-button">
        {`Login`}
      </a>
      <a href="#" className="register-button">
        {`Register`}
      </a>
    </div>
  );
};

Login.propTypes = {
  mobile: PropTypes.bool.isRequired,
};
