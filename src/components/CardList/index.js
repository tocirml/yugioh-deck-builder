import React, { useEffect, useState } from 'react';
import { CardListView } from './CardListView';
import { connect } from 'react-redux';
import { loadCards, orderCards } from '../../redux/actions/cardActions';
import { toast } from 'react-toastify';
import Spinner from '../common/Spinner';
import PropTypes from 'prop-types';

const orders = {
  byName: 'byName',
  byLevel: 'byLevel',
  byFrame: 'byFrame',
  byAttribute: 'byAttribute',
  byAtk: 'byAtk',
  byDef: 'byDef',
  byCardType: 'byCardType',
  byType: 'byType',
};

const CardList = ({ cards, loadCards, orderCards, loading }) => {
  const [order, setOrder] = useState('byName');

  useEffect(() => {
    if (cards.length === 0) {
      loadCards().catch((error) => {
        toast.error(`Loading Cards Failed: ${error.message}`);
      });
    }
  }, []);

  const handleOrderChange = (newOrder) => {
    // let cardsCopy = [...cards];
    // let monsters = cardsCopy.filter((card) => {
    //   card.cardType === 1
    // })
    if (order !== newOrder) {
      switch (newOrder) {
        case orders.byName:
          orderCards('name');
          break;
        case orders.byFrame:
          orderCards('cardFrame');
          break;
        case orders.byLevel:
          orderCards('level');
          break;
        case orders.byAttribute:
          orderCards('attribute');
          break;
        case orders.byAtk:
          orderCards('atk');
          break;
        case orders.byDef:
          orderCards('def');
          break;
        case orders.byType:
          orderCards('type');
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
  orderCards: PropTypes.func.isRequired,
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
  orderCards,
};

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
