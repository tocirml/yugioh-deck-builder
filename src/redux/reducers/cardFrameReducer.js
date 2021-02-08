import actionTypes from '../actions/actionTypes';
import initialState from './initialState';

const cardFrameReducer = (
  state = initialState.cardFrames,
  { type, payload }
) => {
  switch (type) {
    case actionTypes.LOAD_CARD_FRAMES_SUCCESS:
      return payload.cardFrames;
    default:
      return state;
  }
};

export default cardFrameReducer;
