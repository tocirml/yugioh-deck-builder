import React, { useState, useEffect } from 'react';
import { CardFormView } from './CardFormView';
import { connect } from 'react-redux';
import { loadCardFrames } from '../../redux/actions/cardFrameActions';
import { newCard } from '../../../tools/mockData';
// import { bindActionCreators } from 'redux';
import {
  saveCard,
  loadCards,
  deleteCard,
} from '../../redux/actions/cardActions';
import PropTypes from 'prop-types';
import Spinner from '../common/Spinner';
import { toast } from 'react-toastify';

let cardOptions = localStorage.getItem('cardOptions')
  ? JSON.parse(localStorage.getItem('cardOptions'))
  : {
      sort: 'name',
      order: 'asc',
      perPage: 10,
      offset: 0,
      query: '',
      filters: {},
    };

const CardForm = ({
  saveCard,
  loadCards,
  deleteCard,
  cards,
  routeProps,
  cardFrames,
  loadCardFrames,
  ...props
}) => {
  const [card, setCard] = useState({ ...props.card });
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (cards.length === 0) {
      loadCards(cardOptions).catch((error) => {
        toast.error(`Loading Cards Failed: ${error.message}`);
      });
    } else {
      setCard({ ...props.card });
    }
    if (cardFrames.length === 0) {
      loadCardFrames().catch((error) => {
        toast.error(`Loading Cards Frames Failed: ${error.message}`);
      });
    }
  }, [props.card]);

  function formIsValid() {
    const { name, description, status, cardType, imgUrl } = card;
    const errors = {};

    if (!name) errors.name = 'Name is required.';
    if (!description) errors.description = 'Description is required.';
    if (!status) errors.status = 'Status is required.';
    if (!cardType) errors.cardType = 'Card Type is required.';
    if (!imgUrl) errors.imgUrl = 'Image URL is required.';

    setErrors(errors);
    // Form is valid if the errors object still has no properties
    return Object.keys(errors).length === 0;
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCard({
      ...card,
      [name]: name.match(/cardFrame|cardType|level|atk|def|status/)
        ? parseInt(value, 10)
        : value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formIsValid()) return;
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
  };

  const handleDelete = async () => {
    toast.success('Card deleted.');
    try {
      await deleteCard(card);
      routeProps.history.push('/card-list');
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
      cardFrames={cardFrames}
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
  cardFrames: PropTypes.array.isRequired,
  loadCardFrames: PropTypes.func.isRequired,
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
    cardFrames: state.cardFrames,
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
  loadCardFrames,
};

export default connect(mapStateToProps, mapDispatchToProps)(CardForm);
