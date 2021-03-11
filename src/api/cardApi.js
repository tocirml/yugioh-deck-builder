import { handleResponse, handleError } from './apiUtils';
const baseUrl = process.env.API_URL + '/cards/';

let cache = [];

export const getCards = async (limit, offset, sort, order, query, filters) => {
  try {
    let response,
      totalCount,
      cards,
      url = `${baseUrl}?_start=${offset}&_limit=${limit}&_sort=${sort}&_order=${order}&q=${query}`;
    //apply all filters
    for (const [key, value] of Object.entries(filters)) {
      url += `&${key}=${value}`;
    }
    if (cache[url]) {
      cards = cache[url].cards;
      totalCount = cache[url].totalCount;
    } else {
      response = await fetch(url);
      totalCount = response.headers.get('X-Total-Count');
      cards = await handleResponse(response);
      cache[url] = { cards, totalCount };
    }
    return { cards, totalCount };
  } catch (error) {
    handleError(error);
  }
};

export const saveCard = async (card) => {
  try {
    const response = await fetch(`${baseUrl}${card.id || ''}`, {
      method: card.id ? 'PUT' : 'POST', // POST for create, PUT to update when id already exists.
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(card),
    });
    const savedCard = await handleResponse(response);
    if (!card.id) cache = []; // clearing cache cuz there was changes on DB
    return savedCard;
  } catch (error) {
    handleError(error);
  }
};

export const deleteCard = async (cardId) => {
  try {
    const response = await fetch(`${baseUrl}${cardId}`, { method: 'DELETE' });
    await handleResponse(response);
    cache = []; // clearing cache cuz there was changes on DB
  } catch (error) {
    handleError(error);
  }
};
