import { Action, action } from 'easy-peasy';
import { SummaryData } from '../@types';

export interface CovidModel {
  summaryData: SummaryData;
  setSummaryData: Action<CovidModel, SummaryData>;
}

const covidModel: CovidModel = {
  summaryData: {},
  setSummaryData: action((state, payload) => {
    state.summaryData = payload;
  }),
};

export default covidModel;
