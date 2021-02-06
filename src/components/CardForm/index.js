import React, { useState, useEffect } from 'react';
import { CardFormView } from './CardFormView';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import {
  saveCard,
  loadCards,
  deleteCard,
} from '../../redux/actions/cardActions';
import PropTypes from 'prop-types';
import Spinner from '../common/Spinner';
import { toast } from 'react-toastify';

const newCard = { id: null, name: '' };

const CardForm = ({
  saveCard,
  loadCards,
  deleteCard,
  cards,
  routeProps,
  ...props
}) => {
  const [card, setCard] = useState({ ...props.card });
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (cards.length === 0) {
      loadCards().catch((error) => {
        toast.error(`Loading Cards Failed: ${error.message}`);
      });
    } else {
      setCard({ ...props.card });
    }
  }, [props.card]);

  function formIsValid() {
    const { name } = card;
    const errors = {};

    if (!name) errors.title = 'Name is required.';

    setErrors(errors);
    // Form is valid if the errors object still has no properties
    return Object.keys(errors).length === 0;
  }

  const handleChange = ({ target }) => {
    setCard({
      ...card,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // CAPITALIZE name
    if (formIsValid()) {
      setSaving(true);
      saveCard(card)
        .then(() => {
          toast.success('Card saved!');
          routeProps.history.push('/card-list');
        })
        .catch((error) => {
          setSaving(false);
          setErrors({ onSave: error.message });
        });
    }
  };

  const handleDelete = async () => {
    toast.success('Card deleted.');
    routeProps.history.push('/card-list');
    try {
      await deleteCard(card);
    } catch (error) {
      toast.error(`Card deletion failed: ${error.message}`, {
        autoClose: false,
      });
    }
  };

  return cards.length === 0 && routeProps.match.params.slug ? (
    <Spinner />
  ) : (
    <CardFormView
      card={card}
      onChange={handleChange}
      onSubmit={handleSubmit}
      errors={errors}
      saving={saving}
      onDelete={handleDelete}
    />
  );
};

CardForm.propTypes = {
  saveCard: PropTypes.func.isRequired,
  loadCards: PropTypes.func.isRequired,
  deleteCard: PropTypes.func.isRequired,
  card: PropTypes.object.isRequired,
  cards: PropTypes.array.isRequired,
  routeProps: PropTypes.object.isRequired,
};

const getCardBySlug = (cards, slug) => {
  return cards.find((card) => card.slug === slug) || null;
};

const mapStateToProps = (state, ownProps) => {
  const slug = ownProps.routeProps.match.params.slug;
  const card =
    slug && state.cards.length > 0 ? getCardBySlug(state.cards, slug) : newCard;
  return {
    card,
    cards: state.cards,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     actions: bindActionCreators(cardActions, dispatch),
//   };
// };
const mapDispatchToProps = {
  saveCard,
  loadCards,
  deleteCard,
};

export default connect(mapStateToProps, mapDispatchToProps)(CardForm);
