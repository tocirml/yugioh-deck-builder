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

  const cardsSplit = (cards, filter) => {
    let monsters = [],
      nonMonsters = [];
    cards.forEach((card) => (filter(card) ? monsters : nonMonsters).push(card));
    return [monsters, nonMonsters];
  };

  const orderCardsBy = (orderBy) => {
    if (orderBy === 'name' || orderBy === 'cardFrame') {
      return [...cards].sort((a, b) =>
        a[orderBy] > b[orderBy] ? 1 : b[orderBy] > a[orderBy] ? -1 : 0
      );
    } else {
      const [monsters, nonMonsters] = cardsSplit(
        cards,
        (card) => card.cardType === 1
      );

      monsters.sort((a, b) => {
        return a[orderBy] > b[orderBy] ? 1 : b[orderBy] > a[orderBy] ? -1 : 0;
      });

      nonMonsters.sort((a, b) =>
        a.cardFrame > b.cardFrame ? 1 : b.cardFrame > a.cardFrame ? -1 : 0
      );

      return [...monsters, ...nonMonsters];
    }
  };

  const handleOrderChange = (newOrder) => {
    // if (order === newOrder) return;
    switch (newOrder) {
      case orders.byName:
        orderCards(orderCardsBy('name'));
        break;
      case orders.byFrame:
        orderCards(orderCardsBy('cardFrame'));
        break;
      case orders.byLevel:
        orderCards(orderCardsBy('level'));
        break;
      case orders.byAttribute:
        orderCards(orderCardsBy('attribute'));
        break;
      case orders.byAtk:
        orderCards(orderCardsBy('atk'));
        break;
      case orders.byDef:
        orderCards(orderCardsBy('def'));
        break;
      case orders.byType:
        orderCards(orderCardsBy('type'));
        break;
      default:
        console.log('default');
    }
    setOrder(newOrder);
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
