import React, { useEffect, useState } from 'react';
import { CardListView } from './CardListView';
import { connect } from 'react-redux';
import { loadCards, orderCards } from '../../redux/actions/cardActions';
import { toast } from 'react-toastify';
import ReactPaginate from 'react-paginate';
import Spinner from '../common/Spinner';
import LimitPerPage from '../common/LimitPerPage';
import PropTypes from 'prop-types';
import './pagination.scss';

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
  const [offset, setOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [perPage, setPerPage] = useState(10); // limit
  const [initialPage, setInitialPage] = useState(0);

  useEffect(() => {
    loadCards(perPage, offset)
      .then((totalCount) => {
        setPageCount(Math.ceil(totalCount / perPage));
      })
      .catch((error) => {
        toast.error(`Loading Cards Failed: ${error.message}`);
      });
  }, [offset, perPage]);

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
    if (order === newOrder) return;
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

  const handlePageClick = (data) => {
    let selected = data.selected;
    let offset = Math.ceil(selected * perPage);
    setInitialPage(selected);
    setOffset(offset);
  };

  const limitChangeHandler = (limit) => {
    setPerPage(limit);
  };

  return loading ? (
    <Spinner />
  ) : cards.length === 0 ? (
    <div className="no-cards">CARD DATABASE IS EMPTY</div>
  ) : (
    <>
      <LimitPerPage limit={perPage} onLimitChange={limitChangeHandler} />
      <CardListView
        cards={cards}
        order={order}
        onOrderChange={handleOrderChange}
      />
      <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={pageCount}
        initialPage={initialPage}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
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
