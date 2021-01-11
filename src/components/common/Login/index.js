import React from 'react';
import './style.scss';

export const Login = ({ mobile }) => {
  return (
    <div className={`login ${mobile ? 'mobile' : ''}`}>
      <a href="#" className="log-in">
        {`Login`}
      </a>
      <a href="#" className="sign-up">
        {`Sign Up`}
      </a>
    </div>
  );
};
