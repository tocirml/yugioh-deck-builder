import React, { useEffect } from 'react';
import { CardListView } from './CardListView';
import { connect } from 'react-redux';
import { loadCards } from '../../redux/actions/cardActions'; // import for mapDispatchToProps
import Spinner from '../common/Spinner';
import PropTypes from 'prop-types';

const CardList = ({ cards, loadCards, loading }) => {
  useEffect(() => {
    if (cards.length === 0) {
      loadCards().catch((error) => {
        console.log('Loading cards failed' + error); //toastify
      });
    }
  }, []);

  return loading ? (
    <Spinner />
  ) : (
    <CardListView cards={cards} loading={loading} />
  );
};

CardList.propTypes = {
  loadCards: PropTypes.func.isRequired,
  cards: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return {
    cards: state.cards,
    loading: state.apiCallsInProgress > 0,
  };
};

const mapDispatchToProps = {
  loadCards,
};

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
