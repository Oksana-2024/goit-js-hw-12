import axios, {isCancel, AxiosError} from 'axios';

export const API_KEY = '46863528-4fa0c0b33a1ffe205dd5514d4';

export const BASE_URL = 'https://pixabay.com/api/';

  axios (url = BASE_URL, options = {}) {
    try {
        return axios(url, options)
      } catch (error) {
        console.log(error);
      }
  
// try {response => {
//   if (!response.ok) {
//     throw new Error(response.statusText);
//   }
//   return response.json();
// });
}


//return axios(url, options)