import axios from 'axios';
import { CountryType } from '../@types';
const api = axios.create({
  baseURL: 'https://api.covid19api.com',
  timeout: 1000,
});

export function getCountries() {
  return api.get<CountryType[]>('/countries').then((res) => res.data);
}

export default api;
