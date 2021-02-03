import React from 'react';
import './style.scss';
import SelectInput from '../common/SelectInput';
import TextInput from '../common/TextInput';
import PropTypes from 'prop-types';

export const CardFormView = ({
  card,
  onSubmit,
  onChange,
  onDelete,
  errors,
  saving,
}) => {
  return (
    <form onSubmit={onSubmit}>
      {errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>
      )}
      <TextInput
        name="name"
        label="name"
        value={card.name}
        onChange={onChange}
        error={errors.title}
      />
      <SelectInput />
      <input
        type="submit"
        disabled={saving}
        value={saving ? 'Saving...' : 'Save'}
        className=""
      />
      <button onClick={onDelete} disabled={saving} className="">
        {'Delete'}
      </button>
    </form>
  );
};

CardFormView.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  card: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  saving: PropTypes.bool.isRequired,
};
