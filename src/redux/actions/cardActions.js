import actions from './actionTypes';
import * as cardApi from '../../api/cardApi';
import { beginApiCall, apiCallError } from './apiStatusActions';

export const saveCardSuccess = (card) => ({
  type: actions.CREATE_CARD_SUCCESS,
  payload: {
    card,
  },
});

export const updateCardSuccess = (card) => ({
  type: actions.UPDATE_CARD_SUCCESS,
  payload: {
    card,
  },
});

export const deleteCardOptimistic = (card) => ({
  type: actions.DELETE_CARD_OPTIMISTIC,
  payload: {
    card,
  },
});

export const loadCardsSuccess = (cards) => ({
  type: actions.LOAD_CARDS_SUCCESS,
  payload: {
    cards,
  },
});

export const orderCards = (cards) => ({
  type: actions.ORDER_CARDS,
  payload: {
    cards,
  },
});

//thunks ---------------

export const loadCards = (limit, offset) => async (dispatch) => {
  dispatch(beginApiCall());
  try {
    const { cards, totalCount } = await cardApi.getCards(limit, offset);
    dispatch(loadCardsSuccess(cards));
    return totalCount;
  } catch (error) {
    dispatch(apiCallError(error));
    throw error;
  }
};

export const saveCard = (card) => async (dispatch) => {
  dispatch(beginApiCall());
  try {
    const savedCard = await cardApi.saveCard(card);
    return card.id
      ? dispatch(updateCardSuccess(savedCard))
      : dispatch(saveCardSuccess(savedCard));
  } catch (error) {
    dispatch(apiCallError(error));
    throw error;
  }
};

// export const saveCard = (card) => (dispatch) => {
//   dispatch(beginApiCall());
//   return cardApi
//     .saveCard(card)
//     .then((savedCard) => {
//       card.id
//         ? dispatch(updateCardSuccess(savedCard))
//         : dispatch(saveCardSuccess(savedCard));
//     })
//     .catch((error) => {
//       dispatch(apiCallError(error));
//       throw error;
//     });
// };

export const deleteCard = (card) => (dispatch) => {
  dispatch(deleteCardOptimistic(card));
  return cardApi.deleteCard(card.id);
};
