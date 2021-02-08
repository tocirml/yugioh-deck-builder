import { combineReducers } from 'redux';
import cards from './cardReducer';
import cardFrames from './cardFrameReducer';
import apiCallsInProgress from './apiStatusReducer';

const rootReducer = combineReducers({
  cards,
  cardFrames,
  apiCallsInProgress,
});

export default rootReducer;
