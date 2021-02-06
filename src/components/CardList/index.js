import React, { useEffect, useState } from 'react';
import { CardListView } from './CardListView';
import { connect } from 'react-redux';
import { loadCards } from '../../redux/actions/cardActions'; // import for mapDispatchToProps
import { toast } from 'react-toastify';

import Spinner from '../common/Spinner';
import PropTypes from 'prop-types';

const orders = {
  byName: 'byName',
  byLevel: 'byLevel',
  byFrame: 'byFrame',
};

const CardList = ({ cards, loadCards, loading }) => {
  const [order, setOrder] = useState('byName');

  useEffect(() => {
    if (cards.length === 0) {
      loadCards().catch((error) => {
        toast.error(`Loading Cards Failed: ${error.message}`);
      });
    }
  }, []);

  const handleOrderChange = (newOrder) => {
    if (order !== newOrder) {
      switch (newOrder) {
        case orders.byName:
          loadCards('name').catch((error) => {
            toast.error(`Sorting Cards Failed: ${error.message}`);
          });
          break;
        case orders.byLevel:
          loadCards('level').catch((error) => {
            toast.error(`Sorting Cards Failed: ${error.message}`);
          });
          break;
        case orders.byFrame:
          console.log(newOrder);
          break;
        default:
          console.log('default');
      }
      setOrder(newOrder);
    }
  };

  return loading ? (
    <Spinner />
  ) : (
    <>
      <CardListView
        cards={cards}
        order={order}
        onOrderChange={handleOrderChange}
      />
    </>
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
