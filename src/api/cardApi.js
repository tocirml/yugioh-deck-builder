import { handleResponse, handleError } from './apiUtils';
const baseUrl = process.env.API_URL + '/cards/';

export const getCards = async (limit, offset) => {
  try {
    const response = await fetch(`${baseUrl}?_start=${offset}&_limit=${limit}`);
    const totalCount = response.headers.get('X-Total-Count');
    const cards = await handleResponse(response);
    return { cards, totalCount };
  } catch (error) {
    handleError(error);
  }
};

export const saveCard = async (card) => {
  try {
    const response = await fetch(baseUrl + (card.id || ''), {
      method: card.id ? 'PUT' : 'POST', // POST for create, PUT to update when id already exists.
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(card),
    });
    return await handleResponse(response);
  } catch (error) {
    handleError(error);
  }
};

export const deleteCard = async (cardId) => {
  try {
    const response = await fetch(baseUrl + cardId, { method: 'DELETE' });
    await handleResponse(response);
  } catch (error) {
    handleError(error);
  }
};
