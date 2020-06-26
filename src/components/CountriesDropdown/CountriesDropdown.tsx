import React from 'react';
import { Autocomplete } from '@material-ui/lab';
import { TextField } from '@material-ui/core';
import { CountriesDropdownProps } from '../../@types';
import { useStoreState } from '../../store';

const CountriesDropdown: React.FC<CountriesDropdownProps> = ({ selectedCountry, setSelectedCountry }) => {
  const countries = useStoreState((state) => state.covid.summaryData.Countries);
  return (
    <Autocomplete
      value={selectedCountry}
      onChange={(event, newValue) => {
        setSelectedCountry(newValue);
      }}
      id="combo-box-countries"
      options={countries ?? []}
      getOptionLabel={(countrie) => countrie.Country ?? 'Loading...'}
      style={{ width: 300 }}
      clearOnEscape
      renderInput={(params) => <TextField {...params} label="Country" variant="standard" />}
    />
  );
};

export default CountriesDropdown;
