import actionTypes from '../actions/actionTypes';
import initialState from './initialState';

const cardReducer = (state = initialState.cards, { type, payload }) => {
  switch (type) {
    case actionTypes.CREATE_CARD_SUCCESS:
      return [...state, { ...payload.card }];
    case actionTypes.UPDATE_CARD_SUCCESS:
      return state.map((card) =>
        card.id === payload.card.id ? payload.card : card
      );
    case actionTypes.LOAD_CARDS_SUCCESS:
      return payload.cards;
    case actionTypes.DELETE_CARD_OPTIMISTIC:
      return state.filter((card) => card.id !== payload.card.id);
    default:
      return state;
  }
};

export default cardReducer;
