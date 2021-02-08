import actions from './actionTypes';
import * as cardFrameApi from '../../api/cardFrameApi';
import { beginApiCall, apiCallError } from './apiStatusActions';

export const loadCardFramesSuccess = (cardFrames) => ({
  type: actions.LOAD_CARD_FRAMES_SUCCESS,
  payload: {
    cardFrames,
  },
});

export const loadCardFrames = () => async (dispatch) => {
  dispatch(beginApiCall());
  try {
    const cardFrames = await cardFrameApi.getCardFrames();
    return dispatch(loadCardFramesSuccess(cardFrames));
  } catch (error) {
    dispatch(apiCallError(error));
    throw error;
  }
};
