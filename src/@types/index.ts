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
