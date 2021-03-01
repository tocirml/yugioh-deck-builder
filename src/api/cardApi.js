import { handleResponse, handleError } from './apiUtils';
const baseUrl = process.env.API_URL + '/cards/';

export const getCards = async (limit, offset, sort, order, query, filters) => {
  try {
    let url = `${baseUrl}?_start=${offset}&_limit=${limit}&_sort=${sort}&_order=${order}&q=${query}`;
    //apply all filters
    for (const [key, value] of Object.entries(filters)) {
      url += `&${key}=${value}`;
    }
    const response = await fetch(url);
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
