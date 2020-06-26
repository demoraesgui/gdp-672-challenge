import covidModel, { CovidModel } from './covidModel';

export interface StoreModel {
  covid: CovidModel;
}

const storeModel: StoreModel = {
  covid: covidModel,
};

export default storeModel;
