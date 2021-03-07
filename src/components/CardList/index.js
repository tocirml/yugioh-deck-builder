import React, { useEffect, useState, useCallback } from 'react';
import { CardListView } from './CardListView';
import { connect } from 'react-redux';
import { loadCards } from '../../redux/actions/cardActions';
import { toast } from 'react-toastify';
import ReactPaginate from 'react-paginate';
import Spinner from '../common/Spinner';
import LimitPerPage from '../common/LimitPerPage';
import PropTypes from 'prop-types';
import './pagination.scss';
import debounce from 'lodash.debounce';
import CardModal from '../CardModal';

const CardList = ({ cards, loadCards, loading }) => {
  const [cardOptions, setCardOptions] = useState(
    localStorage.getItem('cardOptions')
      ? JSON.parse(localStorage.getItem('cardOptions'))
      : {
          sort: 'name',
          order: 'asc',
          perPage: 10,
          offset: 0,
          query: '',
          filters: {},
        }
  );
  const [pageCount, setPageCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [initialPage, setInitialPage] = useState(0);
  const [displayFilterOptions, setDisplayFilterOptions] = useState(false);
  const [modalCard, setModalCard] = useState(null);

  useEffect(() => {
    // console.log(cardOptions);
    loadCards(cardOptions)
      .then((totalCount) => {
        setPageCount(Math.ceil(totalCount / cardOptions.perPage));
      })
      .catch((error) => {
        toast.error(`Loading Cards Failed: ${error.message}`);
      });

    return () =>
      localStorage.setItem('cardOptions', JSON.stringify(cardOptions));
  }, [cardOptions]);

  const handleSortChange = (newSort) => {
    if (cardOptions.sort === newSort) return;
    let newOptions = { ...cardOptions, sort: newSort };
    setCardOptions(newOptions);
  };
  const handleOrderChange = (newOrder) => {
    if (cardOptions.order === newOrder) return;
    setCardOptions({ ...cardOptions, order: newOrder });
  };

  const handlePageClick = (data) => {
    let selected = data.selected;
    let offset = Math.ceil(selected * cardOptions.perPage);
    setInitialPage(selected);
    setCardOptions({ ...cardOptions, offset });
  };

  const limitChangeHandler = (limit) => {
    setCardOptions({ ...cardOptions, perPage: limit, offset: 0 });
  };

  const filterButtonClick = () => {
    setDisplayFilterOptions(!displayFilterOptions);
  };

  const handleFilterUpdate = (event) => {
    const { name, value } = event.target;
    let optionsCopy = {
      ...cardOptions,
      filters: { ...cardOptions.filters },
    };
    if (optionsCopy.filters[name] == value || value === '') {
      delete optionsCopy.filters[name];
    } else {
      optionsCopy.filters[name] = name.match(
        /cardFrame|cardType|level|atk|def|status/
      )
        ? parseInt(value, 10)
        : value;
    }
    setCardOptions(optionsCopy);
  };

  const debouncedSave = useCallback(
    debounce(
      (nextValue) => setCardOptions({ ...cardOptions, query: nextValue }),
      1000
    ),
    []
  );

  const handleSearchQueryChange = (event) => {
    const { value } = event.target;
    setSearchQuery(value);
    debouncedSave(value);
  };

  const handleCardModal = (card) => {
    setModalCard(card);
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <LimitPerPage
            limit={cardOptions.perPage}
            onLimitChange={limitChangeHandler}
          />
          <CardListView
            cards={cards}
            sort={cardOptions.sort}
            order={cardOptions.order}
            filters={cardOptions.filters}
            searchQuery={searchQuery}
            displayFilterOptions={displayFilterOptions}
            onCardModalChange={handleCardModal}
            onSearchQueryChange={handleSearchQueryChange}
            filterButtonClick={filterButtonClick}
            onFilterChange={handleFilterUpdate}
            onOrderChange={handleOrderChange}
            onSortChange={handleSortChange}
          />
        </>
      )}
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
      <CardModal card={modalCard} onCardModalChange={handleCardModal} />
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
