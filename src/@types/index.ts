export interface CountryType {
  Country: string;
  Slug: string;
  ISO2: string;
}

export interface ConfirmedCasesProps {
  totalConfirmed: number;
  newConfirmed: number;
}

export interface DeathCasesProps {
  totalDeaths: number;
  newDeaths: number;
}

export interface RecoveredCasesProps {
  totalRecovered: number;
  newRecovered: number;
}

export interface SummaryCardProps extends ConfirmedCasesProps, DeathCasesProps, RecoveredCasesProps {
  title: string;
}

export interface CasesData {
  newConfirmed?: number;
  totalConfirmed?: number;
  newDeaths?: number;
  totalDeaths?: number;
  newRecovered?: number;
  totalRecovered?: number;
}

export interface CountryData extends CasesData {
  country?: string;
  countryCode?: string;
  slug?: string;
  date?: string;
}

export interface SummaryData {
  global?: CasesData;
  countries?: CountryData[];
}
