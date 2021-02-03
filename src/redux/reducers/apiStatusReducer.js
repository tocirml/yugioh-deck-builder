import actions from '../actions/actionTypes';
import initialState from './initialState';

const actionTypeEndsInSucess = (action) =>
  action.substring(action.length - 8) === '_SUCCESS';

const apiCallStatusReducer = (
  state = initialState.apiCallsInProgress,
  action
) => {
  if (action.type == actions.BEGIN_API_CALL) {
    return state + 1;
  } else if (
    action.type === actions.API_CALL_ERROR ||
    actionTypeEndsInSucess(action.type)
  ) {
    return state - 1;
  }
  return state;
};

export default apiCallStatusReducer;
