export interface CountryType {
  Country: string;
  Slug: string;
  ISO2: string;
}
export interface CasesData {
  NewConfirmed?: number;
  TotalConfirmed?: number;
  NewDeaths?: number;
  TotalDeaths?: number;
  NewRecovered?: number;
  TotalRecovered?: number;
}

export interface CountryData extends CasesData {
  Country?: string;
  CountryCode?: string;
  Slug?: string;
  Date?: string;
}

export interface SummaryData {
  Global?: CasesData;
  Countries?: CountryData[];
  Date?: string;
}

export interface CountriesDropdownProps {
  selectedCountry: CountryData | null;
  setSelectedCountry: React.Dispatch<React.SetStateAction<CountryData | null>>;
}

export interface ConfirmedCasesProps {
  TotalConfirmed?: number;
  NewConfirmed?: number;
}

export interface DeathCasesProps {
  TotalDeaths?: number;
  NewDeaths?: number;
}

export interface RecoveredCasesProps {
  TotalRecovered?: number;
  NewRecovered?: number;
}

export interface SummaryCardProps extends ConfirmedCasesProps, DeathCasesProps, RecoveredCasesProps {
  title: string;
}
