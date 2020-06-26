import axios from 'axios';
import { CountryType, SummaryData, CountryData } from '../@types';
import { format, addDays } from 'date-fns';
const api = axios.create({
  baseURL: 'https://api.covid19api.com',
  timeout: 1000,
});

export function getCountries() {
  return api.get<CountryType[]>('/countries').then((res) => res.data);
}

export function getSummaryData() {
  return api.get<SummaryData>('/summary').then((res) => res.data);
}

export function getCountryDataByDate(
  country: CountryData | null,
  fromDate: Date | null,
  toDate: Date | null | undefined,
) {
  if (country && fromDate && toDate) {
    const from = `${format(addDays(fromDate, -1), 'yyyy-MM-dd')}T00:00:00Z`;
    const to = `${format(addDays(toDate, -1), 'yyyy-MM-dd')}T00:00:00Z`;
    return api.get(`/country/${country.Slug}`, {
      params: {
        from,
        to,
      },
    });
  }
  return;
}

export default api;
