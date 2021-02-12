import React from 'react';
import './style.scss';
import SelectInput from '../common/SelectInput';
import TextInput from '../common/TextInput';
import TextareaInput from '../common/TextareaInput';
import NumberInput from '../common/NumberInput';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { attributes, monsterTypes, cardTypes } from '../../../tools/mockData';

export const CardFormView = ({
  card,
  cardFrames,
  onSubmit,
  onChange,
  onDelete,
  errors,
  saving,
}) => {
  return (
    <div className="form-wrapper">
      <div className="form-wrapper-image">
        <img
          src={
            card.imgUrl
              ? card.imgUrl
              : 'https://ygoprodeck.com/pics/back_high.jpg'
          }
          alt="Card Image"
        />
      </div>
      <form autoComplete="off" onSubmit={onSubmit} className="card-form">
        {errors.onSave && (
          <div className="alert alert-danger" role="alert">
            {errors.onSave}
          </div>
        )}

        <TextInput
          name="name"
          label="Name"
          value={card.name}
          onChange={onChange}
          error={errors.name}
        />

        <SelectInput
          name="cardType"
          label="Card Type"
          value={card.cardType || ''}
          defaultOption=""
          options={cardTypes.map((cardType) => ({
            value: cardType.id,
            text: cardType.type,
          }))}
          onChange={onChange}
          error={errors.cardType}
        />

        {card.cardType === 1 && (
          <>
            <SelectInput
              name="cardFrame"
              label="Card Color"
              value={card.cardFrame || ''}
              defaultOption=""
              options={cardFrames.map((cardFrame) => ({
                value: cardFrame.id,
                text: cardFrame.frame,
              }))}
              onChange={onChange}
              error={errors.cardFrame}
              extraClass={'inline'}
            />

            <SelectInput
              name="attribute"
              label="Attribute"
              value={card.attribute || ''}
              defaultOption=""
              options={attributes.map((attribute) => ({
                value: attribute,
                text: attribute,
              }))}
              onChange={onChange}
              error={errors.attribute}
              extraClass={'inline'}
            />

            <SelectInput
              name="level"
              label="Level"
              value={card.level || ''}
              defaultOption=""
              options={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(
                (level) => ({
                  value: level,
                  text: level,
                })
              )}
              onChange={onChange}
              error={errors.level}
              extraClass={'inline'}
            />

            <SelectInput
              name="type"
              label="Monster Type"
              value={card.type || ''}
              defaultOption=""
              options={monsterTypes.map((type) => ({
                value: type,
                text: type,
              }))}
              onChange={onChange}
              error={errors.type}
              extraClass={'inline'}
            />

            <NumberInput
              name="atk"
              label="Attack"
              value={card.atk}
              onChange={onChange}
              error={errors.atk}
              extraClass={'inline'}
            />

            <NumberInput
              name="def"
              label="Defense"
              value={card.def}
              onChange={onChange}
              error={errors.def}
              extraClass={'inline'}
            />
          </>
        )}

        <TextareaInput
          name="description"
          label="Description"
          value={card.description}
          onChange={onChange}
          error={errors.description}
        />

        <TextInput
          name="imgUrl"
          label="Image URL"
          value={card.imgUrl}
          onChange={onChange}
          error={errors.imgUrl}
        />

        <SelectInput
          name="status"
          label="Status"
          value={card.status || ''}
          options={[1, 2, 3].map((status) => ({
            value: status,
            text: status,
          }))}
          onChange={onChange}
          error={errors.status}
        />

        <input
          type="submit"
          disabled={saving}
          value={saving ? 'Saving...' : 'Save'}
          className=""
        />

        {card.id && (
          <button onClick={onDelete} disabled={saving} className="">
            {'Delete Card'}
          </button>
        )}

        <button disabled={saving} className="card-form-cancel">
          <Link className="card-form-cancel" to="/card-list">
            {'Go Back'}
          </Link>
        </button>
      </form>
    </div>
  );
};

CardFormView.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  card: PropTypes.object.isRequired,
  cardFrames: PropTypes.array.isRequired,
  errors: PropTypes.object.isRequired,
  saving: PropTypes.bool.isRequired,
};
