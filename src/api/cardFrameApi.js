import { handleResponse, handleError } from './apiUtils';
const baseUrl = process.env.API_URL + '/cardFrames/';

export const getCardFrames = async () => {
  try {
    const response = await fetch(baseUrl);
    return await handleResponse(response);
  } catch (error) {
    handleError(error);
  }
};
