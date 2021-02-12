import React from 'react';
import PropTypes from 'prop-types';

const NumberInput = ({
  name,
  label,
  onChange,
  placeholder,
  value,
  error,
  extraClass = '',
}) => {
  let wrapperClass = `form-group ${extraClass}`;
  if (error && error.length > 0) {
    wrapperClass += ' ' + 'has-error';
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <input
          type="number"
          name={name}
          className="form-control"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

NumberInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.number,
  error: PropTypes.string,
  extraClass: PropTypes.string,
};

export default NumberInput;
