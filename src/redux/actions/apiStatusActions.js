import actions from './actionTypes';

export const beginApiCall = () => ({ type: actions.BEGIN_API_CALL });

export const apiCallError = () => ({ type: actions.API_CALL_ERROR });
