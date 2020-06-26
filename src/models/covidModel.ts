import { Action, action } from 'easy-peasy';
import { SummaryData, CountryDataByDate } from '../@types';

export interface CovidModel {
  summaryData: SummaryData;
  countryDataByDate: CountryDataByDate[];
  setSummaryData: Action<CovidModel, SummaryData>;
  setCountryDataByDate: Action<CovidModel, CountryDataByDate[]>;
}

const covidModel: CovidModel = {
  summaryData: {},
  countryDataByDate: [],
  setSummaryData: action((state, payload) => {
    state.summaryData = payload;
  }),
  setCountryDataByDate: action((state, payload) => {
    state.countryDataByDate = payload;
  }),
};

export default covidModel;
