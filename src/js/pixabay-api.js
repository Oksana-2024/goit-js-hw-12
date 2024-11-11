import axios from 'axios';

export const API_KEY = '46863528-4fa0c0b33a1ffe205dd5514d4';
export const BASE_URL = 'https://pixabay.com/api/';
export const ITEMS_PER_PAGE = 15;

export async function fetchData(url = BASE_URL, options = {}) {
  return axios(url, options);
}
